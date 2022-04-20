const burgerIcon = document.querySelector('.burger__menu');
const headerLogo = document.querySelector('.header__logo');
const navigationMenu = document.querySelector('.menu__list');
const navigationItems = document.querySelectorAll('.menu__list-item');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

function open() {
  navigationMenu.classList.remove('hide');
  navigationMenu.classList.add('show');
  headerLogo.classList.add('header__logo-burger');
  burgerIcon.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.body.prepend(overlay);
}

function close() {
  navigationMenu.classList.remove('show');
  navigationMenu.classList.add('hide');
  headerLogo.classList.remove('header__logo-burger');
  burgerIcon.classList.remove('active');
  overlay.remove();
  document.body.style.overflow = 'scroll';
}

burgerIcon.addEventListener('click', () => {
  navigationMenu.classList.contains('show') ? close() : open();
});

overlay.addEventListener('click', close);
