// Preloader

$(window).on('load', function () {
  $('html').removeClass('sv');
  var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});


//Плавность перехода по якорям
$(function () {
  $('a[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;

    $('html, body').animate({
      scrollTop: dn
    }, 1000);

    /*
     * 1000 скорость перехода в миллисекундах
     */
  });
});

//Анимации появления элементов сайта

ScrollReveal().reveal('h1', {
  delay: 500,
  duration: 500,
  distance: '50px'
});

ScrollReveal().reveal('h2', {
  delay: 250,
  duration: 500,
  distance: '50px',
  origin: 'left'
});

ScrollReveal().reveal('h3', {
  delay: 250,
  duration: 500,
  distance: '50px'
});

ScrollReveal().reveal('p', {
  delay: 350,
  duration: 500,
  distance: '50px',
  origin: 'right'
});

ScrollReveal().reveal('ul', {
  delay: 250,
  duration: 500,
  distance: '50px',
  origin: 'left'
});

ScrollReveal().reveal('a', {
  delay: 350,
  duration: 500,
  distance: '50px',
  origin: 'right'
});

ScrollReveal().reveal('img', {
  delay: 550,
  duration: 500
});

ScrollReveal().reveal('.navbar', {
  delay: 400,
  duration: 500,
  distance: '50px',
  origin: 'right'
});

ScrollReveal().clean('ul.navbar-nav');
ScrollReveal().clean('.carousel h3');
ScrollReveal().clean('.carousel img');
ScrollReveal().clean('.navbar a');

/* Behaviour Of Two Buttons Of Articles*/

$('.main').click(function () {
  window.location.href = "/";
});

$('.prev').click(function () {
  window.history.go(-1);
  return false;
});

/* Back To Top Behaviour */

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
    window.scrollBy(0, -50);
    requestAnimationFrame(topFunction);
  }
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



$('.en').click(function (event) {
  event.preventDefault();
  window.lang = "Eng";
  window.location.href = '/eng';
});

$('.ru').click(function (event) {
  event.preventDefault();
  window.lang = "Rus";
  window.location.href = '/rus';
});

