<?php

$conn = @mysqli_connect("localhost","root","13610428466","biye") or die('数据库链接失败：'.mysqli_connect_error());
mysqli_select_db($conn,"biye") or die('数据库错误：'.mysqli_connect_error());
mysqli_query($conn,"set names 'UTF8'");


?>