const header = document.querySelector('.header');
const burgerMenu = document.getElementById('burger-menu');
const menuList = document.querySelector('.header-menu-list');
const menuLinks = document.querySelectorAll('.header-menu-link');

menuList.addEventListener('click', event => {
  if (event.target.classList.contains('header-menu-link')) {
    document.querySelector('.is-current')?.classList.remove('is-current');
    event.target.classList.add('is-current');

    if (window.innerWidth <= 760) {
      burgerMenu.classList.remove('active');
      menuList.classList.remove('active');
    }
  }
});

window.addEventListener('scroll', () => {
  header.classList.toggle('header-expanded', window.scrollY > 0);
});

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  menuList.classList.toggle('active');
});
