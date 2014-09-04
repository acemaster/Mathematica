<?php
$name = $_POST['name'];
$tzid = $_POST['tzid']; 
$nocorrect=$_POST['correct'];
$time=$_POST['time'];
$conn = mysqli_connect('localhost', 'username', 'password', 'dbname');
$name = mysqli_real_escape_string($conn, $name);
$tzid = mysqli_real_escape_string($conn, $tzid);
$nocorrect=mysqli_real_escape_string($conn, $nocorrect);
$time=mysqli_real_escape_string($conn, $time);
$query = "INSERT INTO round1( name, tzid, nocorrect, time ) VALUES 
		( '$name', '$tzid', '$nocorrect', '$time' )";


mysqli_query($conn, $query);
 
mysqli_close($conn);
for($x=0;$x<=10000000;$x++); 
header('Location: index.html');
?>