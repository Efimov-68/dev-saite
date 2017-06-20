<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'>
	<meta http-equiv="refresh" content="5; url=http://rabbitweb.ru">
	<link rel="stylesheet" type="text/css" href="../css/1300x2539_stylePage.css" media="screen and (min-device-width: 240px)">
	<title>Отправка формы запроса</title>
</head>
<body>
	<?php
		$name = $_GET['fio'];
		$phone = $_GET['number'];
		$email = $_GET['email'];
		$city = $_GET['city'];
		$services_1 = $_GET['order1'];
		$services_2 = $_GET['order2'];
		$services_3 = $_GET['order3'];
		$services_4 = $_GET['order4'];

		$to = 'office@rabbitweb.ru';
		$subject = 'Сообщение с сайта';
		$msg = "Ф.И.О.: $name\n".
			"Телефон: $phone\n".
			"E-mail: $email\n".
			"Город: $city\n".
			"Создать сайт: $services_1\n".
			"(Re:)Дизайн: $services_2\n".
			"Продвижение: $services_3\n".
			"Доп. услуги: $services_4";
		mail($to, $subject, $msg, 'From: ' . $email);

		echo '<div id="seo-basic"> <h1>Спасибо за заполнение формы.</h1>';
		echo '<p>Контактное лицо: '.$name.'</p>';
		echo '<p>Номер телефона: '.$phone.'</p>';
		echo '<p>Электронная почта: '.$email.'</p>';
		echo '<p>Город: '.$city.'</p>';
		echo '<p>Создать сайт: ' . $services_1 . '</p>';
		echo '<p>(Re:)Дизайн: ' . $services_2 . '</p>';
		echo '<p>Продвижение: ' . $services_3 . '</p>';
		echo '<p>Доп. услуги: ' . $services_4 . '</p> </div>';
	?>
</body>
</html>