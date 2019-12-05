firebase.initializeApp(firebaseConfig);

var email,password,passwordConfirm;

function exito()
{
  alert('Se ha creado la cuenta de usuario correctamente. ');
  location.assign('index.php');
}

function alFinalizar(error)
{
    // console.log(error);

    if (error!=='undefined')
    {
        // Códigos de error:
        // auth/invalid-email
        // auth/weak-password
        // auth/email-already-in-use
        switch(error.code)
        {
            case 'auth/email-already-in-use':
            alert('ERROR: No se puede crear la nueva cuenta de usuario, por que el e-mail ya está en uso !');
            break;
            case 'auth/invalid-email':
            alert('ERROR: El e-mail facilitado no es un e-mail correcto.');
            break;
            default:
            alert('Se ha producido un error al crear el usuario.\n\n'+error+'\n');
            break;
        }
    }
}


$(function()
{
    // Programamos el click de los botones del formulario:
    $("#botonRegistro").click(function()
    {
        email=$("#email").val();
        usuario=$("#usuario").val(); //
        password=$("#password").val();
        passwordConfirm=$("#password2").val();

        if (password != passwordConfirm)
        {
            alert("Error: Las contraseñas son distintas!");
        }
        else
            //usersRef.child("usuario").setValueAsync(new User("June 23, 1912", "Alan Turing"));
            firebase.auth().createUserWithEmailAndPassword(email,password).then(exito).catch(alFinalizar);
            
            firebase.database().ref("users").push({
                username: usuario,
                email: email,
                password : password
              });

            //var database = firebase.database();
/*
            var referencia=firebase.database.ref("user");
            referencia.push(
            {
                email: email,
                usuario: usuario,
                password: password
                //imagen: imagen
            },function()
            {
                alert('Se ha regritrado correctamente');
            });*/
    });

    $("#botonCancelar").click(function()
    {
        location.assign('index.php');
    });

});