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
        var prevProducto='<div id="form_wrapperI"  id="'+indice+'">';

        prevProducto+='<div class="row">';
        prevProducto+='<div id="cabecera">';
        prevProducto+='<h2>'+valor.articulo+'</h2></div>';
        prevProducto+='</div>';


        prevProducto+='<div class="row">';
        prevProducto+='<div class="col-md-3 imagenFix">';
        if (valor.imagen=='NONE')
            prevProducto+='<img alt="Sin Fotografía"/>';
        else
            prevProducto+='<img src="'+valor.imagen+'"/>';
        prevProducto+='</div>';

        prevProducto+='<div class="col-md-3">';
        prevProducto+='<p style="margin-left: 50px">'+valor.descripcion+'</p>';
        prevProducto+='</div>';
        prevProducto+='</div>';

        /////////////////////////////////////

        prevProducto+='<div class="row" >';

        prevProducto+='<div style="top:15px;" class="col-md-3">';
        prevProducto+='<button style="margin-left: 50px ; top: 15px; padding: 2vh 50px; background-color: black; color:white;" type="button" class="btn btn-default">s/. '+valor.precio+'</button>';
        prevProducto+='</div>';

        prevProducto+='<div style="top:15px;" class="col-md-3">';
        prevProducto+='<button id="boton1">'+valor.precio+'</button>';
        prevProducto+='</div>';

        prevProducto+='</div>';

        prevProducto+='<div class="row">';

        prevProducto+='<div style="top:25px; margin-left: 50px;" class="col-md-3">';
        prevProducto+='<button type="button" class="btn btn-warning" onclick="pujar(\''+indice+'\')">Pujar</button>';
        prevProducto+='</div>';

        prevProducto+='<div style="top:25px;" class="col-md-3">';
        prevProducto+='<button type="button" class="btn btn-danger" onclick="detalles(\''+indice+'\')">Detalles</button>';
        prevProducto+='</div>';

        prevProducto+='</div>';
        prevProducto+='</div>';

        prevProducto+='<div class="row espaciador">';
        prevProducto+='</div>';

        $(prevProducto).appendTo('#listado');
    });

},function(objetoError){
    console.log('Error de lectura:'+objetoError.code);
});

