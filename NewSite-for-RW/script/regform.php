<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'>
	<meta http-equiv="refresh" content="1; url=http://rabbitweb.ru">
	<meta name="viewport" content="width=device-width; initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="stylesheet" type="text/css" href="../css/style-menu_form.css">
	<script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="../js/jquery-ui-min.js"></script>
	<script type="text/javascript" src="../js/script.js"></script>
	<title>Отправка формы запроса</title>
</head>
<body>
	<!-- Yandex.Metrika counter -->
	<script type="text/javascript">
		(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter45201630 = new Ya.Metrika({ id:45201630, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");
	</script>
	<noscript><div><img src="https://mc.yandex.ru/watch/45201630" style="position:absolute; left:-9999px;" alt="" /></div></noscript> 
	<!-- /Yandex.Metrika counter -->
	<?php
		$lastname = $_GET['lastname'];
		$phone = $_GET['phone'];
		$email = $_GET['email-address'];
		$comments = $_GET['comments'];
		$file = $_GET['file'];
		$personalForm = $_GET['checkbox-form-personal'];

		$to = 'office@rabbitweb.ru';
		$subject = 'Сообщение с сайта';
		$msg = "Имя: $lastname\n".
			"Телефон: $phone\n".
			"E-mail: $email\n".
			"Комментарий: $comments\n".
			"Файл: $file\n".
			"Соглашение\nс обрадоткой данных: $personalForm\n";
		mail($to, $subject, $msg, 'From: ' . $email);
	?>
	<!-- VK Widget -->
	<div id="vk_allow_messages_from_community"></div>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-100353469-1', 'auto'); ga('send', 'pageview');
	</script>
</body>
</html>