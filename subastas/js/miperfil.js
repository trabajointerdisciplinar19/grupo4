// Inicializar la base de datos
/*var firebaseConfig = {
    apiKey: "AIzaSyD1scIJZRUAPxQvOUZ1rurD6z1SbJN-vVs",
    authDomain: "subastape-be7d6.firebaseapp.com",
    databaseURL: "https://subastape-be7d6.firebaseio.com",
    projectId: "subastape-be7d6",
    storageBucket: "subastape-be7d6.appspot.com",
    messagingSenderId: "1067476181394",
    appId: "1:1067476181394:web:954c255942c57ce74c614b"
  };*/
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var referencia=database.ref("users");
//var Usuarios=database.ref("productos");
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


    referencia.on('value',function(users)
    {
        // Eliminamos el contenido del listado para actualizarlo.
        
        /*$("#listado div.row").remove();

        productos=datos.val();
        var prevProducto = '<h1> Identificado con '+user.uid+'</h1>';
        prevProducto+='<h1>'+referencia.child(username)+'</h1>';
        prevProducto+='<h1>'+user.email+'</h1>';
        $(prevProducto).appendTo('#listado');
        */
        /*// Recorremos los productos y los mostramos
        $.each(productos, function(indice,valor)
        {
            if (user){
              var prevProducto='<HI>'+user.email+'</HI>';
              $(prevProducto).appendTo('#listado');
            }
        });*/

    $("#listado div.row").remove();

    productos=users.val();

    // Recorremos los productos y los mostramos
    $.each(productos, function(indice,valor)
    {
        var prevProducto='<div style="margin-left: 10px;" class="row" id="'+indice+'"><div class="col-md-3 cabeceraProducto style="margin-left: 10px;" >';
        if (valor.email == user.email){
          console.log(valor.email);
          console.log(valor.username);
          prevProducto+='<p style="margin-left: 10px;"  > Logueado con '+valor.email+'</p>';
          prevProducto+='<p style="margin-left: 10px;" > Identificado con '+valor.username+'</p>';
          prevProducto+='</div>';
        }else{
          console.log("null");
        }
        $(prevProducto).appendTo('#listado');
    });

    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

   $(logueado).appendTo('.nav');
   $("#botonLogout").click(desconectar);

  } else
  {
      console.log('Usuario no logueado');
      location.assign('login.php');
  }
});

function desconectar()
{
    firebase.auth().signOut().then(function() {
       location.assign('index.php');
   }, function(error)
   {
      alert("Error al intentar desconectarse.");
  });

}


function EditarUser(id)
{
    // Para pasar el ID a otro proceso lo hacemos a través de window.name
    window.name= id;

}

function EliminarCuenta(id)
{
    //validar 
    //confirmar
    if (confirm("¿Está seguro/a de que quiere borrar este artículo?") == true)
    {
        referencia.child(id).remove();
    }
}