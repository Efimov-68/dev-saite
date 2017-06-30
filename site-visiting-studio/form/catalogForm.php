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
			$name = $_GET['fio'];$phone = $_GET['number'];$services_1 = $_GET['order1'];$services_2_1 = $_GET['order2_1'];$services_2_2 = $_GET['order2_2'];$services_3 = $_GET['order3'];$services_4 = $_GET['order4'];$services_5 = $_GET['order5'];$services_6 = $_GET['order6'];$services_7 = $_GET['order7'];$services_8 = $_GET['order8'];$services_9 = $_GET['order9'];$services_10 = $_GET['order10'];$services_11 = $_GET['order11'];$services_12 = $_GET['order12'];$services_13 = $_GET['order13'];$services_14 = $_GET['order14'];$services_15 = $_GET['order15'];$services_16 = $_GET['order16'];$services_17 = $_GET['order17'];$services_18 = $_GET['order18'];$services_19 = $_GET['order19'];$services_20 = $_GET['order20'];$services_21 = $_GET['order21'];$services_22 = $_GET['order22'];$services_23 = $_GET['order23'];$services_24 = $_GET['order24'];$services_25 = $_GET['order25'];$services_26 = $_GET['order26'];$services_27 = $_GET['order27'];$services_28 = $_GET['order28'];$services_29 = $_GET['order29'];$services_30 = $_GET['order30'];$services_31 = $_GET['order31'];$services_32 = $_GET['order32'];$services_33 = $_GET['order33'];$services_34 = $_GET['order34'];$services_35 = $_GET['order35'];$services_36 = $_GET['order36'];$services_37 = $_GET['order37'];$services_38 = $_GET['order38'];$services_39 = $_GET['order39'];$services_40 = $_GET['order40'];$services_41 = $_GET['order41'];$services_42 = $_GET['order42'];

			$to = 'office@rabbitweb.ru';
			$subject = 'Сообщение с сайта';
			$msg = "Ф.И.О.: $name\n".
				"Телефон: $phone\n".
				"Срок создания сайта - 1 - 3 дня: $services_1\n".
				"Дизайн сайта:\n".
				"Типовой - $services_2_1\n".
				"Индивидуальный - $services_2_2\n".
				"Регистрация домена (1 год): $services_3\n".
				"Помощь в выборе хостинг-провайдера: $services_4\n".
				"Наполнение сайта контентом клиента: $services_5\n".
				"Создание меню сайта: $services_6\n".
				"CMS система управления сайтом: $services_7\n".
				"Виджеты социальных сетей: $services_8\n".
				"Кроссбраузерность в: Mozilla Firefox, Safari, Google Chrome, Opera, IE: $services_9\n".
				"Копирайтинг: $services_10\n".
				"Модуль 'Новости': $services_11\n".
				"Модули 'Форма обратной связи': $services_12\n".
				"Слайдшоу: $services_13\n".
				"Счетчик посещаемости сайта: $services_14\n".
				"Регистрация в поисковых системах: $services_15\n".
				"Выпадающее многоуровневое меню (1 200 руб.): $services_16\n".
				"Модуль 'Статей' (1 200 руб.): $services_17\n".
				"Динамическое слайдшоу с эффектами анимации (4 500 руб.): $services_18\n".
				"Модуль 'Опрос' (1 200 руб.): $services_19\n".
				"Настройка e-mail рассылки (2 900 руб.): $services_20\n".
				"Поиск по сайту (3 500 руб.): $services_21\n".
				"Личный кабинте и закрытые разделы (4 500 руб.): $services_22\n".
				"Интеграция с социальными сетьми (1 500 руб.): $services_23\n".
				"Наполнение основного раздела сайта информацией клиента (2500 руб.): $services_24\n".
				"Форма обратной связи (900 руб.): $services_25\n".
				"Модуль 'Фотогалерея' (3 500 руб.): $services_26\n".
				"Настройка рекламной кампании (5 000 руб.): $services_27\n".
				"Регистрация сайта в поисковых системах (1 800 руб.): $services_28\n".
				"Модуль 'Каталог' (12 500 руб.): $services_29\n".
				"Установка на сайт виджет 'Онлайн чат' (2 200 руб.): $services_30\n".
				"Модуль 'YouTube' (3 500 руб.): $services_31\n".
				"Интеграция с Яндекс.Маркет (5 500 руб.): $services_32\n".
				"Отрисовка дополнительного макета дизайна (3 000 руб.): $services_33\n".
				"Верстка дополнительного макета дизайна (2 500 руб.): $services_34\n".
				"Адаптивная верстка (8 000 руб.): $services_35\n".
				"Настройка фильтра поиска по каталогу (1 900 руб.): $services_36\n".
				"Настройка скриптов и анимации (4 000 руб.): $services_37\n".
				"Консультационная поддержка (1 500 руб.): $services_38\n".
				"Выгрузка на 1С (12 000 руб.): $services_39\n".
				"Поиск Автонабором по сайту (8 500 руб.): $services_40\n".
				"Установка системы автооплаты (4 500 руб.): $services_41\n".
				"Мобильная версия (20 000 руб.): $services_42";

			mail($to, $subject, $msg, 'From: ' . $email);
	
			echo "<div> <h1>Спасибо за заказ 'Сайт каталог'.</h1>";
			echo "<p>Контактное лицо: ".$name."</p>";
			echo "<p>Номер телефона: ".$phone."</p>";
			echo "<p>Срок создания сайта - 1 - 3 дня: ".$services_1."</p>".
			echo "<p>Дизайн сайта:</p>".
			echo "<p>Типовой - ".$services_2_1."</p>".
			echo "<p>Индивидуальный - ".$services_2_2."</p>".
			echo "<p>Регистрация домена (1 год): ".$services_3."</p>".
			echo "<p>Помощь в выборе хостинг-провайдера: ".$services_4."</p>".
			echo "<p>Наполнение сайта контентом клиента: ".$services_5."</p>".
			echo "<p>Создание меню сайта: ".$services_6."</p>".
			echo "<p>CMS система управления сайтом: ".$services_7."</p>".
			echo "<p>Виджеты социальных сетей: ".$services_8."</p>".
			echo "<p>Кроссбраузерность в: Mozilla Firefox, Safari, Google Chrome, Opera, IE: ".$services_9."</p>".
			echo "<p>Копирайтинг: ".$services_10."</p>".
			echo "<p>Модуль 'Новости': ".$services_11."</p>".
			echo "<p>Модули 'Форма обратной связи': ".$services_12."</p>".
			echo "<p>Слайдшоу: ".$services_13."</p>".
			echo "<p>Счетчик посещаемости сайта: ".$services_14."</p>".
			echo "<p>Регистрация в поисковых системах: ".$services_15."</p>".
			echo "<p>Выпадающее многоуровневое меню (1 200 руб.): ".$services_16."</p>".
			echo "<p>Модуль 'Статей' (1 200 руб.): ".$services_17."</p>".
			echo "<p>Динамическое слайдшоу с эффектами анимации (4 500 руб.): ".$services_18."</p>".
			echo "<p>Модуль 'Опрос' (1 200 руб.): ".$services_19."</p>".
			echo "<p>Настройка e-mail рассылки (2 900 руб.): ".$services_20."</p>".
			echo "<p>Поиск по сайту (3 500 руб.): ".$services_21."</p>".
			echo "<p>Личный кабинте и закрытые разделы (4 500 руб.): ".$services_22."</p>".
			echo "<p>Интеграция с социальными сетьми (1 500 руб.): ".$services_23."</p>".
			echo "<p>Наполнение основного раздела сайта информацией клиента (2500 руб.): ".$services_24."</p>".
			echo "<p>Форма обратной связи (900 руб.): ".$services_25."</p>".
			echo "<p>Модуль 'Фотогалерея' (3 500 руб.): ".$services_26."</p>".
			echo "<p>Настройка рекламной кампании (5 000 руб.): ".$services_27."</p>".
			echo "<p>Регистрация сайта в поисковых системах (1 800 руб.): ".$services_28."</p>".
			echo "<p>Модуль 'Каталог' (12 500 руб.): ".$services_29."</p>".
			echo "<p>Установка на сайт виджет 'Онлайн чат' (2 200 руб.): ".$services_30."</p>".
			echo "<p>Модуль 'YouTube' (3 500 руб.): ".$services_31."</p>".
			echo "<p>Интеграция с Яндекс.Маркет (5 500 руб.): ".$services_32."</p>".
			echo "<p>Отрисовка дополнительного макета дизайна (3 000 руб.): ".$services_33."</p>".
			echo "<p>Верстка дополнительного макета дизайна (2 500 руб.): ".$services_34."</p>".
			echo "<p>Адаптивная верстка (8 000 руб.): ".$services_35."</p>".
			echo "<p>Настройка фильтра поиска по каталогу (1 900 руб.): ".$services_36."</p>".
			echo "<p>Настройка скриптов и анимации (4 000 руб.): ".$services_37."</p>".
			echo "<p>Консультационная поддержка (1 500 руб.): ".$services_38."</p>".
			echo "<p>Выгрузка на 1С (12 000 руб.): ".$services_39."</p>".
			echo "<p>Поиск Автонабором по сайту (8 500 руб.): ".$services_40."</p>".
			echo "<p>Установка системы автооплаты (4 500 руб.): ".$services_41."</p>".
			echo "<p>Мобильная версия (20 000 руб.): ".$services_42."</p></div>";
		?>
	</body>
</html>