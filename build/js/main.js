const navMenu = document.querySelector('.menu-list');
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const headWrap = document.querySelector('.page-header__wrapper');
const mobileLogo = document.querySelector('.logo__mobile');
const flagList = document.querySelector('.promo__flags-list');

mainNav.classList.remove('main-nav--nojs');

const removeClass = () => {
    navMenu.classList.remove('menu-list--opened');
    mainNav.classList.remove('main-nav--opened');
    headWrap.classList.remove('page-header__wrapper--opened');
    mobileLogo.classList.remove('logo__mobile--active');
}

navToggle.addEventListener('click', function() {
  if (!navMenu.classList.contains('menu-list--opened')) {
    navMenu.classList.add('menu-list--opened');
    mainNav.classList.add('main-nav--opened');
    headWrap.classList.add('page-header__wrapper--opened');
    mobileLogo.classList.add('logo__mobile--active');
  }
  else {
    removeClass();
  }
});

const onResize = () => {
  window.addEventListener ('resize', () => {
    if(window.innerWidth > 767) {
      removeClass();
    }
  })
}

onResize();

// window.addEventListener("DOMContentLoaded", () => {
//   if (!flagList.classList.contains('promo__flags-list--active')) {
//     flagList.classList.add('promo__flags-list--active')
//   }
// })
