const burger = document.querySelector('.header__burger');
const closeMenu = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-wrap');
const dark = document.querySelector('.dark');
burger.addEventListener('click', openM);
closeMenu.addEventListener('click', closeM);

function openM () {
   menu.classList.add('menu-open')
   dark.classList.add('dark--on')
   burger.classList.add('burger--off')
   dark.addEventListener('click', closeM)
}

function closeM () {
   menu.classList.remove('menu-open')
   dark.classList.remove('dark--on')
   burger.classList.remove('burger--off')
}