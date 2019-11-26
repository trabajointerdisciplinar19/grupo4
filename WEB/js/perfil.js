// Inicializar la base de datos
var firebaseConfig = {
    apiKey: "AIzaSyA-u996k8fkyja32jv0kbrb-3-XvtH6yz8",
    authDomain: "subastatimereal.firebaseapp.com",
    databaseURL: "https://subastatimereal.firebaseio.com",
    projectId: "subastatimereal",
    storageBucket: "subastatimereal.appspot.com",
    messagingSenderId: "470011455740",
    //appId: "1:470011455740:web:3d4466ce3f50c43a508f79",
    //measurementId: "G-1TK0PZJ07Y"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var referencia=database.ref("users");
var Usuarios=database.ref("productos");
var productos={};
var nombre;

// Chequeamos la autenticación antes de acceder al resto de contenido de este fichero.
firebase.auth().onAuthStateChanged(function(user) {
  if (user)
  {
    console.log(user);
    console.log('Usuario: '+user.uid+' está logueado con '+user.providerData[0].providerId);
    var logueado='<li><p class="navbar-text navbar-center">'+user.email+'</p></li>';
   logueado+='<li><button type="button" class="btn btn-warning navbar-btn" id="botonLogout">Salir</button></li>';


    referencia.on('value',function(datos)
    {
        // Eliminamos el contenido del listado para actualizarlo.
        $("#listado div.row").remove();

        productos=datos.val();

        // Recorremos los productos y los mostramos
        $.each(productos, function(indice,valor)
        {
            if (user){
              var prevProducto='<div class="row" id="'+indice+'"><div class="col-md-3 cabeceraProducto">';
              $(prevProducto).appendTo('#listado');
            }
        });

    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

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