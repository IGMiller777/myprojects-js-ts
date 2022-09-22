// //Burger MENU
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__list');
let dark = document.querySelector('.one-ex');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	dark.classList.toggle('active');
})
const navLinks = document.querySelectorAll('.header_link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu))
function closeMenu(event) {
	if (event.target.classList.contains('header_link')) {
		menu.classList.remove('active')
		menuBtn.classList.remove('active');
		dark.classList.remove('active');
	}
}

// //Buttons 
const portfolioImages = document.querySelectorAll('.portfolio-image');
const porfolioBtns = document.querySelector('.portfolio-btns');

porfolioBtns.addEventListener('click', changeImage)
const colorBtns = document.querySelectorAll('.portfolio-btn');
function changeImage(event) {
	if (event.target.classList.contains('portfolio-btn')) {
		portfolioImages.forEach((img, index) => img.src = `./assets/image/seasons/${event.target.dataset.season}/${index + 1}.jpg`);
		colorBtns.forEach((col) => col.classList.remove('active'))
		event.target.classList.toggle('active')
	}
}


// //Cash images
const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach((season) => {
	for (let i = 1; i <= 6; i++) {
		const img = new Image();
		img.src = `./assets/image/seasons/${season}/${i}.jpg`;
	}
}
)


//Translate
import i18Obj from "./translate.js";
const enLan = document.querySelector('.enlan');
const ruLan = document.querySelector('.rulan');
let lang;

ruLan.addEventListener('click', setLocalStorage)
enLan.addEventListener('click', setLocalStorage)
const elemFortransl = document.querySelectorAll('[data-i18]');


function getTranslate() {
	if (lang === 'ru') {
		ruLan.classList.add('active')
		enLan.classList.add('unactive')
		elemFortransl.forEach((item) => item.textContent = i18Obj.ru[item.dataset.i18])
	}
	else if (lang === 'en') {
		ruLan.classList.remove('active')
		enLan.classList.remove('unactive')

		elemFortransl.forEach((item) => item.textContent = i18Obj.en[item.dataset.i18])
	}
}



//Light theme 
const lightIcon = document.querySelector('.theme-for')
const darkSkill = document.querySelector('.skills')
const darkPort = document.querySelector('.portfolio')
const lightBtns = document.querySelectorAll('.portfolio-btn')
const darkVid = document.querySelector('.video')
const darkPrice = document.querySelector('.price')
const darkList = document.querySelector('.header__list')
const darkLink = document.querySelectorAll('.header_link')
const menuColor = document.querySelectorAll('.menu-color')
const menuColorOne = document.querySelector('.menu-color1')

lightIcon.addEventListener('click', setLocalStorage)
function changeDark() {

	lightIcon.classList.toggle('active');
	darkSkill.classList.toggle('light-theme')

	darkPort.classList.toggle('light-theme')
	lightBtns.forEach((but) => but.classList.toggle('light-theme'))

	darkVid.classList.toggle('light-theme')
	darkPrice.classList.toggle('light-theme')

	darkList.classList.toggle('light-theme')
	darkLink.forEach((lin) => lin.classList.toggle('light-theme'))
	menuBtn.addEventListener('click', function () {
		menuColor.forEach((meCol) => meCol.classList.toggle('light-theme'))
		menuColorOne.classList.toggle('light-theme')
	})
}

// Local storage
function setLocalStorage(event) {
	if (event.target.classList.contains('theme-for')) {
		if (localStorage.getItem('themeStorage') === 'light') {
			localStorage.removeItem('themeStorage');
		}
		else {
			localStorage.setItem('themeStorage', 'light');
		}
		changeDark()
	}

	if (event.target.classList.contains('rulan')) {
		lang = 'ru'
		if (localStorage.getItem('langStorage') === 'en') {
			localStorage.removeItem('langStorage');

			localStorage.setItem('langStorage', 'ru');
		}
		getTranslate()
	}

	if (event.target.classList.contains('enlan')) {
		lang = 'en'
		if (localStorage.getItem('langStorage') === 'ru') {
			localStorage.removeItem('langStorage');

			localStorage.setItem('langStorage', 'en');
		}
		getTranslate()

	}


}
function getLocalStorage() {
	if (localStorage.getItem('themeStorage')) {
		const themeStorage = localStorage.getItem('themeStorage')
		changeDark(themeStorage);
	}

	if (localStorage.getItem('langStorage')) {
		lang = localStorage.getItem('langStorage')
		getTranslate()
	}
}
window.addEventListener('load', getLocalStorage);






