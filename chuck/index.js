const chuckImg = document.querySelector('.big-gun')
const Btn = document.querySelector('.btn')
const redCl = document.querySelector('.chuck-t')

const text = document.querySelector('.text')


const enLan = document.querySelector('.enlan');
const ruLan = document.querySelector('.rulan')

// ruLan.addEventListener('click', changeTh)
// enLan.addEventListener('click', changeTh2)

let url = "https://api.icndb.com/jokes/random"

const audio = new Audio();
let res = `./files/music-forcuck.mp3`



window.addEventListener('load', function () {

    console.log('I am the 1st one.');

    async function getData() {
        const res = await fetch(url)
        const data = await res.json()
        text.textContent = data.value.joke
        console.log(data.value.joke)
    }
    getData()

});




Btn.addEventListener('click', shake)

function shake() {
    audio.src = res;
    audio.currentTime = 0;
    audio.play();
    console.log('music')
    chuckImg.classList.add('active')
    redCl.classList.add('active')
    console.log('shakessss')
    async function getData() {
        const res = await fetch(url)
        const data = await res.json()
        text.textContent = data.value.joke
        console.log(data.value.joke)
    }
    getData()

}
Btn.addEventListener('mouseover', function () {
    chuckImg.classList.remove('active')
    redCl.classList.remove('active')


})

let date = './files/quotes.json'

// let url;



const main = document.querySelector('.radio-toolbar')
main.addEventListener('click', function (event) {

    if (event.target.classList.contains('rulan')) {
        date = './files/quotes.json'
        url = undefined
        Btn.removeEventListener('click', shake)
        Btn.removeEventListener('click', second)

        ruLan.classList.add('active')
        enLan.classList.add('unactive')

        Btn.addEventListener('click', first)
        function first() {
            chuckImg.classList.add('active')
            redCl.classList.add('active')
            async function getData() {
                const res = await fetch(date)
                const data = await res.json()
                let z = (Math.floor(Math.random() * 20))
                text.textContent = data[z].text
                console.log('ruuuu')
                console.log(data[z].text)
            }
            getData()
        }

    }
    if (event.target.classList.contains('enlan')) {
        date = undefined
        url = "https://api.icndb.com/jokes/random"
        Btn.removeEventListener('click', first)
        Btn.removeEventListener('click', shake)

        ruLan.classList.remove('active')
        enLan.classList.remove('unactive')
        Btn.addEventListener('click', second)

        function second() {
            chuckImg.classList.add('active')
            redCl.classList.add('active')
            console.log('shake')
            async function getDatasec() {
                const res = await fetch(url)
                const data = await res.json()
                text.textContent = data.value.joke
                console.log(data.value.joke)
            }
            getDatasec()
        }



    }

})

// function changeTh() {
//     ruLan.classList.add('active')
//     enLan.classList.add('unactive')

// }
// function changeTh2() {
//     ruLan.classList.remove('active')
//     enLan.classList.remove('unactive')
//     url = date;
//     async function getData() {
//         const res = await fetch(date)
//         const data = await res.json()
//         let z = (Math.floor(Math.random() * 20))
//         text.textContent = data[z].text

//         console.log(data[z].text)
//     }
//     getData()

// }







