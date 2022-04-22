const burgerIcon = document.querySelector('.burger__menu');
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

overlay.addEventListener('click', close);

let pets = [];
let fullPetsList = [];

async function getPets() {
  const res = await fetch('../../pets.json');
  const petsData = await res.json();
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

getPets();

function createPetsCards(list) {
  petsContainer.innerHTML += createElements(list);
}

function createElements(petsList) {
  let str = '';
  for (let i = 0; i < petsList.length; i++) {
    str += `<div class="card">
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
