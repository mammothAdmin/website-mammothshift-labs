/* MammothShift Labs — Mobile menu */

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.ml-nav-burger');
  const mobileNav = document.querySelector('.ml-mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }
});
