<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'>
		<meta http-equiv="refresh" content="1; url=http://rabbitweb.ru">
		<link rel="stylesheet" type="text/css" href="../css/1300x2539_stylePage.css" media="screen and (min-device-width: 240px)">
		<title>Отправка формы запроса</title>
	</head>
	<body>
		<?php
			$name = $_GET['fio'];$phone = $_GET['number'];$services_1 = $_GET['order1'];$services_2 = $_GET['order2'];$services_3 = $_GET['order3'];$services_4 = $_GET['order4'];$services_5 = $_GET['order5'];$services_6 = $_GET['order6'];$services_7 = $_GET['order7'];$services_8 = $_GET['order8'];$services_9 = $_GET['order9'];$services_10 = $_GET['order10'];$services_11 = $_GET['order11'];$services_12 = $_GET['order12'];$services_13 = $_GET['order13'];$services_14 = $_GET['order14'];$services_15 = $_GET['order15'];$services_16 = $_GET['order16'];$services_17 = $_GET['order17'];$services_18 = $_GET['order18'];$services_19 = $_GET['order19'];$services_20 = $_GET['order20'];$services_21 = $_GET['order21'];$services_22 = $_GET['order22'];$services_23 = $_GET['order23'];$services_24 = $_GET['order24'];$services_25 = $_GET['order25'];$services_26 = $_GET['order26'];$services_27 = $_GET['order27'];$services_28 = $_GET['order28'];$services_29 = $_GET['order29'];$services_30 = $_GET['order30'];$services_31 = $_GET['order31'];$services_32 = $_GET['order32'];$services_33 = $_GET['order33'];$services_34 = $_GET['order34'];$services_35 = $_GET['order35'];$services_36 = $_GET['order36'];$services_37 = $_GET['order37'];$services_38 = $_GET['order38'];$services_39 = $_GET['order39'];$services_40 = $_GET['order40'];$services_41 = $_GET['order41'];$services_42 = $_GET['order42'];$services_43 = $_GET['order43'];$services_44 = $_GET['order44'];$services_45 = $_GET['order45'];

			$to = 'office@rabbitweb.ru';
			$subject = 'Сообщение с сайта "Landing"';
			$msg = "Ф.И.О.: $name\n".
				"Телефон: $phone\n".
				"Срок создания сайта: 10 - 15 дней $services_1\n".
				"Уникальный и запоминающийся дизайн сайта $services_2\n".
				"Регистрация домена (1 год) $services_3\n".
				"Помощь в выборе хостинг-провайдера $services_4\n".
				"Наполнение сайта контентом клиента $services_5\n".
				"CMS система управления сайтом $services_6\n".
				"Виджеты социальных сетей $services_7\n".
				"Кроссбраузерность в: Mozilla Firefox, Safari, Google Chrome, Opera, IE $services_8\n".
				"Копирайтинг $services_9\n".
				"Модули 'Форма обратной связи' $services_10\n".
				"Настройка системы Яндекс.Метрика и Google Analytics для сайта $services_11\n".
				"Настройка скриптов и анимации $services_12\n".
				"Счетчик посещаемости сайта $services_13\n".
				"Регистрация в поисковых системах $services_14\n".
				"Модуль 'Фотогалерея' + настройка анимации $services_15\n".
				"Выпадающее многоуровневое меню (1 200 руб.) $services_16\n".
				"Модуль 'Статей' (1 200 руб.) $services_17\n".
				"Динамическое слайдшоу с эффектами анимации (4 500 руб.) $services_18\n".
				"Модуль 'Опрос' (1 200 руб.) $services_19\n".
				"Настройка e-mail рассылки (2 900 руб.) $services_20\n".
				"Поиск по сайту (3 500 руб.) $services_21\n".
				"Личный кабинте и закрытые разделы (4 500 руб.) $services_22\n".
				"Интеграция с социальными сетьми (1 500 руб.) $services_23\n".
				"Наполнение основного раздела сайта информацией клиента (2500 руб.) $services_24\n".
				"Форма обратной связи (900 руб.) $services_25\n".
				"Модуль 'Фотогалерея' (3 500 руб.) $services_26\n".
				"Настройка рекламной кампании (5 000 руб.) $services_27\n".
				"Регистрация сайта в поисковых системах (1 800 руб.) $services_28\n".
				"Модуль 'Каталог' (12 500 руб.) $services_29\n".
				"Установка на сайт виджет 'Онлайн чат' (2 200 руб.) $services_30\n".
				"Модуль 'YouTube' (3 500 руб.) $services_31\n".
				"Интеграция с Яндекс.Маркет (5 500 руб.) $services_32\n".
				"Отрисовка дополнительного макета дизайна (3 000 руб.) $services_33\n".
				"Верстка дополнительного макета дизайна (2 500 руб.) $services_34\n".
				"Адаптивная верстка (8 000 руб.) $services_35\n".
				"Настройка фильтра поиска по каталогу (1 900 руб.) $services_36\n".
				"Настройка скриптов и анимации (4 000 руб.) $services_37\n".
				"Консультационная поддержка (1 500 руб.) $services_38\n".
				"Выгрузка на 1С (12 000 руб.) $services_39\n".
				"Поиск Автонабором по сайту (8 500 руб.) $services_40\n".
				"Установка системы автооплаты (4 500 руб.) $services_41\n".
				"Мобильная версия (20 000 руб.) $services_42\n".
				"Создание групп в социальной сети (4 500 руб.) $services_43\n".
				"Google Analytics (3 500 руб.) $services_44\n".
				"Google AdWords (5 000 руб.) $services_45\n";

			mail($to, $subject, $msg, 'From: ' . $email);
		?>
	</body>
</html>