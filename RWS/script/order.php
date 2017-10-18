<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta content='text/html; charset=UTF-8' http-equiv='Content-Type' />
		<!--meta http-equiv="refresh" content="10; url=../index.html" /-->
		<link rel="stylesheet" href="../css/style.css">
		<title>Order form</title>
	</head>
	<body>
        <header>
            <div id="header">
                <div class="nav">
                    <ul class="nav_menu">
                        <li><a href=""><img src="image/logo.png" alt="RabbitWeb" class="logo_RW" /></a></li>
                        <li><a href="">Text</a></li>
                        <li><a href="">Text</a></li>
                        <li><a href="">Text</a></li>
                        <li><a href="#order_form">Заказать сайт</a></li>
                    </ul>
                    <ul class="nav_contacts">
                        <li>+7(499)394-6887</li>
                        <li><a href="">office@rabbitweb.ru</a></li>
                    </ul>
                </div>
            </div>
        </header>
		<?php
			$name = $_POST["last_name"];
			$email = $_POST["email"];
			$phone = $_POST["phone"];
			$file = $_POST["file"];
			$check = $_POST["check"];
			
			$to = 'office@rabbitweb.ru';
			$subject = 'Запрос с сайта.';
			$msg = "Имя: $name\n".
				"E-mail: $email\n".
				"Телефон: $phone\n".
				"Файл: $file\n".
				"Согласие на обработку: $check\n";
			mail($to, $subject, $msg, "From: " . $email);
		?>
		<div id="allContent">
			<div>	
				<div>
					<a href="../index.html">Назад</a>
				</div>
			</div>
		</div>
        <div id="footer">
           <div>
               <h2>RabbitWeb</h2>
           </div>
            <div class="footer_list">
                <div class="list">
                    <ul>
                        <li>Text</li>
                        <li>Text</li>
                        <li>Text</li>
                    </ul>
                </div>
                <div class="list">
                    <ul>
                        <li>Text</li>
                        <li>Text</li>
                        <li>Text</li>
                    </ul>
                </div>
                <div class="list">
                    <ul>
                        <li>Text</li>
                        <li>Text</li>
                        <li>Text</li>
                    </ul>
                </div>
                <div class="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
            </div>
        </div>
	</body>
</html>