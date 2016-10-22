<?php
	include('connection.php');
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$intName = $_POST['intName'];
		$intDate = $_POST['intDate'];
		
		if(!empty($intname) && !empty($intdate)) {
			mysqli_query($dbc, "INSERT INTO jsBasicsHobby (hobbyName, startDate)
				VALUES('$intname', '$intdate')");
		}
	}
	?>