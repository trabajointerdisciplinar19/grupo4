<?php include("elements/head.php");?>
 <script src="js/administracion.js"></script>
 <script>

</script>

<body>
    <?php include("elements/menu.php");?>
<br><br>

<div class="btn-group" >
  <button style="margin-left:10px ; top:15px" class="btn btn-default btn-lg dropdown-toggle"
          type="button" class="btn btn-default" id="listado"> 
    MIS PRODUCTOS
  </button>
</div>

<div class="btn-group" >
  <button style="margin-left: 10px; top:15px" class="btn btn-default btn-lg dropdown-toggle"
          type="button" data-toggle="dropdown" id="addProducto" >
    AGREGAR PRODUCTO 
  </button>    
</div>

    
<div  class="container-fluid" id="listado">  </div>

<br><br>
<!--<br><br><br><br><br><br><br><br> --->
 <!-- /.container -->

 <?php include("elements/footer.php");?>

</body>
</html>


