<?php
		require 'config.php';
        $isAvailable = true;
        $_pass = sha1($_POST['password']);
		$row = mysqli_query($conn,"SELECT username,password FROM user WHERE username='{$_POST['username']}' AND password='{$_pass}'")or die('错误！');
		if (mysqli_fetch_array($row, MYSQLI_ASSOC)) {
		  //如果不为空说明用户名存在
		  $isAvailable = true;
		
	    } else {
		  $isAvailable = false;
		
	    }
	    //返回isAvailable的值 
	   echo json_encode(array(
       'valid' => $isAvailable,
       ));

		mysqli_close($conn);
?>	