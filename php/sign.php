<?php
	sleep(3);
	require 'config.php';
	$query = "INSERT INTO user (username, password, email, sex,date) 
	 		VALUES ('{$_POST['username']}', sha1('{$_POST['password']}'), '{$_POST['email']}', '{$_POST['sex']}', NOW())";
	
	mysqli_query($conn,$query) or die('新增失败！'.mysqli_error());
	
	echo mysqli_affected_rows($conn);//返回影响的行数
	
	mysqli_close($conn);
?>