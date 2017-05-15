<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'>
	<meta http-equiv="refresh" content="10; url=file:///home/romka68rus/dev-saite/site-visiting-studio/index.html">
	<title>Отправка формы запроса</title>
</head>
<body>
	<h1>Обратная связь</h1>
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

		echo 'Спасибо за заполнение формы. <br/>';
		echo 'Контактное лицо: '.$name.'<br/>';
		echo 'Номер телефона: '.$phone.'<br/>';
		echo 'Электронная почта: '.$email.'<br/>';
		echo 'Город: '.$city.'<br/>';
		echo 'Создать сайт: ' . $services_1 . '<br/>';
		echo '(Re:)Дизайн: ' . $services_2 . '<br/>';
		echo 'Продвижение: ' . $services_3 . '<br/>';
		echo 'Доп. услуги: ' . $services_4;
	?>
</body>
</html>