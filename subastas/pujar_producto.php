<?php include("elements/head.php");?>
 <script src="js/pujar_producto.js"></script>

 <script>

</script>
 
<body>
	<?php include("elements/header.php");?>
    <?php include("elements/menu.php");?>
<br><br>


  <!-- Page Content -->
<div class="container">

    <!-- Content Row -->
    
   <h1 class="titulo_producto_puja"></h1>
   <br>   
    <div class="row">

      <div class="col-md-4 mb-7">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title"></h2>
            <p class="card-text"><img  class="imagen_producto_puja" style="width: 200px; " src="img/productos/"></p>
          </div>
          <div class="card-footer">
            <span  class="btn btn-primary btn-sm">Detalles</span><br>
            <p class="descripcion_producto_puja"></p> 

          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-4 mb-7">
        <div class="card h-100">
          <div class="card-body">
          <!--  <h2 class="card-title">Temporizador</h2>-->
   

		  <p class="temporizador card-puja" >
		  	  <div class="timer_producto_puja" id="">
			      <span class="days"></span> d 
			      <span class="hours"></span> h 
			      <span class="minutes"></span> m 
			      <span class="seconds"></span> s 
		      </div>
		  </p>
          <p class="ultima_puja_producto card-puja"><input type="text" class="form-control" id="ultima_pujape"> </p>
          <img src="img/logo_subastas.png" style="width:200px; ">
          <p class="ultimo_usuario_producto card-puja"></p>

            
          </div>
          <div class="card-footer">
          <button type="button" class="btn btn-primary" id="botonPujar">Pujar</button>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      <div class="col-md-4 mb-7" style="width: 200px; height: 460px; overflow-y: scroll;">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title" style="color:red; ">Historial de ofertas</h2>
            <table class="table table-striped">
				  <thead>
				    <tr>
				      <th scope="col">Usuario</th>
				      <th scope="col">Oferta Acum</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>loqui</td>
				      <td>S/. 2.34</td>
				    </tr>
				    <tr>
				      <td>Luz</td>
				      <td>S/. 1.34</td>
				    </tr>
				    <tr>
				      <td>Erika</td>
				      <td>S/. 3.13</td>
				    </tr>
				    <tr>
				      <td>loqui</td>
				      <td>S/. 2.34</td>
				    </tr>
				    <tr>
				      <td>Luz</td>
				      <td>S/. 1.34</td>
				    </tr>
				    <!-- <tr>
				      <td>Erika</td>
				      <td>S/. 3.13</td>
				    </tr>
				    <tr>
				      <td>loqui</td>
				      <td>S/. 2.34</td>
				    </tr>
				    <tr>
				      <td>Luz</td>
				      <td>S/. 1.34</td>
				    </tr>
				    <tr>
				      <td>Erika</td>
				      <td>S/. 3.13</td>
				    </tr>-->

				  </tbody>
				</table>
          </div>

        </div>
      </div>
      <!-- /.col-md-4 -->

     <br><br> <br><br> <br><br>

      <div class="row" style="margin-top:50px; background:#fff;">
      <div class="col-md-8 mb-5">
        <h2>What We Do</h2>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
        <a class="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
      </div>
      <div class="col-md-4 mb-5">
        <h2>Contact Us</h2>
        <hr>
        <address>
          <strong>pruebas</strong>
          <br>
          <br>
          <br>
        </address>
        <address>
          <abbr title="Phone">P:</abbr>
       
          <br>
          <abbr title="Email">E:</abbr>
          <a href="mailto:#">tutooooo</a>
        </address>
      </div>
    </div>

    </div>
    <!-- /.row -->

  <!-- /.col-lg-12-->
</div>
  <!-- /.container -->

 <?php include("elements/footer.php");?>

</body>
</html>

