<?php
		require 'config.php';
        $isAvailable = true;
		$row = mysqli_query($conn,"SELECT username FROM user WHERE username='{$_POST['username']}'")or die('错误！');
		if (mysqli_fetch_array($row, MYSQLI_ASSOC)) {
		  //如果不为空说明用户名存在
		  $isAvailable = false;
	    } else {
		  $isAvailable = true;
	    }
	    //返回isAvailable的值 
	   echo json_encode(array(
       'valid' => $isAvailable,
       ));

		mysqli_close($conn);
?>	