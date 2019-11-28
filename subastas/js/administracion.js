// Inicializar la base de datos
/*var firebaseConfig = {
    apiKey: "AIzaSyA-u996k8fkyja32jv0kbrb-3-XvtH6yz8",
    authDomain: "subastatimereal.firebaseapp.com",
    databaseURL: "https://subastatimereal.firebaseio.com",
    projectId: "subastatimereal",
    storageBucket: "subastatimereal.appspot.com",
    messagingSenderId: "470011455740",
    //appId: "1:470011455740:web:3d4466ce3f50c43a508f79",
    //measurementId: "G-1TK0PZJ07Y"
    };*/

  var firebaseConfig = {
    apiKey: "AIzaSyD1scIJZRUAPxQvOUZ1rurD6z1SbJN-vVs",
    authDomain: "subastape-be7d6.firebaseapp.com",
    databaseURL: "https://subastape-be7d6.firebaseio.com",
    projectId: "subastape-be7d6",
    storageBucket: "subastape-be7d6.appspot.com",
    messagingSenderId: "1067476181394",
   // appId: "1:1067476181394:web:954c255942c57ce74c614b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var referencia=database.ref("productos");
var productos={};

// Chequeamos la autenticación antes de acceder al resto de contenido de este fichero.
firebase.auth().onAuthStateChanged(function(user) {
  if (user)
  {
    console.log(user);
    console.log('Usuario: '+user.uid+' está logueado con '+user.providerData[0].providerId);
    var logueado='<li><p class="navbar-text navbar-center">'+user.email+'</p></li>';
   logueado+='<li><button type="button" class="btn btn-warning navbar-btn" id="botonLogout">Salir</button></li>';

   $(logueado).appendTo('.nav');
   $("#botonLogout").click(desconectar);

} else
{
    console.log('Usuario no logueado');
    location.assign('login.html');
}
});

function desconectar()
{
    firebase.auth().signOut().then(function() {
       location.assign('index.html');
   }, function(error)
   {
      alert("Error al intentar desconectarse.");
  });

}

referencia.on('value',function(datos)
{
    // Eliminamos el contenido del listado para actualizarlo.
    $("#listado div.row").remove();

    productos=datos.val();

    // Recorremos los productos y los mostramos
    $.each(productos, function(indice,valor)
    {
        var prevProducto='<div class="row" id="'+indice+'"><div class="col-md-3 cabeceraProducto">';

        prevProducto+='<h2>'+valor.articulo+'</h2></div>';

        prevProducto+='<div class="row"><div class="col-md-3 cabeceraProducto">';
        prevProducto+='<h2>'+valor.precio+' €.</h2></div>';
        prevProducto+='</div>';

        prevProducto+='<div class="row">';
        prevProducto+='<div class="col-md-3 imagenFix">';
       /* if (valor.imagen=='NONE')
            prevProducto+='<img alt="Sin Fotografía"/>';
        else
            prevProducto+='<img src="'+valor.imagen+'"/>';
        prevProducto+='</div>';*/

        prevProducto+='<div class="col-md-3">';
        prevProducto+='<p>'+valor.descripcion+'</p>';
        prevProducto+='</div>';
        prevProducto+='</div>';

        prevProducto+='<div class="row">';

        prevProducto+='<div class="col-md-3">';
        prevProducto+='<button type="button" class="btn btn-warning" onclick="editarProducto(\''+indice+'\')">Editar Producto</button>';
        prevProducto+='</div>';

        prevProducto+='<div class="col-md-3">';
        prevProducto+='<button type="button" class="btn btn-danger" onclick="borrarProducto(\''+indice+'\')">Borrar Producto</button>';
        prevProducto+='</div>';

        prevProducto+='</div>';
        prevProducto+='<div class="row espaciador">';
        prevProducto+='</div>';

        $(prevProducto).appendTo('#listado');
    });

},function(objetoError){
    console.log('Error de lectura:'+objetoError.code);
});


function editarProducto(id)
{
    // Para pasar el ID a otro proceso lo hacemos a través de window.name
    window.name= id;

    // Cargamos la página editarproducto.html
    location.assign('editarproducto.html');
}

function borrarProducto(id)
{
    if (confirm("¿Está seguro/a de que quiere borrar este artículo?") == true)
    {
        referencia.child(id).remove();
    }
}