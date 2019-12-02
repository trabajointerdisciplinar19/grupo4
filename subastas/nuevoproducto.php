<?php include("elements/head.php");?>
 <script src="js/nuevoproducto.js"></script>

<body>
    <?php include("elements/header.php");?>
    <?php include("elements/menu.php");?>
<br><br>


    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="index.html" title="Inicio">Inicio</a></li>
                <li><a href="administracion.html" title="">Administracion</a></li>
                <li class="active"><a href="nuevoproducto.html" title="">Añadir Productos</a></li>
            </ul>
        </div>
    </nav>

    <div class="container-fluid">
        <form id="formularioAlta" enctype="multipart/form-data" action=""  id="myform">
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
                <label for="precio">Fecha Fin</label>
                <input type="text" class="form-control" id="fecha_fin" placeholder="Finnnnnn">
            </div>
            <div class="form-group">
                <label for="imagen">Elegir Imagen</laebl>
               <!-- <input type="file" id="imagen">-->

                <div > 
                <input type="file" id="imagen" name="imagen" /> 
                    <input type="button" class="button" value="Upload"
                    id="but_upload"> 
                </div> 
                <p class="help-block">Elija una imagen para este artículo</p>
                <img id="previsualizacion">
            </div>
            <button type="button" class="btn btn-primary" id="botonGuardar" disabled="disabled">Guardar</button>
        </form>

           <script type="text/javascript"> 
        $(document).ready(function() { 
            $("#botonGuardar").click(function() { 

            // alert(location.hostname); 
            // alert($("#imagen").val().substr(12));
             // alert(aa.substr(14)); 

               var fd = new FormData(); 
                var files = $('#imagen')[0].files[0]; 
                fd.append('imagen', files); 
       
                $.ajax({ 
                    url: 'upload.php', 
                    type: 'post', 
                    data: fd, 
                    contentType: false, 
                    processData: false, 
                    success: function(response){ 
                        if(response != 0){ 
                          // alert('imagen uploaded'); 
                        } 
                        else{ 
                           // alert('imagen not uploaded'); 
                        } 
                    }, 
                }); 
            }); 
        }); 
    </script> 
    </div>
</body>
</html>
