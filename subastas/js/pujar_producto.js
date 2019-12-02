$(document).ready(function(){

var database = firebase.database();
var referencia=database.ref("productos");

var productoId= window.name;
//console.log(productoId);

var articulo, descripcion, precio, imagen;
var producto={};



// Chequeamos la autenticación antes de acceder al resto de contenido de este fichero.
firebase.auth().onAuthStateChanged(function(user) {
  if (user)
  {
   // console.log(user);
   // console.log('Usuario: '+user.uid+' está logueado con '+user.providerData[0].providerId);
    var logueado='<li><p class="navbar-text navbar-rigth">'+user.username+'/'+user.email+'</p></li>';
     logueado+='<li><button type="button" class="btn btn-warning navbar-btn" id="botonLogout">Salir</button></li>';

     
     $(logueado).appendTo('.bot_user');
     $("#botonLogout").click(desconectar);

  } else {
     // console.log('Usuario no logueado');
      location.assign('login.php');
  }
});

function desconectar()
{
    firebase.auth().signOut().then(function()
    {
       location.assign('index.php');
   }, function(error)
   {
      alert("Error al intentar desconectarse.");
  });
}




  // Buscamos el artículo.
    referencia.child(productoId).once('value',function(datos)
    {
        producto=datos.val();

        articulo= producto.articulo;
        ultima_puja=  producto.ultima_puja;
        ultimo_usuario= producto.ultimo_usuario;
        descripcion= producto.descripcion;
        precio='S/. '+ producto.precio;
        imagen=producto.imagen;
        fecha_fin=producto.fecha_fin;

        $('.titulo_producto_puja').html(articulo);
        $('.descripcion_producto_puja').html(descripcion);
        $('.ultima_puja_pe').val(ultima_puja);
        $('.ultimo_usuario_producto').html(ultimo_usuario);
        $('.imagen_producto_puja').attr('src','img/productos/'+imagen);
    });


   $("#botonPujar").click(function()    {


       /* var articulo=$("#articulo").val();
        var descripcion=$("#descripcion").val();
        var precio=$("#precio").val();
        var imagen=imagenEdicion;*/

        // Guardamos los datos en referencia
        referencia.child(productoId).update(
        {
            ultima_puja: ultima_puja+1,
           // descripcion: descripcion,
           // precio: precio,
           // imagen: imagen,
        }, alFinalizar);
    });

   function alFinalizar(error)
    {
      // event.preventDefault();
        if (error)
        {
            alert('Ha habido problemas al realizar la operación: '+error.code);
        }
        else{
            alert('Operación realizada con éxito !');
            location.assign('index.php');
        }
    }
 });