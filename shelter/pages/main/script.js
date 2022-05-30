<<<<<<< HEAD



let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.header-ul')


menuBtn.addEventListener('click', function(){ 
    console.log('wooo')
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
})
=======
function avc(str){ 

    str = str.split(' ')
    return Math.min(...str) && Math.max(...str)

}
 
console.log(avc('1 4 5 6 7'))
>>>>>>> 56f09698eea81e9081e93232d546ec520014ddbf
