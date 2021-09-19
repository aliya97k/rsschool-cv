const btnMenu = document.querySelector('.menu');
const menuBox = document.querySelector('.menu_burger');

btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('is-active');
    menuBox.classList.toggle('is-active');
}); 
