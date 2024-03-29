let menu    = document.querySelector('.burger');
let burger  = document.querySelectorAll('.js-burger');
let i;
for (i = 0; i < burger.length; i++) {
  burger[i].onclick = function() {
    menu.classList.toggle("burger--open");
  }
};

let scroll = new SmoothScroll('a[href*="#"]', {speed: 400});

let colorButton = document.querySelector('.button-color');
let moreButton = document.querySelector('.button-more');

if(document.documentElement.clientWidth > 768) {
  colorButton.classList.add("button--border");
  moreButton.classList.add("button--border");
}
