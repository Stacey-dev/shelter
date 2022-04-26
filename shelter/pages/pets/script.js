const petsArray = [
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
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const navigationMenu = document.querySelector('.menu__list');
const navigationItems = document.querySelectorAll('.menu__list-item');

const petsContainer = document.querySelector('.friends__cards');
const firstPetsPage = document.querySelector('.slider__control-first');
const lastPetsPage = document.querySelector('.slider__control-last');
const prevPetsPage = document.querySelector('.slider__control-prev');
const nextPetsPage = document.querySelector('.slider__control-next');
const currentPetsPage = document.querySelector('.slider__control-current');

const overlay = document.createElement('div');
overlay.classList.add('overlay');

function open() {
  navigationMenu.classList.remove('hide');
  navigationMenu.classList.add('show');
  headerLogo.classList.add('header__logo-burger');
  burgerIcon.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.body.prepend(overlay);
  header.classList.add('header__transparent');
}

function close() {
  navigationMenu.classList.remove('show');
  navigationMenu.classList.add('hide');
  headerLogo.classList.remove('header__logo-burger');
  burgerIcon.classList.remove('active');
  overlay.remove();
  document.body.style.overflow = 'scroll';
  header.classList.remove('header__transparent');
}

burgerIcon.addEventListener('click', () => {
  navigationMenu.classList.contains('show') ? close() : open();
});

const navItems = Array.from(navigationItems).forEach((elem) =>
  elem.addEventListener('click', close)
);
overlay.addEventListener('click', close);

let petsData = [...petsArray];
let fullPetsList = [];

function createPets() {
  fullPetsList = (() => {
    let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = petsData;

      for (let j = newPets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = petsData.splice(randInd, 1)[0];
        newPets.push(randElem);
      }

      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();
  fullPetsList = sortPetsList(fullPetsList);

  createPetsCards(fullPetsList);
}
createPets();

function createPetsCards(list) {
  petsContainer.innerHTML += createElements(list);
}

function createElements(petsList) {
  let str = '';
  for (let i = 0; i < petsList.length; i++) {
    str += `<div class="card" data-id="${petsList[i].id}">
              <img class="card-image" src="${petsList[i].img}" alt="${petsList[i].name}">
              <h4 class="card-title">
              ${petsList[i].name}
              </h4>
              <button class="card-button" type="button">
                Learn more
              </button>
            </div>`;
  }
  return str;
}

function sortPetsList(list) {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;
  list = sortRecursivelyPetsList(list);
  return list;
}

function sortRecursivelyPetsList(list) {
  const length = list.length;
  for (let i = 0; i < length / 6; i++) {
    const stepList = list.slice(i * 6, i * 6 + 6);
    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && ind !== j;
      });
      if (duplicatedItem !== undefined) {
        const ind = i * 6 + j;
        const which8OfList = Math.trunc(ind / 8);
        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);
        sortRecursivelyPetsList(list);
      }
    }
  }

  return list;
}

let currentPage = 0;
let totalPages;

prevPetsPage.addEventListener('click', (e) => {
  calculatePages();
  if (currentPage > 0) {
    currentPage--;
  }
  activateButtons();
  petsContainer.style.top = `calc(0px - ${930 * currentPage}px)`;
  currentPetsPage.innerText = (currentPage + 1).toString();
});

nextPetsPage.addEventListener('click', () => {
  calculatePages();
  if (currentPage < totalPages - 1) {
    currentPage++;
  }
  activateButtons();
  petsContainer.style.top = `calc(0px - ${930 * currentPage}px)`;
  currentPetsPage.innerText = (currentPage + 1).toString();
});

firstPetsPage.addEventListener('click', () => {
  calculatePages();
  currentPage = 0;
  currentPetsPage.innerText = (currentPage + 1).toString();
  petsContainer.style.top = `calc(0px - ${930 * currentPage}px)`;
  activateButtons();
});

lastPetsPage.addEventListener('click', (e) => {
  calculatePages();
  currentPage = totalPages - 1;
  currentPetsPage.innerText = (currentPage + 1).toString();
  petsContainer.style.top = `calc(0px - ${930 * currentPage}px)`;
  activateButtons();
});

function calculatePages() {
  if (document.body.clientWidth > 1279) {
    totalPages = 6;
  } else if (
    document.body.clientWidth > 767 &&
    document.body.clientWidth < 1280
  ) {
    totalPages = 8;
  } else if (document.body.clientWidth < 768) {
    totalPages = 16;
  }
}

function activateButtons() {
  if (
    (currentPage === 5 && document.body.clientWidth > 1279) ||
    (currentPage === 7 &&
      document.body.clientWidth > 767 &&
      document.body.clientWidth < 1280) ||
    (currentPage === 15 && document.body.clientWidth < 768)
  ) {
    firstPetsPage.classList.remove('slider__control-disabled');
    firstPetsPage.classList.add('slider__control-active');
    prevPetsPage.classList.remove('slider__control-disabled');
    prevPetsPage.classList.add('slider__control-active');
    lastPetsPage.classList.add('slider__control-disabled');
    lastPetsPage.classList.remove('slider__control-active');
    nextPetsPage.classList.add('slider__control-disabled');
    nextPetsPage.classList.remove('slider__control-active');
  } else if (currentPage === 0) {
    firstPetsPage.classList.remove('slider__control-active');
    firstPetsPage.classList.add('slider__control-disabled');
    prevPetsPage.classList.remove('slider__control-active');
    prevPetsPage.classList.add('slider__control-disabled');
    lastPetsPage.classList.remove('slider__control-disabled');
    lastPetsPage.classList.add('slider__control-active');
    nextPetsPage.classList.remove('slider__control-disabled');
    nextPetsPage.classList.add('slider__control-active');
  } else if (currentPage > 0) {
    firstPetsPage.classList.add('slider__control-active');
    firstPetsPage.classList.remove('slider__control-disabled');
    prevPetsPage.classList.add('slider__control-active');
    prevPetsPage.classList.remove('slider__control-disabled');
    lastPetsPage.classList.remove('slider__control-disabled');
    lastPetsPage.classList.add('slider__control-active');
    nextPetsPage.classList.remove('slider__control-disabled');
    nextPetsPage.classList.add('slider__control-active');
  }
}

const cards = document.querySelectorAll('.card');
const cardsArray = Array.from(cards);
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__button');
const petInfoContainer = document.querySelector('.popup__wrapper');

function createPopup(id) {
  const petInfo = `<img class="popup__image" src="${
    petsArray[id - 1].img
  }" alt="${petsArray[id - 1].name}">
 <div class="popup__content">
   <h3 class="popup__title">${petsArray[id - 1].name}</h3>
   <h4 class="popup__subtitle">${petsArray[id - 1].type} - ${
    petsArray[id - 1].breed
  }</h4>
   <p class="popup__description">
   ${petsArray[id - 1].description}
   </p>
   <ul class="popup__list">
     <li class="popup__list-item"><strong>Age:</strong> ${
       petsArray[id - 1].age
     }</li>
     <li class="popup__list-item"><strong>Inoculations:</strong> ${
       petsArray[id - 1].inoculations
     }</li>
     <li class="popup__list-item"><strong>Diseases:</strong> ${
       petsArray[id - 1].diseases
     }</li>
     <li class="popup__list-item"><strong>Parasites:</strong> ${
       petsArray[id - 1].parasites
     }</li>
   </ul>
 </div>`;
  petInfoContainer.innerHTML = petInfo;
}

cardsArray.forEach((elem) =>
  elem.addEventListener('click', (event) => {
    let petId = event.target.parentNode.dataset.id || event.target.dataset.id;
    popup.classList.add('popup__show');
    document.body.style.overflow = 'hidden';
    document.body.prepend(overlay);
    createPopup(petId);
  })
);

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

function closePopup() {
  popup.classList.remove('popup__show');
  overlay.remove();
  document.body.style.overflow = 'scroll';
}
