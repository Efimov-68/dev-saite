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
			$name = $_GET['fio'];$phone = $_GET['number'];$services_1 = $_GET['order1'];$services_2_1 = $_GET['order2_1'];$services_2_2 = $_GET['order2_2'];$services_3 = $_GET['order3'];$services_4 = $_GET['order4'];$services_5 = $_GET['order5'];$services_6 = $_GET['order6'];$services_7 = $_GET['order7'];$services_8 = $_GET['order8'];$services_9 = $_GET['order9'];$services_10 = $_GET['order10'];$services_11 = $_GET['order11'];$services_12 = $_GET['order12'];$services_13 = $_GET['order13'];$services_14 = $_GET['order14'];$services_15 = $_GET['order15'];$services_16 = $_GET['order16'];$services_17 = $_GET['order17'];$services_18 = $_GET['order18'];$services_19 = $_GET['order19'];$services_20 = $_GET['order20'];$services_21 = $_GET['order21'];$services_22 = $_GET['order22'];$services_23 = $_GET['order23'];$services_24 = $_GET['order24'];$services_25 = $_GET['order25'];$services_26 = $_GET['order26'];$services_27 = $_GET['order27'];$services_28 = $_GET['order28'];$services_29 = $_GET['order29'];$services_30 = $_GET['order30'];$services_31 = $_GET['order31'];$services_32 = $_GET['order32'];$services_33 = $_GET['order33'];$services_34 = $_GET['order34'];$services_35 = $_GET['order35'];$services_36 = $_GET['order36'];$services_37 = $_GET['order37'];$services_38 = $_GET['order38'];$services_39 = $_GET['order39'];$services_40 = $_GET['order40'];$services_41 = $_GET['order41'];$services_42 = $_GET['order42'];$services_43 = $_GET['order43'];$services_44 = $_GET['order44'];$services_45 = $_GET['order45'];

			$to = 'office@rabbitweb.ru';
			$subject = 'Сообщение с сайта';
			$msg = "Ф.И.О.: $name\n".
				"Телефон: $phone\n".
				"Срок создания сайта: 7 - 10 дней $services_1\n".
				"Дизайн сайта:\n".
				"Типовой - $services_2_1\n".
				"Индивидуальный - $services_2_2\n".
				"Регистрация домена (1 год) $services_3\n".
				"Помощь в выборе хостинг-провайдера $services_4\n".
				"Виджеты социальных сетей $services_5\n".
				"CMS система управления сайтом $services_6\n".
				"Наполнение сайта конентом клиента $services_7\n".
				"Выпадающее меню (многоуровневое) $services_8\n".
				"Модуль "Поиск по сайту" $services_9\n".
				"Установка на сайт счетчика посетителей $services_10\n".
				"Слайдшоу с эффектом анимации $services_11\n".
				"Модуль «Новости сайта» $services_12\n".
				"Форма "Обратная связь" $services_13\n".
				"Модуль "Статьи" $services_14\n".
				"Модуль «Гостевая книга» $services_15\n".
				"На выбор "Галерея" или "Каталог") $services_16\n".
				"Регистрация в поисковых системах $services_17\n".
				"Копирайтинг $services_18\n".
				"Выпадающее многоуровневое меню (1 200 руб.) $services_19\n".
				"Модуль "Статей" (1 200 руб.) $services_20\n".
				"Динамическое слайдшоу с эффектами анимации 4 500 руб.) $services_21\n".
				"Модуль "Опрос" (1 200 руб.) $services_22\n".
				"Настройка e-mail рассылки (2 900 руб.) $services_23\n".
				"Поиск по сайту (3 500 руб.) $services_24\n".
				"Личный кабинте и закрытые разделы (4 500 руб.) $services_25\n".
				"Интеграция с социальными сетьми (1 500 руб.) $services_26\n".
				"Наполнение основного раздела сайта информацией клиента (2500 руб) $services_27\n".
				"Форма обратной связи (900 руб.) $services_28\n".
				"Модуль "Фотогалерея" (3 500 руб.) $services_29\n".
				"Настройка рекламной кампании (5 000 руб.) $services_30\n".
				"Регистрация сайта в поисковых системах (1 800 руб.) $services_31\n".
				"Модуль "Каталог" (12 500 руб.) $services_32\n".
				"Установка на сайт виджет "Онлайн чат" (2 200 руб.) $services_33\n".
				"Модуль "YouTube" (3 500 руб.) $services_34\n".
				"Интеграция с Яндекс.Маркет (5 500 руб.) $services_35\n".
				"Отрисовка дополнительного макета дизайна (3 000 руб.) $services_36\n".
				"Верстка дополнительного макета дизайна (2 500 руб.) $services_37\n".
				"Адаптивная верстка (8 000 руб.) $services_38\n".
				"Настройка фильтра поиска по каталогу (1 900 руб.) $services_39\n".
				"Настройка скриптов и анимации (4 000 руб.) $services_40\n".
				"Консультационная поддержка (1 500 руб.) $services_41\n".
				"Выгрузка на 1С (12 000 руб.) $services_42\n".
				"Поиск Автонабором по сайту (8 500 руб.) $services_43\n".
				"Установка системы автооплаты (4 500 руб.) $services_44\n".
				"Мобильная версия (20 000 руб.) $services_45";

			mail($to, $subject, $msg, 'From: ' . $email);
	
			echo "<div> <h1>Спасибо за заказ 'Корпоративный сайт'.</h1>";
			echo "<p>Контактное лицо: ".$name."</p>";
			echo "<p>Номер телефона: ".$phone."</p>";
			echo "<p>Срок создания сайта: 7 - 10 дней <b>".$services_1."</b></p>";
			echo "<p>Дизайн сайта:</b></p>";
			echo "<p>Типовой - <b>".$services_2_1."</b></p>";
			echo "<p>Индивидуальный - <b>".$services_2_2."</b></p>";
			echo "<p>Регистрация домена (1 год) <b>".$services_3."</b></p>";
			echo "<p>Помощь в выборе хостинг-провайдера ".$services_4."</b></p>";
			echo "<p>Виджеты социальных сетей <b>".$services_5."</b></p>";
			echo "<p>CMS система управления сайтом <b>".$services_6."</b></p>";
			echo "<p>Наполнение сайта конентом клиента<b> ".$services_7."</b></p>";
			echo "<p>Выпадающее меню (многоуровневое) <b>".$services_8."</b></p>";
			echo "<p>Модуль 'Поиск по сайту' <b>".$services_9."</b></p>";
			echo "<p>Установка на сайт счетчика посетителей <b>".$services_10."</b></p>";
			echo "<p>Слайдшоу с эффектом анимации <b>".$services_11."</b></p>";
			echo "<p>Модуль «Новости сайта» <b>".$services_12."</b></p>";
			echo "<p>Форма 'Обратная связь' <b>".$services_13."</b></p>";
			echo "<p>Модуль 'Статьи' <b>".$services_14."</b></p>";
			echo "<p>Модуль «Гостевая книга» <b>".$services_15."</b></p>";
			echo "<p>На выбор 'Галерея' или 'Каталог' <b>".$services_16."</b></p>";
			echo "<p>Регистрация в поисковых системах <b>".$services_17."</b></p>";
			echo "<p>Копирайтинг <b>".$services_18."</b></p>";
			echo "<p>Выпадающее многоуровневое меню (1 200 руб.) <b>".$services_19."</b></p>";
			echo "<p>Модуль 'Статей' (1 200 руб.) <b>".$services_20."</b></p>";
			echo "<p>Динамическое слайдшоу с эффектами анимации 4 500 руб.) <b>".$services_21."</b></p>";
			echo "<p>Модуль 'Опрос' (1 200 руб.) <b>".$services_22."</b></p>";
			echo "<p>Настройка e-mail рассылки (2 900 руб.) <b>".$services_23."</b></p>";
			echo "<p>Поиск по сайту (3 500 руб.) <b>".$services_24."</b></p>";
			echo "<p>Личный кабинте и закрытые разделы (4 500 руб.) <b>".$services_25."</b></p>";
			echo "<p>Интеграция с социальными сетьми (1 500 руб.) <b>".$services_26."</b></p>";
			echo "<p>Наполнение основного раздела сайта информацией клиента (2500 руб)<b> ".$services_27."</b></p>";
			echo "<p>Форма обратной связи (900 руб.) <b>".$services_28."</b></p>";
			echo "<p>Модуль 'Фотогалерея' (3 500 руб.) <b>".$services_29."</b></p>";
			echo "<p>Настройка рекламной кампании (5 000 руб.) <b>".$services_30."</b></p>";
			echo "<p>Регистрация сайта в поисковых системах (1 800 руб.) <b>".$services_31."</b></p>";
			echo "<p>Модуль 'Каталог' (12 500 руб.) <b>".$services_32."</b></p>";
			echo "<p>Установка на сайт виджет 'Онлайн чат' (2 200 руб.) <b>".$services_33."</b></p>";
			echo "<p>Модуль 'YouTube' (3 500 руб.) <b>".$services_34."</b></p>";
			echo "<p>Интеграция с Яндекс.Маркет (5 500 руб.) <b>".$services_35."</b></p>";
			echo "<p>Отрисовка дополнительного макета дизайна (3 000 руб.) <b>".$services_36."</b></p>";
			echo "<p>Верстка дополнительного макета дизайна (2 500 руб.) <b>".$services_37."</b></p>";
			echo "<p>Адаптивная верстка (8 000 руб.) <b>".$services_38."</b></p>";
			echo "<p>Настройка фильтра поиска по каталогу (1 900 руб.) <b>".$services_39."</b></p>";
			echo "<p>Настройка скриптов и анимации (4 000 руб.) <b>".$services_40."</b></p>";
			echo "<p>Консультационная поддержка (1 500 руб.)<b>". $services_41."</b></p>";
			echo "<p>Выгрузка на 1С (12 000 руб.) <b>".$services_42."</b></p>";
			echo "<p>Поиск Автонабором по сайту (8 500 руб.) <b>".$services_43."</b></p>";
			echo "<p>Установка системы автооплаты (4 500 руб.) <b>"..$services_44."</b></p>".
			echo "<p>Мобильная версия (20 000 руб.) <b>".$services_45."</b></p> </div>";
		?>
	</body>
</html>