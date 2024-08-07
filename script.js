'use strict';
let displayFansPhoto = document.querySelector('.openFansButton');
let showFansPhoto = document.querySelector('.retriveThePhoto');
const displayParagraph = document.querySelector('.paragraphButton');
const loveFootballPara = document.querySelector('.loveFootballPara');
const displaylovePara = document.querySelector('.displayParaButton');
console.log(displaylovePara);
const fansPhoto = document.querySelector('.footballFans');

// console.log(fansPhoto);
// displayFansPhoto.addEventListener('click', function () {
//   fansPhoto.classList.add('hidden');
//   displayFansPhoto.classList.add('closeFansButton');
//   displayFansPhoto.classList.remove('openFansButton');
//   displayFansPhoto.textContent = 'show the photo';
//   console.log(displayFansPhoto);
//   displayFansPhoto.addEventListener('click', function () {
//     fansPhoto.classList.remove('hidden');
//     displayFansPhoto.textContent = 'display the photo';
//     displayFansPhoto.classList.add('openFansButton');
//     displayFansPhoto.classList.remove('closeFansButton');
//   });
// });

const displayFansFunc = function () {
  fansPhoto.classList.add('hidden');
  displayFansPhoto.classList.add('hidden');
  showFansPhoto.classList.remove('hidden');
};
const displayParaFunc = function () {
  loveFootballPara.classList.add('hidden');
  displayParagraph.classList.add('hidden');
  displaylovePara.classList.remove('hidden');
};

const retrieveFansFunc = function () {
  fansPhoto.classList.remove('hidden');
  showFansPhoto.classList.add('hidden');
  displayFansPhoto.classList.remove('hidden');
};
displayFansPhoto.addEventListener('click', displayFansFunc);

showFansPhoto.addEventListener('click', retrieveFansFunc);

displayParagraph.addEventListener('click', displayParaFunc);

//Add new arrow elements to the black header of page
const arrowThings = document.querySelector('.arrowThings');
console.log(arrowThings.type);

let observer = new MutationObserver(function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      let addedNode = mutation.addedNodes[0];
      if (addedNode.nodeName.toLowerCase() === 'p') {
        // addedNode.nodeName.toLowerCase().classList.add('elementArrow');
        let newItalicElement = document.createElement('i');

        newItalicElement.textContent = ' ';
        newItalicElement.classList.add('downArrow');

        let textNode = addedNode.firstChild; // الحصول على النص في الفقرة
        addedNode.insertBefore(newItalicElement, textNode);
      }
    }
  }
});
observer.observe(arrowThings, { childList: true });

const addArrowsElements = function (newArrEl) {
  const createArrEl = document.createElement('p');
  createArrEl.classList.add('elementArrow');
  createArrEl.textContent = newArrEl;
  arrowThings.appendChild(createArrEl);
  console.log(arrowThings);
};
addArrowsElements('Balls');

// Show the arrow lists
const elementArrowButton = document.querySelectorAll('.elementArrow');
const teamArrowButton = document.querySelector('.teamsArrow');
const TeamsLists = document.querySelector('.teamsList');
const playerArrowButton = document.querySelector('.playersArrow');
const playersLists = document.querySelector('.playersList');
console.log(typeof teamArrowButton);
console.log(teamArrowButton);

console.log(elementArrowButton);

const addAndHiddenLists = function (theList) {
  theList.classList.toggle('hidden');
};

for (const arrowButton of elementArrowButton) {
  teamArrowButton.addEventListener('click', function () {
    TeamsLists.classList.toggle('hidden');
    playersLists.classList.add('hidden');
    console.log(TeamsLists);
  });
  playerArrowButton.addEventListener('click', function () {
    playersLists.classList.toggle('hidden');
    TeamsLists.classList.add('hidden');
  });
}
