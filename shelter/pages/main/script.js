const burgerIcon = document.querySelector('.burger__menu');
const navigationMenu = document.querySelector('.menu__list');
const navigationItems = document.querySelectorAll('.menu__list-item');

if (burgerIcon) {
  burgerIcon.addEventListener('click', open);
}

function open() {
  navigationMenu.classList.toggle('show');
  burgerIcon.classList.toggle('active');
}
