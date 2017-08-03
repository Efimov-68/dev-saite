<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'>
		<meta http-equiv="refresh" content="1; url=http://rabbitweb-school.ru">
		<title>Отправка формы запроса</title>
	</head>
	<body>
		<?php
			$last_name = $_GET['last_name'];
			$phone = $_GET['phone'];
	
			$to = 'office@rabbitweb-school.ru';
			$subject = 'Обратная связь';
			$msg = "Имя: $last_name\n".
				"Телефон: $phone\n";
			mail($to, $subject, $msg, 'From: ' . $email);
		?>
	</body>
</html>