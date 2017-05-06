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
	
		$to = 'baki68rus@gmail.com';
		$subject = 'Сообщение о похищении НЛО';
		$msg = "$name был похищен $when_it_happened и отсутствовали в течение $how_long\n".
		"Сколько их было? ' . $how_many\n".
		"Опишите их: $alien_description\n".
		"Дополнительная информация $other";
		mail($to, $subject, $msg, 'From:' . $email);

		echo 'Спасибо за заполнение формы.<br/>';
		echo 'Контактное лицо: ' .$name . '<br/>';
		echo 'Сколько их было? ' . $how_many . '<br/>';
		echo 'Вы были похищены' . $when_it_happened;
		echo ' и отсутствовали в течение ' . $how_long . '<br/>';
		echo 'Опишите их: ' . $alien_description . '<br/>';
		echo 'Что они делали? ' . $what_they_did;
		echo 'Видели ли вы мою собаку Фенга? ' . $fang_spotted . '<br/>';
		echo 'Ваш адрес электронной почты: ' . $email . 'br/';
		echo 'Дополнительная информация ' . $other;
	?>
</body>
</html>