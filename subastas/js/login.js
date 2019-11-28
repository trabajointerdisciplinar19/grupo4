function exito()
{
    $("#spinner").html("");
    location.assign('index.php');
}

$(function()
{
    $("#botonLogin").click(function()
    {
        $("#spinner").html("<img src='img/spinner.gif' style='width:25px; height:25px;'/>");
        var email=$("#email").val();
        var password=$("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password).then(exito).catch(function(error)
        {
            $("#spinner").html("");
            //console.log(error);
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