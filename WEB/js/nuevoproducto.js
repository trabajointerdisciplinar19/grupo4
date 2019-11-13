$(document).ready(function()
 {
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

    var database = firebase.database();

    var articulo;
    var descripcion;
    var precio;
    var imagen;

    $("#imagen").change(function()
    {
        var descriptor=new FileReader();
        descriptor.readAsDataURL(this.files[0]);

        descriptor.onloadend = function()
        {
            imagen=descriptor.result;
            $("#previsualizacion").attr("src",imagen);
        };
    });


    $("#formularioAlta").change(function()
    {
        articulo=$("#articulo").val();
        descripcion=$("#descripcion").val();
        precio=$("#precio").val();

        if (articulo && descripcion && precio)
        {
            $("#botonGuardar").prop("disabled",false);
        }
        else
        {
            $("#botonGuardar").prop("disabled",true);
        }

    });


    $("#botonGuardar").click(function()
    {
        articulo=$("#articulo").val();
        descripcion=$("#descripcion").val();
        precio=$("#precio").val();

        if (!imagen)
        {
            imagen="NONE";
        }

        var referencia=database.ref("productos");

        referencia.push(
        {
            articulo: articulo,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        },function()
        {
            alert('El alta se ha realizado correctamente');
        });
    });

});