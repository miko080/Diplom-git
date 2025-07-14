// Модалка

const menuBtn = document.querySelector('.menu__btn')
const menuCancel = document.querySelector('.menu__cancel-btn')
const menuList = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--open')
})

menuCancel.addEventListener('click', () => {
  menuList.classList.remove('menu__list--open')
})

