

// slider children
var slider = {
  //массив с изображением
  slides:['6.jpg', '9.jpg', '20.jpg'],
  //начальный кадр (индекс из массива, нумерация с 0)
  frame: 0,
  set: function(image) { //установка нужного фона слайдеру
    document.getElementById("scr").style.backgroundImage = "url("+image+")";
  },
  init: function() { //запуск слайдера с начальной картинкой
    this.set(this.slides[this.frame]);
  },
  left: function() { //влево
    this.frame--;
    if(this.frame < 0) this.frame = this.slides.length-1;
    this.set(this.slides[this.frame]);
  },
  right: function() { //вправо
    this.frame++;
    if(this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame]);
  }
};
window.onload = function() { //запуск слайдера после загрузки
  slider.init();
  setInterval(function() { //5 секунд
    slider.right(); //после - переход на кадр справа
  }, 5000);
};// end slider children
