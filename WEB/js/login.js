
//inicial

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


function exito()
{
    $("#spinner").html("");
    location.assign('index.html');
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
        location.assign('registro.html');
    });


    $("#botonCancelar").click(function()
    {
        location.assign('index.html');
    });

});
