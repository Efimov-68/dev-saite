$(document).ready(function(){
	var $i = '>>> '
	$('.code_info textarea').html(
		'Python 3.5.2 (default, Nov 23 2017, 16:37:01) [GCC 5.4.0 20160609] on linuxType "copyright", "credits" or "license()" for more information.\n>>> print("Hello World!")\n>>> Hello World!\n' + $i);
	$('.code_info textarea').keypress($i);
});