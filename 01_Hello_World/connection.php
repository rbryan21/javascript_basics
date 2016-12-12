<?php
	$hostname = "localhost";
	$username = "root";
	$password = "admin";
	$dbname = "mytestdatabase";

	$dbc = mysqli_connect($hostname, $username, $password, $dbname) OR die ("could not connect to database, ERROR:" .mysqli_connect_error());

?>