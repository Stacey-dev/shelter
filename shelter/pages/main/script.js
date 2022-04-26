const petsData = [
  {
    id: 1,
    name: 'Jennifer',
    img: '../../assets/images/pets-jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none']
  },
  {
    id: 2,
    name: 'Sophia',
    img: '../../assets/images/pets-sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none']
  },
  {
    id: 3,
    name: 'Woody',
    img: '../../assets/images/pets-woody.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none']
  },
  {
    id: 4,
    name: 'Scarlett',
    img: '../../assets/images/pets-scarlett.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none']
  },
  {
    id: 5,
    name: 'Katrine',
    img: '../../assets/images/pets-katrine.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none']
  },
  {
    id: 6,
    name: 'Timmy',
    img: '../../assets/images/pets-timmy.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none']
  },
  {
    id: 7,
    name: 'Freddie',
    img: '../../assets/images/pets-freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none']
  },
  {
    id: 8,
    name: 'Charly',
    img: '../../assets/images/pets-charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas']
  }
];

const burgerIcon = document.querySelector('.burger__menu');
const headerLogo = document.querySelector('.header__logo');
const navigationMenu = document.querySelector('.menu__list');
const navigationItems = document.querySelectorAll('.menu__list-item');
const overlay = document.createElement('div');
const carousel = document.querySelector('.friends__carousel');
const petsContainer = document.querySelector('.friends__cards');
const itemsLeft = document.querySelector('#cards-left');
const itemsActive = document.querySelector('#cards-active');
const itemsRight = document.querySelector('#cards-right');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__button');
const petInfoContainer = document.querySelector('.popup__wrapper');
overlay.classList.add('overlay');

function open() {
  navigationMenu.classList.remove('hide');
  navigationMenu.classList.add('show');
  headerLogo.classList.add('header__logo-burger');
  burgerIcon.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.body.prepend(overlay);
}

function close() {
  navigationMenu.classList.remove('show');
  navigationMenu.classList.add('hide');
  headerLogo.classList.remove('header__logo-burger');
  burgerIcon.classList.remove('active');
  overlay.remove();
  document.body.style.overflow = 'scroll';
}

burgerIcon.addEventListener('click', () => {
  navigationMenu.classList.contains('show') ? close() : open();
});

const navItems = Array.from(navigationItems).forEach((elem) =>
  elem.addEventListener('click', close)
);
overlay.addEventListener('click', close);
overlay.addEventListener('mouseover', () => {
  closeBtn.classList.add('popup__button-hover');
});
overlay.addEventListener('mouseout', () => {
  closeBtn.classList.remove('popup__button-hover');
});

function createPetsCards(list) {
  itemsLeft.innerHTML += createElements(list);
  itemsActive.innerHTML += createElements(list);
  itemsRight.innerHTML += createElements(list);
}

createPetsCards(petsData);

function createElements(petsList) {
  let str = '';
  let cardsNumber;
  if (document.body.clientWidth > 1279) {
    cardsNumber = 3;
  } else if (
    document.body.clientWidth > 767 &&
    document.body.clientWidth < 1280
  ) {
    cardsNumber = 2;
  } else if (document.body.clientWidth < 768) {
    cardsNumber = 1;
  }
  for (let i = 0; i < cardsNumber; i++) {
    let randomPet = Math.floor(Math.random() * 8);
    str += `<div class="card" data-id="${petsList[randomPet].id}">
              <img class="card-image" src="${petsList[randomPet].img}" alt="${petsList[randomPet].name}">
              <h4 class="card-title">
              ${petsList[randomPet].name}
              </h4>
              <button class="card-button" type="button">
                Learn more
              </button>
            </div>`;
  }

  return str;
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const cardsArray = Array.from(cards);
  cardsArray.forEach((elem) => elem.addEventListener('click', appendPopup));
});

function appendPopup(event) {
  let petId = event.target.parentNode.dataset.id || event.target.dataset.id;
  popup.classList.add('popup__show');
  document.body.style.overflowY = 'hidden';
  document.body.prepend(overlay);
  createPopup(petId);
}

function createPopup(id) {
  const petInfo = `<img class="popup__image" src="${
    petsData[id - 1].img
  }" alt="${petsData[id - 1].name}">
 <div class="popup__content">
   <h3 class="popup__title">${petsData[id - 1].name}</h3>
   <h4 class="popup__subtitle">${petsData[id - 1].type} - ${
    petsData[id - 1].breed
  }</h4>
   <p class="popup__description">
   ${petsData[id - 1].description}
   </p>
   <ul class="popup__list">
     <li class="popup__list-item"><strong>Age:</strong> ${
       petsData[id - 1].age
     }</li>
     <li class="popup__list-item"><strong>Inoculations:</strong> ${
       petsData[id - 1].inoculations
     }</li>
     <li class="popup__list-item"><strong>Diseases:</strong> ${
       petsData[id - 1].diseases
     }</li>
     <li class="popup__list-item"><strong>Parasites:</strong> ${
       petsData[id - 1].parasites
     }</li>
   </ul>
 </div>`;
  petInfoContainer.innerHTML = petInfo;
}

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

function closePopup() {
  popup.classList.remove('popup__show');
  overlay.remove();
  document.body.style.overflowY = 'scroll';
}

const moveLeft = () => {
  carousel.classList.add('transition-left');
  prevBtn.removeEventListener('click', moveLeft);
  nextBtn.removeEventListener('click', moveRight);
};

const moveRight = () => {
  carousel.classList.add('transition-right');
  prevBtn.removeEventListener('click', moveLeft);
  nextBtn.removeEventListener('click', moveRight);
};

prevBtn.addEventListener('click', moveLeft);
nextBtn.addEventListener('click', moveRight);

carousel.addEventListener('animationend', (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === 'move-right') {
    carousel.classList.remove('transition-right');
    changedItem = itemsRight;
    itemsActive.innerHTML = itemsRight.innerHTML;
  } else {
    carousel.classList.remove('transition-left');
    changedItem = itemsLeft;
    itemsActive.innerHTML = itemsLeft.innerHTML;
  }

  changedItem.innerHTML = '';
  changedItem.innerHTML += createElements(petsData);

  prevBtn.addEventListener('click', moveLeft);
  nextBtn.addEventListener('click', moveRight);
});

document.addEventListener('click', (event) => {
  if (
    event.target.classList.contains('card') ||
    event.target.closest('.card')
  ) {
    appendPopup(event);
  }
});
