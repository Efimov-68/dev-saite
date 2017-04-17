<?php
$fio = $_POST['fio'];
$number = $_POST['number'];
$fio = htmlspecialchars($fio);
$number = htmlspecialchars($number);
$fio = urldecode($fio);
$number = urldecode($number);
$fio = trim($fio);
$number = trim($number);
//echo $fio;
//echo "<br>";
//echo $fio;
if (mail("r.efimov@list.ru", "Заявка с сайта", "ФИО:".$fio.". Телефон: ".$number")){
	echo "форма успешно отправлено";
}else{
	echo "при отправке формы возникли проблемы";
}?>