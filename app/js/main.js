const burgerOpener = document.querySelector('.menu-opener');
const burgerMenu = document.querySelector('.burger-menu');
const linksArr = document.querySelectorAll('.burger-menu__link');
const shevronBtn = document.querySelector('.burger-menu__item--content');
const menuSubList = document.querySelector('.burger-menu__sublist');

const toggleMenu = () => {
  if(burgerOpener.classList.contains('burger-menu-open')){
    burgerOpener.classList.remove('burger-menu-open');
    burgerMenu.classList.remove('burger-menu-open');
  }
  else {
    burgerOpener.classList.add('burger-menu-open');
    burgerMenu.classList.add('burger-menu-open');
  }
};

const toggleMenuList = () => {
  if(shevronBtn.classList.contains('burger-menu__item--content-open')){
    shevronBtn.classList.remove('burger-menu__item--content-open');
    menuSubList.classList.remove('burger-menu__item--content-open');
  }
  else {
    shevronBtn.classList.add('burger-menu__item--content-open');
    menuSubList.classList.add('burger-menu__item--content-open');
  }
};

burgerOpener.onclick = ()=>toggleMenu();
shevronBtn.onclick = ()=>toggleMenuList();

