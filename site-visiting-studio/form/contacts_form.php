<?php
// несколько получателей
$to  = 'r.efimov@list.ru' . ', ';  // обратите внимание на запятую
$to .= 'romka68rus@yandex.ru';

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма меняется он!!
$message = $_POST['fio'] . '<br />' . $_POST['phone'] . '<br />' . $_POST['email'] . '<br />' . $_POST['city'] . '<br />' . $_POST['services'];

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Web-studio <r.efimov@list.ru>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>
