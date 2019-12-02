<?php include("elements/head.php");?>
 <script src="js/administracion.js"></script>
 <script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> 
    </script> 

<body>
    <?php include("elements/menu.php");?>
<br><br>

<title> 
        Async file upload with jQuery 
</title> 
    
<body> 
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
            <div align="center"> 
        <form method="post" action="" enctype="multipart/form-data"
                id="myform"> 
   
            <div > 
                <input type="file" id="file" name="file" /> 
                <input type="button" class="button" value="Upload"
                        id="but_upload"> 
            </div> 
        </form> 
    </div>  
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

<br><br>
<!--<br><br><br><br><br><br><br><br> --->
 <!-- /.container -->

 <?php include("elements/footer.php");?>

</body>
</html>

