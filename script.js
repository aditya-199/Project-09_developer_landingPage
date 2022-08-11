const menu = document.querySelector(".menu");

const navItems = document.querySelector(".nav-items");

const headUp = document.querySelector(".header");

menu.addEventListener('click', ()=>{
    navItems.classList.toggle('show');
    headUp.classList.toggle('header-up');
});

