//BURGER MENU
let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.header-ul')
let dark = document.querySelector('.one-ex')
let allSide = document.querySelector('.page-width')



menuBtn.addEventListener('click', function(){ 
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
    dark.classList.toggle('active')
    allSide.classList.toggle('modal-open')


})

const NAV_LINKS = document.querySelectorAll('.header-item')
NAV_LINKS.forEach(element => element.addEventListener('click', closeMenu));
dark.addEventListener('click',closeMenu )

function closeMenu(event){
    if(event.target.classList.contains('header-item')){
        menuBtn.classList.remove('active')
        menu.classList.remove('active')
        dark.classList.remove('active')
        allSide.classList.remove('modal-open')


    }
    else { 
        menuBtn.classList.remove('active')
        menu.classList.remove('active')
        dark.classList.remove('active')
        allSide.classList.remove('modal-open')

    }
}

//BURGER END





/*====== BURGER_MENU ======*/
const PETS_DATA = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.svg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": '1'
    },
    {
      "name": "Sophia",
      "img":  "../../assets/images/sophia.svg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": '2'
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.svg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"],
      "id": '3'
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.svg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": '4'
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.svg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": '5'
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.svg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"],
      "id": '6'
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.svg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"],
      "id": '7'
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.svg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"],
      "id": '8'
    }
  ]



  function getShuffledArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
  
  
  const modalWindow = document.querySelector('.window-none');
  const infoWindow = document.querySelector('.info-window');
  const modalClose = document.querySelector('.modal-close');
  const body = document.querySelector('body');
  const activeWindow = document.querySelector('.info-window');
  
  modalClose.addEventListener('click', closeModal);
  
  infoWindow.addEventListener('click', (closes) => {
    if(closes.target.classList.contains('info-window')){
      activeWindow.classList.remove('active-window');
      
      closeModal()
    }
  })
  
  const petName = document.querySelector('.name-dog');
  const petImage = document.querySelector('.pet-image');
  const description = document.querySelector('.description');
  const type = document.querySelector('.type');
  const age = document.querySelector('.age');
  const inoculations = document.querySelector('.inoculations');
  const diseases = document.querySelector('.diseases');
  const parasites = document.querySelector('.parasites');
  
  
  function openModal(element){
    const id = element.getAttribute('data-id');
    const petData = PETS_DATA.find((pet) => pet.id === id);
    setModalData(petData);
  
    modalWindow.classList.remove('window-none');
    body.classList.add('overflow');
  }
  
  function closeModal(){
    modalClose.classList.remove('active-window');
    infoWindow.classList.add('window-none')
    body.classList.remove('overflow');
  }
  
  function setModalData(petData){
    petName.innerHTML = petData.name;
    petImage.src = petData.img;
    description.innerHTML = petData.description;
    type.innerHTML = petData.type + ' — ' + petData.breed;
    age.innerHTML = petData.age;
    inoculations.innerHTML = petData.inoculations;
    diseases.innerHTML = petData.diseases;
    parasites.innerHTML = petData.parasites;
  }
  
  // ============================================
  
  
  function createCardTemplate(cardData) {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('pet-card')
    cardContainer.setAttribute('data-id', cardData.id); 
  
    const cardImg = document.createElement('img')
    cardImg.src = cardData.img;
    cardImg.classList.add('pets');
  
    const cardName = document.createElement('p')
    cardName.classList.add('name')
    cardName.innerHTML = cardData.name
  
    const cardBtn = document.createElement('button')
    cardBtn.classList.add('btn-acquaintance')
    cardBtn.innerHTML = 'Learn more'
  
    cardContainer.append(cardImg, cardName, cardBtn)
    return cardContainer
  }



const petsCardContainer = document.querySelector('.cards-container');


PETS_DATA.forEach((pet) => {
  const petElement = createCardTemplate(pet); 
  petsCardContainer.append(petElement);
})

petsCardContainer.addEventListener('click', (event) => {
  const container = event.target.closest('.pet-card');
  activeWindow.classList.add('active-window');
  if(container){
    openModal(container)
  }
});


/*====== Pagination ======*/

const btnNavigation = document.querySelector('.navigation');
const pageNumber = document.querySelector('.active-button');

const petsDataArray = [];

for(let i = 0; i < 8; i++) {
  const sortedArray = getShuffledArray(PETS_DATA);

  sortedArray.forEach(pet => {
    petsDataArray.push(pet)
  });
}

let petsCount = getPetsCount(window.innerWidth);

let from = 0;
let to = petsCount;

let currentPage = 1;
const lastPage = petsDataArray.length / petsCount;

renderCards(petsDataArray.slice(from, to));

btnNavigation.addEventListener('click', (e) => {
    const button = e.target;

    if(!button.classList.contains('nav-btn')) {
      return;
  }

  if(button.classList.contains('end')) {
      from = petsDataArray.length - petsCount;
      to = petsDataArray.length;

      currentPage = lastPage;
  } else if(button.classList.contains('start')) {
      from = 0;
      to = petsCount;

      currentPage = 1;
  } else if(button.classList.contains('prev')) {
      from = from - petsCount;
      to = to - petsCount;

      currentPage -= 1;
  } else if(button.classList.contains('next')) {
        from = from + petsCount;
        to = to + petsCount;
        currentPage += 1;

  }

  // if(pageNumber.textContent === '8'){ 
  //   btnNavigation.removeEventListener()
  // }
  // if(button.classList.contains('prev')){ 
  //   btnNavigation.addEventListener()

  // }



  console.log(pageNumber.textContent);


  renderCards(petsDataArray.slice(from, to))
  pageNumber.innerHTML = currentPage;
})




window.addEventListener('resize', () => {
  petsCount = getPetsCount(window.innerWidth);
})

function renderCards (cards) {
  petsCardContainer.innerHTML = '';

  cards.forEach((cardData) => {
      const card = createCardTemplate(cardData, true)
      petsCardContainer.append(card)
  })
}

function getPetsCount(width) {
  if(width < 767) {
      return 3;
  } else if(width < 1024) {
      return 6
  } else {
      return 8
  }
}

/*====== Pagination ======*/




