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
		//$email = $_GET['email'];
		//$city = $_GET['city'];
		$services_1 = $_GET['courses'];
		$services_2 = $_GET['courses'];
		$services_3 = $_GET['courses'];
		$services_4 = $_GET['personal'];
		/*$services_5 = $_GET['order5'];
		$services_6 = $_GET['order6'];
		$services_7 = $_GET['order7'];
		$services_8 = $_GET['order8'];
		$services_9 = $_GET['order9'];
		$services_10 = $_GET['order10'];*/

		$to = 'office@rabbitweb-school.ru';
		$subject = 'Сообщение с сайта';
		$msg = "Имя: $last_name\n".
			"Фамилия: $first_name\n".
			"Телефон: $phone\n".
			/*"E-mail: $email\n".
			"Город: $city\n".*/
			"Scratch: $services_1\n".
			"Python: $services_2\n".
			"JavaScript: $services_3\n".
			"Обр. персональных данных: $services_4\n";/*.
			"Сайт-визитка: $services_5\n".
			"Промо: $services_6\n".
			"Сайт каталог: $services_7\n".
			"Landing: $services_8\n".
			"Корпоративный сайт: $services_9\n".
			"Интернет-магазин: $services_10";*/
		mail($to, $subject, $msg, 'From: ' . $email);
	?>
</body>
</html>