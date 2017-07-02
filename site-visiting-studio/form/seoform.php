<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'>
		<meta http-equiv="refresh" content="1; url=http://rabbitweb.ru">
		<title>Отправка формы запроса</title>
	</head>
	<body>
		<?php
			$name = $_GET['fio'];$phone = $_GET['number'];$services_1 = $_GET['order1'];$services_2 = $_GET['order2'];$services_3 = $_GET['order3'];$services_4 = $_GET['order4'];$services_5 = $_GET['order5'];$services_6 = $_GET['order6'];$services_7 = $_GET['order7'];$services_8 = $_GET['order8'];$services_9 = $_GET['order9'];$services_10 = $_GET['order10'];$services_11 = $_GET['order11'];$services_12 = $_GET['order12'];$services_13 = $_GET['order13'];$services_14 = $_GET['order14'];$services_15 = $_GET['order15'];$services_16 = $_GET['order16'];$services_17 = $_GET['order17'];$services_18 = $_GET['order18'];$services_19 = $_GET['order19'];

			$to = 'office@rabbitweb.ru';
			$subject = 'Сообщение с сайта';
			$msg = "Ф.И.О.: $name\n".
				"Телефон: $phone\n".
				"Регитрация в 3000 разных каталогах (4000руб.): $services_1\n".
				"Регистрация в каталогах (2000руб.): $services_2\n".
				"Контекстная реклама на Яндекс и Google (3500руб.): $services_3\n".
				"Продвижение групп в социальных сетях (5500руб.): $services_4\n".
				"Пакет 'Индивидуальный' (Договорная): $services_5\n".
				"Пакет 'Максимальный' (28990руб.): $services_6\n".
				"Пакет 'Оптимум' (14990руб.): $services_7\n".
				"Пакет 'Минимум' (4990руб.): $services_8\n".
				"Продвижение по кликам (Договорная): $services_9\n".
				"Продвижение по Лидам (550руб.): $services_10\n".
				"Первичная оптимизация для поисковиков (800руб.): $services_11\n".
				"Создание сателлитов сайта (15990руб.): $services_12\n".
				"Указание расположения офиса компании в Яндекс.Карты (250руб.): $services_13\n".
				"Сайт-визитка и промо-сайт (4 000 руб.): $services_14\n".
				"Сайт-галерея (4 500 руб.): $services_15\n".
				"Официальный сайт (5 000 руб.): $services_16\n".
				"Тематический сайт и сайт-каталог (6 000 руб.): $services_17\n".
				"Интернет-магазин, новостной и корпоративный сайт (7 000 руб.): $services_18\n".
				"Сайт-портал (Договорная (не менее 8000 руб.): $services_19";
			mail($to, $subject, $msg, 'From: ' . $email);
		?>
	</body>
</html>