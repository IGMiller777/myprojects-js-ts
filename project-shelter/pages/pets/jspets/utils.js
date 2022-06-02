// function getShuffledArray(array) {
//     return [...array].sort(() => Math.random() - 0.5);
//   }
  
  
//   const modalWindow = document.querySelector('.window-none');
//   const infoWindow = document.querySelector('.info-window');
//   const modalClose = document.querySelector('.modal-close');
//   const body = document.querySelector('body');
//   const activeWindow = document.querySelector('.info-window');
  
//   modalClose.addEventListener('click', closeModal);
  
//   infoWindow.addEventListener('click', (closes) => {
//     if(closes.target.classList.contains('info-window')){
//       activeWindow.classList.remove('active-window');
      
//       closeModal()
//     }
//   })
  
//   const petName = document.querySelector('.name-dog');
//   const petImage = document.querySelector('.pet-image');
//   const description = document.querySelector('.description');
//   const type = document.querySelector('.type');
//   const age = document.querySelector('.age');
//   const inoculations = document.querySelector('.inoculations');
//   const diseases = document.querySelector('.diseases');
//   const parasites = document.querySelector('.parasites');
  
  
//   function openModal(element){
//     const id = element.getAttribute('data-id');
//     const petData = PETS_DATA.find((pet) => pet.id === id);
//     setModalData(petData);
  
//     modalWindow.classList.remove('window-none');
//     body.classList.add('overflow');
//   }
  
//   function closeModal(){
//     modalClose.classList.remove('active-window');
//     infoWindow.classList.add('window-none')
//     body.classList.remove('overflow');
//   }
  
//   function setModalData(petData){
//     petName.innerHTML = petData.name;
//     petImage.src = petData.img;
//     description.innerHTML = petData.description;
//     type.innerHTML = petData.type + ' — ' + petData.breed;
//     age.innerHTML = petData.age;
//     inoculations.innerHTML = petData.inoculations;
//     diseases.innerHTML = petData.diseases;
//     parasites.innerHTML = petData.parasites;
//   }
  
//   // ============================================
  
  
//   function createCardTemplate(cardData) {
//     const cardContainer = document.createElement('div')
//     cardContainer.classList.add('pet-card')
//     cardContainer.setAttribute('data-id', cardData.id); 
  
//     const cardImg = document.createElement('img')
//     cardImg.src = cardData.img;
//     cardImg.classList.add('pets');
  
//     const cardName = document.createElement('p')
//     cardName.classList.add('name')
//     cardName.innerHTML = cardData.name
  
//     const cardBtn = document.createElement('button')
//     cardBtn.classList.add('btn-acquaintance')
//     cardBtn.innerHTML = 'Learn more'
  
//     cardContainer.append(cardImg, cardName, cardBtn)
//     return cardContainer
//   }