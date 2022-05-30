


let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.header-ul')


menuBtn.addEventListener('click', function(){ 
    console.log('wooo')
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
})