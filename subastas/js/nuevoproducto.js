$(document).ready(function()
 {


    //var database = firebase.database();
    //var referencia=database.ref("productos");
    //var productos={};


    var database = firebase.database();

    var articulo;
    var descripcion;
    var precio;
    var imagen;
    var fecha_fin; 

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


    $("#botonGuardar").click(function()    {
        articulo=$("#articulo").val();
        descripcion=$("#descripcion").val();
        precio=$("#precio").val();
        fecha_fin=$("#fecha_fin").val();
        nomnbre_imagen=$("#imagen").val().substr(12);

       /*   if (!imagen)  {
            imagen="NONE";
        }*/

       /* var fd = new FormData(); 
        var files = $('#imagen')[0].files[0]; 
        fd.append('file', files); 
        var ruta_imagen= location.hostname
        //alert(ruta_imagen);  
        //+'/subastas/upload.php';
        $.ajax({ 
            url: 'upload.php', 
            type: 'post', 
            data: fd, 
            contentType: false, 
            processData: false, 
            success: function(response){ 
                if(response != 0){ 
                  // alert('file uploaded'); 
                } 
                else{ 
                  //  alert('file not uploaded'); 
                } 
            }, 
        }); */

        var referencia=database.ref("productos");

        referencia.push(
        {
            articulo: articulo,
            descripcion: descripcion,
            precio: precio,
            imagen: nomnbre_imagen,
            fecha_fin: fecha_fin
        },function()
        {
            alert('El alta se ha realizado correctamente');
        });
    });

});