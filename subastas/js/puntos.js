$(document).ready(function()
 {
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var user_;


    // Chequeamos la autenticación antes de acceder al resto de contenido de este fichero.
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
      {
       //console.log(user);
       console.log('Usuario: '+user.uid+' está logueado con '+user.providerData[0].providerId);
       user_ = user.uid;
       $("#logger navbar navbar-light").remove();
        var logueado='<li><p class="navbar-text navbar-rigth">'+user.email+'</p></li>';
         logueado+='<li><button type="button" class="btn btn-warning navbar-btn" id="botonLogout">Salir</button></li>';

         
         $(logueado).appendTo('.bot_user');
         $("#botonLogout").click(desconectar);

      } else {
         // console.log('Usuario no logueado');
          location.assign('login.php');
      }
    });

    function desconectar(){
        firebase.auth().signOut().then(function() {
           location.assign('index.php');
       }, function(error)
       {
          alert("Error al intentar desconectarse.");
      });

    }

    var imagen;

    $("#imagen").change(function()
    {
        var descriptor=new FileReader();
        descriptor.readAsDataURL(this.files[0]);

        descriptor.onloadend = function()
        {
            imagen=descriptor.result;
            $("#botonGuardar").prop("disabled",false);
            $("#previsualizacion").attr("src",imagen);
        };
    });

  console.log("Si problemas hasta aqui");
    $("#botonGuardar").click(function()
    {
        
        prov=user_;
      
        if (!imagen)
        {
          //var prevProducto='<FONT COLOR="red" SIZE="5"><I><B>Ingrese foto</B></I></FONT> ';
            imagen="NONE";
          //$(prevProducto).appendTo('#listado');

        }

        //var referencia_=database.ref("productos");
        var referencia = database.ref("CompPuntos")
        console.log("Si problemas hasta aqui");

        referencia.push(
        {
            prov: user_,
            imagen: imagen
        },function()
        {
            alert('El alta se ha realizado correctamente');
            location.assign('miperfil.php');
        });
    });

});