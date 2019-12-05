<!DOCTYPE html> 
<html> 
<head> 
    <title> 
        Async file upload with jQuery 
    </title> 
      
    
</head> 
  
<?php include("elements/head.php");?>
 <script src="js/nuevoproducto.js"></script>
 <script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> 
    </script> 

<body>
    <?php include("elements/menu.php");?>
<br><br>

<div class="container-fluid">
        <form id="formularioAlta">
            <div class="form-group">
                <label for="articulo">Articulo</label>
                <input type="text" class="form-control" id="articulo" placeholder="Nombre del artículo">
            </div>
            <div class="form-group">
                <label for="descripcion">Descripción</label>
                <textarea class="form-control" id="descripcion" placeholder="Descripción del artículo" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="precio">Precio</label>
                <input type="text" class="form-control" id="precio" placeholder="Precio del artículo">
            </div>
            <div class="form-group">
                <label for="categoria">Categoria:</label>
                <select id="categoria" name="categoria">
                    <option value="1">Carros</option>
                    <option value="2">Antiguedad</option>
                    <option value="3">Tecnologia</option>
                    <option value="4" selected>Miselania</option> 
              </select>
            </div>
            <div class="form-group">
                <label for="fecha">Fecha:</label>
                <input type="datetime-local" id="fecha">
            </div>
            <div class="form-group">
                <label for="imagen">Elegir Imagen</label>
                <input type="file" id="imagen">
                <p class="help-block">Elija una imagen para este artículo</p>
                <img id="previsualizacion">
            </div>
            <button type="button" class="btn btn-primary" id="botonGuardar" disabled="disabled">Guardar</button>
        </form>
    </div>
       
    <script type="text/javascript"> 
        $(document).ready(function() { 
            $("#but_upload").click(function() {

                var fd = new FormData(); 
                var files = $('#file')[0].files[0]; 
                fd.append('file', files); 
       
                $.ajax({ 
                    url: location.hostname+'/subastas/upload.php', 
                    type: 'post', 
                    data: fd, 
                    contentType: false, 
                    processData: false, 
                    success: function(response){ 
                        if(response != 0){ 
                           alert('file uploaded'); 
                        } 
                        else{ 
                            alert('file not uploaded'); 
                        } 
                    }, 
                }); 
            }); 
        }); 
    </script>

</body> 
</html> 