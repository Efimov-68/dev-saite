<?
if (array_key_exists('fio', $_POST)) {
   $to = 'r.efimov@list.ru';
   $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['fio']."\nEmail: ".$_POST['email']."\nIP: ".$_SERVER['REMOTE_ADDR']."\nТелефон: ".$_POST['phone']."\nГород: ".$_POST['city'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $subject, $message, $headers);
   echo $_POST['fio'];
}
?>
