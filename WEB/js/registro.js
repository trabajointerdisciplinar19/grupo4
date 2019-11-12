// Inicializar la base de datos
var firebaseConfig = {
    apiKey: "AIzaSyA-u996k8fkyja32jv0kbrb-3-XvtH6yz8",
    authDomain: "subastatimereal.firebaseapp.com",
    databaseURL: "https://subastatimereal.firebaseio.com",
    projectId: "subastatimereal",
    storageBucket: "subastatimereal.appspot.com",
    messagingSenderId: "470011455740",
    //appId: "1:470011455740:web:3d4466ce3f50c43a508f79",
    //measurementId: "G-1TK0PZJ07Y"
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
        password=$("#password").val();
        passwordConfirm=$("#password2").val();

        if (password != passwordConfirm)
        {
            alert("Error: Las contraseñas son distintas!");
        }
        else
            firebase.auth().createUserWithEmailAndPassword(email,password).then(exito).catch(alFinalizar);
    });


    $("#botonCancelar").click(function()
    {
        location.assign('index.html');
    });

});
