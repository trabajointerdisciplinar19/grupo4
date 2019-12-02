<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style1.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase.js"></script>
    <script src="js/registro.js"></script>

    <title>Registro de Usuarios</title>
</head>
<body>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="index.html" title="Inicio">Inicio</a></li>
                <li class="active"><a href="administracion.html" title="">Administracion</a></li>
                <li><a href="nuevoproducto.html" title="">Añadir Productos</a></li>
            </ul>
        </div>
    </nav>
    
    <div class="container-fluid">
        <h2>Registro de Usuarios</h2>
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
</body>
</html>