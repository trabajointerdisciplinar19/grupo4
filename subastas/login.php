<?php include("elements/head.php");?>
 <script src="js/login.js"></script>
 <script>

</script>

<body>
    <?php include("elements/menu.php");?>
<br><br>

<div class="container">


     <main role="main" class="container my-auto">
            <div class="row">
                <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 class="text-center">Bienvenido de nuevo</h2>
                    <img class="img-fluid mx-auto d-block rounded"
                        src="img/logo_subastas.png" />

                    <div>
                        <div class="form-group">
                            <label for="correo">Correo</label>
                                <input placeholder="Email" type="text" name="email" id="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="palabraSecreta">Contraseña</label>
                            <input  placeholder="Password" type="password" name="password" id="password" class='form-control'>
                        </div>
                         <button type="button" class="btn btn-success" id="botonLogin">Login</button>
                      
                        <br>
                        <span id='create_account'>
                        <a href="registro.html">Crea tu cuenta ➡ </a>
                    </span>
                       <!-- <a href="#">Contraseña olvidada</a>-->
                    </div>
                </div>
            </div>
        </main>


    
</div>
<br><br><br><br><br><br><br><br><br><br>
 <!-- /.container -->

 <?php include("elements/footer.php");?>

</body>
</html>