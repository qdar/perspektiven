let menu    = document.querySelector('.burger');
let burger  = document.querySelectorAll('.js-burger');
let i;
for (i = 0; i < burger.length; i++) {
  burger[i].onclick = function() {
    menu.classList.toggle("burger--open");
  }
};

$(document).ready(function() {
  $('.facts__sidebar')
    .theiaStickySidebar({
      additionalMarginTop: 120
    });
});
