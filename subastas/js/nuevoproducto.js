$(document).ready(function()
 {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var articulo;
    var descripcion;
    var precio;
    var categoria;
    var fecha;
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
        categoria=$("#categoria").val();
        fecha=$("#fecha").val();

        if (articulo && descripcion && precio && categoria && fecha)
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
        categoria=$("#categoria").val();
        fecha=$("#fecha").val();

        if (!imagen)
        {
            imagen="NONE";
        }

        //var referencia_=database.ref("productos");
        var referencia =database.ref("productos"+categoria)
        console.log(categoria);
        
        referencia.push(
        {
            articulo: articulo,
            descripcion: descripcion,
            precio: precio,
            categoria: categoria,
            fecha: fecha,
            imagen: imagen
        },function()
        {
            alert('El alta se ha realizado correctamente');
        });
    });

});