// Inicializar la base de datos
/*var firebaseConfig = {
    apiKey: "AIzaSyA-u996k8fkyja32jv0kbrb-3-XvtH6yz8",
    authDomain: "subastatimereal.firebaseapp.com",
    databaseURL: "https://subastatimereal.firebaseio.com",
    projectId: "subastatimereal",
    storageBucket: "subastatimereal.appspot.com",
    messagingSenderId: "470011455740",
    //appId: "1:470011455740:web:3d4466ce3f50c43a508f79",
    //measurementId: "G-1TK0PZJ07Y"
    };
    */
  var firebaseConfig = {
    apiKey: "AIzaSyD1scIJZRUAPxQvOUZ1rurD6z1SbJN-vVs",
    authDomain: "subastape-be7d6.firebaseapp.com",
    databaseURL: "https://subastape-be7d6.firebaseio.com",
    projectId: "subastape-be7d6",
    storageBucket: "subastape-be7d6.appspot.com",
    messagingSenderId: "1067476181394",
    appId: "1:1067476181394:web:954c255942c57ce74c614b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var email,password,passwordConfirm;

function exito()
{
  alert('Se ha creado la cuenta de usuario correctamente. ');
  location.assign('index.html');
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
            var referencia=firebase.database.ref("Usuario");
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
        location.assign('index.html');
    });

});