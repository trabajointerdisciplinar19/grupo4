firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var referencia=database.ref("productos");
var productos={};



// Chequeamos la autenticación antes de acceder al resto de contenido de este fichero.
firebase.auth().onAuthStateChanged(function(user) {
  if (user)
  {
   // console.log(user);
   // console.log('Usuario: '+user.uid+' está logueado con '+user.providerData[0].providerId);
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




///////////////


  function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
function inciar_temporizador(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  function updateClock(){
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock,1000);
}

////////////////

referencia.on('value',function(datos)
{
    // Eliminamos el contenido del listado para actualizarlo.
    //$("#listado div.row").remove();

    productos=datos.val();
    console.log(productos); 
    // Recorremos los productos y los mostramos
    $.each(productos, function(indice,valor) {      


    var prevProducto='<div style="text-align:center;" class="col-lg-4 col-md-6 mb-4" id="'+indice+'">';
       prevProducto+='<div class="card">';              
       prevProducto+=' <a href="#"><img class="card-img-top" src="img/productos/'+valor.imagen+'" style=" top: 15px; height:150px; width:200px;" alt=""></a>';
       prevProducto+=' <div class="card-body" >  ';
       prevProducto+='   <h4 class="card-title">';
       prevProducto+='   <a href="#" class="titulo_producto">'+valor.articulo+'</a>';
       prevProducto+='   </h4> ';             
       prevProducto+='   <p class="temporizador card-text" ><div class="timer_producto" id="timer_'+indice+'">'
       prevProducto+='                       <span class="days"></span> d :'
       prevProducto+='                       <span class="hours"></span> h : '
       prevProducto+='                       <span class="minutes"></span> m : '
       prevProducto+='                       <span class="seconds"></span> s '
        prevProducto+='  </div></p>';
       prevProducto+='   <p class="descripcion card-text" >'+valor.descripcion+'</p>';
       prevProducto+='   <p class="ultima_puja card-text">'+valor.ultima_puja+'</p>';
       prevProducto+='   <p class="ultimo_usuario card-text">'+valor.ultimo_usuario+'</p>';
       prevProducto+=' </div>';
       prevProducto+=' <div class="card-footer">';
       prevProducto+='<button type="button" class="btn btn-warning" onclick="pujarProducto(\''+indice+'\')">Pujar</button>';
       prevProducto+='   <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>';
       prevProducto+=' </div>';
     prevProducto+=' </div>';
    prevProducto+='</div>';

        
       // $(prevProducto).appendTo('#listado');
           $("#listado").append(prevProducto);

           inciar_temporizador('timer_'+indice,valor.fecha_fin);
    });

},function(objetoError){
    console.log('Error de lectura:'+objetoError.code);
});




function pujarProducto(id)
{
    // Para pasar el ID a otro proceso lo hacemos a través de window.name
    window.name= id;

    // Cargamos la página editarproducto.html
    location.assign('pujar_producto.php');
}
