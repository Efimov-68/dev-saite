Array.prototype.slice.call(document.querySelectorAll('.feedback-form')).forEach(function(a) {
a.addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "../form/contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&telFF=" + f.telFF.value + "&cityFF=" + f.cityFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);
})

