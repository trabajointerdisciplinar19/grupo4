<!DOCTYPE html>
<html lang="es">
<head> 
<title> 
    Async file upload with jQuery 
</title> 
</head> 
<!--  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style1.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase.js"></script>
    <script src="js/editarproducto.js"></script>

    <title>Edición de Productos</title>
</head>
-->
<?php include("elements/head.php");?>
 <script src="js/editarproducto.js.js"></script>
 <script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> 
    </script> 

<body>
    <?php include("elements/menu.php");?>
<br><br>
<body>
    <!--  <nav class="navbar navbar-inverse navbar-fixed-top">
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="index.html" title="Inicio">Inicio</a></li>
                <li class="active"><a href="administracion.html" title="">Administracion</a></li>
                <li><a href="nuevoproducto.html" title="">Añadir Productos</a></li>
            </ul>
        </div>
    </nav>
-->
    <div class="container-fluid">

        <form id="formularioEdicion">
            <div class="form-group">
                <label for="articulo">Articulo</label>
                <input type="text" class="form-control" id="articulo">
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea class="form-control" id="descripcion" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="precio">Precio</label>
                <input type="text" class="form-control" id="precio">
            </div>
            <div class="form-group">
                <label for="imagen">Elegir Imagen</label>
                <input type="file" id="imagen">
                <p class="help-block">Elija una imagen para este artículo</p>
                <img id="previsualizacion">
            </div>
            <button type="button" class="btn btn-primary" id="botonActualizar">Actualizar Producto</button>
        </form>
    </div>
 <?php include("elements/footer.php");?>
</body>
</html>
