<!DOCTYPE html> 
<html> 
<head> 
    <title> 
        Comprar puntos
    </title> 
      
    
</head> 
  
<?php include("elements/head.php");?>
 <script src="js/puntos.js"></script>
 <script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> 
    </script> 

<body>
    <?php include("elements/menu.php");?>
<br><br>

<div class="container-fluid">
        <!--<form id="formularioAlta">-->
            <FONT COLOR="black" SIZE="5"><I><B>DEPOSITE A LA CUENTA:</B></I></FONT> 
            <br>
            <FONT COLOR="black" SIZE="5"><I><B></B></I>000 0000 000 001</FONT> 
            <br><br>
            <div class="form-group">
                <label for="imagen">Elegir Imagen</label>
                <input type="file" id="imagen">
                <p class="help-block">Ingrese foto de Voucher</p>
                <img id="previsualizacion">
            </div>
            <button type="button" class="btn btn-primary" id="botonGuardar" disabled="disabled">Guardar</button>
        <!--</form>-->
    </div>


</body> 
</html> 