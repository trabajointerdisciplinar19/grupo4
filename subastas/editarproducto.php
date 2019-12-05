<!DOCTYPE html> 
<html> 
<head> 
    <title> 
        Async file upload with jQuery 
    </title> 
</head> 
  
<?php include("elements/head.php");?>
 <script src="js/editarproducto.js.js"></script>
 <script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> 
    </script> 

<body>
    <?php include("elements/menu.php");?>
<br><br>
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