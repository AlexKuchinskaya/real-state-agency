import '/docs/style/app.scss';
import { compareNames } from '../docs/js/filter';
import { load } from '../docs/js/load';
import { renderPropertyCards } from '../docs/js/property-cards';
import { ShowButtonNumbers } from '../docs/js/const';


const showMoreLessButton = document.querySelector(`.catalog-button`);
const filterInput = document.querySelector(`.filter-form__input`);
let propertyLinks = document.querySelectorAll(`.property__link`);
const cardsItemsList = document.querySelector(`.catalog__list`);

let numberToShow = 6;
let propertyyData = [];
let propertyCads;


console.log(`propertyCads`, propertyCads)
const renderShowMoreShowLessButton = (data) => {
    console.log(`numberToShow before`, numberToShow)
    console.log(`propertyCads before`, propertyCads)
    if (data.length > propertyCads || propertyCads === undefined) {
        numberToShow = numberToShow + ShowButtonNumbers.SUMM_TO_ADD;
        propertyCads = numberToShow;
        showMoreLessButton.textContent = `See more`
        if (propertyCads === ShowButtonNumbers.NUMBER_TO_LESS) {
            showMoreLessButton.textContent = `Load less`;    
        }
    
    } else {
        console.log(`hi`)
        numberToShow = numberToShow - ShowButtonNumbers.SUMM_TO_ADD;
        propertyCads = numberToShow + ShowButtonNumbers.SUMM_TO_ADD;
        showMoreLessButton.textContent = `Load less`;
        if (propertyCads === ShowButtonNumbers.NUMBER_TO_MORE) {
            showMoreLessButton.textContent = `See more`;
            
        }
        console.log(`numberToShow else`, numberToShow)
        console.log(`propertyCads`, propertyCads)
    }
  
    console.log(`propertyCads after click`, propertyCads)
    console.log(`numberToShow`, numberToShow)
    renderPropertyCards(data, numberToShow);
}

const renderPropertyCardsAndButton = (data) => {
    if (data.length > numberToShow) {
        showMoreLessButton.style.display = `block`;
    } else {
        showMoreLessButton.style.display = `none`;
    }
    renderPropertyCards(data, numberToShow);
}
const getServerAnswerSuccess = (response) => {
    propertyyData = response;
    console.log(`propertyyData`, propertyyData)
    renderPropertyCardsAndButton(propertyyData);
    propertyLinks = document.querySelectorAll(`.property__link`);
    // if (propertyCardsList > numberToShow) {
    //     showMoreButton.style.display = `block`;
    // } else {
    //     showMoreButton.style.display = `none`;
    // }
    // renderPropertyCards(propertyyData, numberToShow);

  };
const getServerAnswerError = () => {
    console.log(`error`)
}
load(getServerAnswerSuccess, getServerAnswerError);
showMoreLessButton.addEventListener(`click`, (evt) => {
    evt.preventDefault;
    renderShowMoreShowLessButton(propertyyData);
})


filterInput.addEventListener(`input`, (evt) => {
    let inputValue = evt.target.value;
    console.log(`inputValue`, inputValue)
    let propertyyDataFileterd = []
    if (inputValue.length >= 3) {
        console.log(`inputValue 3`)
        propertyyDataFileterd = propertyyData.slice().filter((data) => {
            console.log(`data`, data)
            return compareNames(data.title, inputValue)
        })
        console.log(`propertyyDataFileterd`, propertyyDataFileterd)
        renderPropertyCardsAndButton(propertyyDataFileterd)
        // return newArr;
    } else {
        renderPropertyCardsAndButton(propertyyData)
    }
})


cardsItemsList.addEventListener('click', (evt) => {
    // console.log(`cardsItemsList`, cardsItemsList);
    if (evt.target === cardsItemsList) {
        return;
    } else {
        evt.preventDefault();
    }
}

);

// сделать ссылкой всю карточку
