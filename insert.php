<!DOCTYPE html>
<html>

<head>
	<title>Insert Press release page</title>
</head>

<body>
	<center>
		<?php

		// servername => localhost
		// username => root
		// password => empty
		// database name => staff
		$conn = mysqli_connect("localhost:3306", "vdwbqkap_wp607", "Ssm821115@", "vdwbqkap_wp607");
		
		// Check connection
		if($conn === false){
			die("ERROR: Could not connect. "
				. mysqli_connect_error());
		}
		
		// Taking all 5 values from the form data(input)
		$firstname = $_REQUEST['firstname'];
		$lastname = $_REQUEST['lastname'];
		$category = $_REQUEST['category'];
		$date = $_REQUEST['date'];
		$message = $_REQUEST['message'];
        $upload = $_REQUEST['upload'];
		
		// Performing insert query execution
		// here our table name is college
		$sql = "INSERT INTO Pressrelease VALUES ('$firstname',
			'$lastname','$category','$date','$message', '$upload')";
		
		if(mysqli_query($conn, $sql)){
			echo "<h3>data stored in a database successfully.</h3>";

			echo nl2br("\n$firstname\n $lastname\n "
				. "$category\n $date\n $message\n $upload");
		} else{
			echo "ERROR: Hush! Sorry $sql. "
				. mysqli_error($conn);
		}
		
		// Close connection
		mysqli_close($conn);
		?>
	</center>
</body>

</html>
