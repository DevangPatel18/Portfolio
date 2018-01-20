"use strict";

const nav = document.querySelector('.navbar');
let topOfNav = nav.offsetTop;

function fixNav() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);

// Navbar smooth scrolling
$(".navbar a").click(function (e) {
  e.preventDefault();
  var target = this.hash, $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top - nav.offsetHeight
    }, 900, 'swing', function () {
      window.location.hash = target;
  });
})

// Navbar scrollspy
var section = document.querySelectorAll(".section");
var sections = {};
var i = 0;

Array.prototype.forEach.call(section, function(e){
  sections[e.id] = e.offsetTop;
});

window.onscroll = function() {
  var scrollPosition = document.body.scrollTop;
  for (i in sections) {
    if (sections[i] <= scrollPosition) {
      document.querySelector('.active').setAttribute('class', ' ');
      document.querySelector(`a[href*=${i}]`).setAttribute('class', 'active');
    }
  }
}
