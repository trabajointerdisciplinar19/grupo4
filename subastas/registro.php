<?php include("elements/head.php");?>
<script src="js/registro.js"></script>
<script>

</script>


<body>
    <?php include("elements/menu.php");?>

<div class="container">

    <div class="container-fluid">
        <FONT style="margin-left: 40px; align:center; " COLOR="black" SIZE="5"><I><B>-Registro de usuario</B></I></FONT>
        <form id="formularioRegistro">
            <div class="form-group">
                <label for="email">Dirección E-mail: </label>
                <input type="text" class="form-control" id="email" placeholder="Introduzca su e-mail">
            </div>

            <div class="form-group">
                <label for="usuario">Usuario: </label>
                <input type="text" class="form-control" id="usuario" placeholder="Introduzca su Usuario">
            </div>

            <div class="form-group">
                <label for="imagen">Elegir Imagen</laebl>
               <!-- <input type="file" id="imagen">-->

                <!--<div > 
                <input type="file" id="imagen" name="imagen" /> 
                    <input type="button" class="button" value="Upload"
                    id="but_upload"> 
                </div>--> 
                <p class="help-block">Elija una imagen para su foton de perfil</p>
                <img id="previsualizacion">
            </div>

            <div class="form-group">
                <label for="password">Contraseña: </label>
                <input type="password" class="form-control" id="password" placeholder="Introduzca contraseña">
            </div>

            <div class="form-group">
                <label for="password2">Confirmar Contraseña: </label>
                <input type="password" class="form-control" id="password2" placeholder="Confirme contraseña">
            </div>

            <button type="button" class="btn btn-primary" id="botonRegistro">Registrar</button>
            <button type="button" class="btn btn-warning" id="botonCancelar">Cancelar</button>

        </form>
    </div>
    
</div>
<br><br>
<!--<br><br><br><br><br><br><br><br> --->
 <!-- /.container -->

<?php include("elements/footer.php");?>

</body>
</html>
