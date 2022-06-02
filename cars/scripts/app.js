
document.getElementById('main-action').onclick = function (){
    document.getElementById('cars').scrollIntoView({behavior:'smooth'});
}



const BUTTONS = document.querySelectorAll('.car-button')
    BUTTONS.forEach(element => element.addEventListener('click', function (){
        document.getElementById('price').scrollIntoView({behavior:'smooth'});

    }))

document.getElementById('price-action').onclick = function () {
     if(document.getElementById('name').value === '') {
         alert('Fill the cell')
        }
     else if(document.getElementById('phone').value === '') {
         alert('Fill the cell')
     }
     else if(document.getElementById('car').value === '') {
         alert('Fill the cell')
     }
     else {
         alert('Thanks for order.')
     }
}


// 8


document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.8) / 3) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.8 * window.pageYOffset) + 'px';
    })
});



