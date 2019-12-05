
// Initialize Firebase}
console.log("antes");
firebase.initializeApp(firebaseConfig);
console.log("despuea");

var email, password;
function exito()
{
    console.log("squi");
    location.assign('index.php');
}

$(function()
{
    $("#botonLogin").click(function()
    {
        email=$("#email").val();
        password=$("#password").val();
        console.log(email,password);

        firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(function(error)
        {
            console.log(error);
            alert ("Error detectado:\n\n"+error.message);
        });
    });

    $("#botonRegistro").click(function()
    {
        location.assign('registro.php');
    });


    $("#botonCancelar").click(function()
    {
        location.assign('index.php');
    });

});