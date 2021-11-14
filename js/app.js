const toggle = document.querySelector('.header__btn'),
      nav = document.querySelector('.header__nav'),
      closeMenu = document.querySelectorAll('.header__link');

toggle.addEventListener('click', (e)=> {
    e.target.classList.toggle('active');
    nav.classList.toggle('active');
})
closeMenu.forEach(el => el.addEventListener('click', ()=> {
    toggle.classList.remove('active');
    nav.classList.remove('active');
  }));