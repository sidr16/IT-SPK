"use strict";

function openMenu() {
  document.getElementById('mobileMenu').classList.toggle('menu-active');
  document.getElementById('toggleBtn').classList.toggle('btn__active');
  document.getElementById('body').classList.toggle('body__hidden');
}

function openPopap() {
  document.getElementById('popap').classList.toggle('popap__active');
  document.getElementById('body').classList.toggle('body__hidden');
}

$(document).ready(function () {
  $("#menu1").on("click", "a", function (event) {
    document.getElementById('mobileMenu').classList.remove('menu-active');
    document.getElementById('toggleBtn').classList.remove('btn__active');
    document.getElementById('body').classList.remove('body__hidden');
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});
$(document).ready(function () {
  $("#menu2").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});