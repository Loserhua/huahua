<?php
$connect = mysqli_connect('localhost','root','13610428466','biye') or die('Unale to connect');
$sql = "select * from user";
$result = mysqli_query($connect,$sql);
while($row = mysqli_fetch_row($result)){
	echo $row[0];
	echo $row[1];
	echo $row[2];
	echo $row[3];
}
?>