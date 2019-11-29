<?php 
  
/* Getting file name */
$filename = $_FILES['imagen']['name']; 
  
/* Location */
$location = "img/productos/".$filename; 
$uploadOk = 1; 
  
if($uploadOk == 0){ 
   echo 0; 
}else{ 
   /* Upload file */
   if(move_uploaded_file($_FILES['imagen']['tmp_name'], $location)){ 
      echo $location; 
   }else{ 
      echo 0; 
   } 
} 
?> 