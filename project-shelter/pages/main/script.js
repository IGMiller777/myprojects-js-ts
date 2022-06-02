// alert('Если не трудно, проверьте через пару часов. Устраняю пару ошибок. Спасибо за понимание')

//BURGER MENU
let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.header-ul')
let dark = document.querySelector('.one-ex')
let allSide = document.querySelector('.width-page')


menuBtn.addEventListener('click', function(){ 
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
    dark.classList.toggle('active')
    console.log(allSide);
    allSide.classList.toggle('modal-open')
})

const NAV_LINKS = document.querySelectorAll('.header-item')
NAV_LINKS.forEach(element => element.addEventListener('click', closeMenu));
dark.addEventListener('click',closeMenu )
function closeMenu(event){
    if(event.target.classList.contains('header-item')){
        menuBtn.classList.remove('active')
        menu.classList.remove('active')
        allSide.classList.remove('modal-open')

        dark.classList.remove('active')
    }
    else { 
        menuBtn.classList.remove('active')
        menu.classList.remove('active')
        allSide.classList.remove('modal-open')

        dark.classList.remove('active')
    }
}
//BURGER END




// CORUSEL END
const petsData = 
 [
  {
    id: "1",
    name: "Jennifer",
    img: "../../assets/images/jennifer.svg",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: " 2 months",
    inoculations: [" none"],
    diseases: [" none"],
    parasites: [" none"]
  },
  {
    id: "2",
    name: "Sophia",
    img: "../../assets/images/sophia.svg",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: " 1 month",
    inoculations: [" parvovirus"],
    diseases: [" none"],
    parasites: [" none"]
  },
  {
    id: "3",
    name: "Woody",
    img: "../../assets/images/woody.svg",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: [" adenovirus", " distemper"],
    diseases: [" right back leg mobility reduced"],
    parasites: [" none"]
  },
  {
    id: "4",
    name: "Scarlett",
    img: "../../assets/images/scarlett.svg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: " 3 months",
    inoculations: [" parainfluenza"],
    diseases: [" none"],
    parasites: [" none"]
  },
  {
    id: "5",
    name: "Katrine",
    img: "../../assets/images/katrine.svg",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: [" panleukopenia"],
    diseases: [" none"],
    parasites: [" none"]
  },
  {
    id: "6",
    name: "Timmy",
    img: "../../assets/images/timmy.svg",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: [" calicivirus", " viral rhinotracheitis"],
    diseases: [" kidney stones"],
    parasites: [" none"]
  },
  {
    id: "7",
    name: "Freddie",
    img: "../../assets/images/freddie.svg",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: [" rabies"],
    diseases: [" none"],
    parasites: [" none"]
  },
  {
    id: "8",
    name: "Charly",
    img: "../../assets/images/charly.svg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: [" bordetella bronchiseptica", "leptospirosis"],
    diseases: [" deafness", " blindness"],
    parasites: [" lice", " fleas"]
  }
]


// import {petsData} from "../json/pets.js";

function getShuffledArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

console.log(petsData);

function createCardTemplate(cardData, isOurPest) {

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('pets-card')
    cardContainer.setAttribute('data-id', cardData.id); 

    const cardImg = document.createElement('img')
    // cardImg.src = isOurPest ? `.${cardData.img}` : cardData.img;
    cardImg.src = cardData.img;

    const cardName = document.createElement('p')
    cardName.classList.add('pets-name')
    cardName.innerHTML = cardData.name

    const cardBtn = document.createElement('button')
    cardBtn.classList.add('pets-button')
    cardBtn.innerHTML = 'Learn more'

    cardContainer.append(cardImg, cardName, cardBtn)
    return cardContainer
}



const leftButton = document.querySelector('.button-left.for-hide')
const rightButton = document.querySelector('.button-rigth.for-hide')

let rightN = document.querySelector('.button-left')
console.log(rightN);


const slider = document.querySelector('.pets-card-slider')
const itemsLeft = document.querySelector('.pets-item.left')
const itemsRight = document.querySelector('.pets-item.right')
const itemsActive = document.querySelector('.pets-item.active')

const CurrentPetsId = []

console.log(CurrentPetsId);


const addRandomCardToSlider = (container) =>{
    const shuffledData = getShuffledArray(petsData)

    shuffledData.forEach((pet, index) => {
        if (index < 3) {
            const card = createCardTemplate(pet, index === 1)
            CurrentPetsId.push(pet.id)
            container.append(card)
        }
    })
}

addRandomCardToSlider(itemsActive)
addRandomCardToSlider(itemsLeft)
addRandomCardToSlider(itemsRight)



const moveLeft = () =>{
    slider.classList.add('transition-left')
    leftButton.removeEventListener('click', moveLeft)
    rightButton.removeEventListener('click', moveRight)
}

const moveRight = () =>{
    slider.classList.add('transition-right')
    rightButton.removeEventListener('click', moveRight)
    leftButton.removeEventListener('click', moveLeft)
}

console.log(leftButton);
leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);




slider.addEventListener('animationend', (animationEvent) => {
    let changedItem;

    if(animationEvent.animationName === 'move-left') {
        slider.classList.remove('transition-left')
        changedItem = itemsLeft
        document.querySelector('.pets-item.active').innerHTML = itemsLeft.innerHTML
    }else  {
        slider.classList.remove('transition-right')
        changedItem = itemsRight;
        document.querySelector('.pets-item.active').innerHTML = itemsRight.innerHTML
    }
    changedItem.innerHTML = ''

    addRandomCardToSlider(changedItem)

    leftButton.addEventListener('click', moveLeft)
    rightButton.addEventListener('click', moveRight)
})





/*------------------------------------POPUP---------------------------------------*/
const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.popup-close-btn')
const cardImg = document.querySelector(".popup-card-img")
const cardName = document.querySelector(".popup-card-title")
const cardBreed = document.querySelector(".popup-card-subtitle")
const cardDescription = document.querySelector(".popup-card-text")
const cardAge = document.querySelector(".age")
const cardInoculations = document.querySelector(".inoculations")
const cardDiseases = document.querySelector(".diseases")
const cardParasites = document.querySelector(".parasites")

const openPopup = (id) => {
    popup.classList.add('open')
    document.body.classList.add('lock')

    setPopupData(id);
}

const closePopup = () =>{
    popup.classList.remove('open')
    document.body.classList.remove('lock')
}

slider.addEventListener('click', (event) => {
    const container = event.target.closest('.pets-card');
    if (container) {
        const id = container.getAttribute('data-id');
        openPopup(id)
    }
})

popup.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup-body')) {
        closePopup()
    }
})
popupBtn.addEventListener('click', closePopup)

function setPopupData(id) {
    const popupData = petsData.find((pet) => pet.id === id);

    cardImg.src = popupData.img
    cardName.innerHTML = popupData.name
    cardBreed.innerHTML = popupData.type + ' — ' + popupData.breed
    cardDescription.innerHTML = popupData.description
    cardAge.innerHTML = popupData.age;
    cardInoculations.innerHTML = popupData.inoculations.join(', ')
    cardDiseases.innerHTML =  popupData.diseases.join(', ')
    cardParasites.innerHTML = popupData.parasites.join(', ')
}
// console.log(popupData.inoculations.join(', '))

