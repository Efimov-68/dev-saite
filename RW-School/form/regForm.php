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
		$first_name = $_GET['first_name'];
		$phone = $_GET['phone'];
		$city = $_GET['city'];
		$services_1 = $_GET['courses'];
		$services_2 = $_GET['courses'];
		$services_3 = $_GET['courses'];
		$services_4 = $_GET['personal'];

		$to = 'office@rabbitweb-school.ru';
		$subject = 'Сообщение с сайта';
		$msg = "Имя: $last_name\n".
			"Фамилия: $first_name\n".
			"Телефон: $phone\n".
			"Город: $city\n".
			"Scratch: $services_1\n".
			"Python: $services_2\n".
			"JavaScript: $services_3\n".
			"Обр. персональных данных: $services_4\n";
		mail($to, $subject, $msg, 'From: ' . $email);
	?>
</body>
</html>