import '../docs/style/app.scss';
import { compareNames } from '../docs/js/filter';
import { load } from '../docs/js/load';
import { renderPropertyCards } from '../docs/js/property-cards';
import { NUMBER_OF_SYMBOLS_INPUT, ShowButtonNumbers, ShowButtonContent } from '../docs/js/const';
import { renderServerErrorMessage } from '../docs/js/server-error';


const showMoreLessButton = document.querySelector(`.catalog-button`);
const filterInput = document.querySelector(`.filter-form__input`);
let propertyLinks = document.querySelectorAll(`.property__link`);
const cardsItemsList = document.querySelector(`.catalog__list`);

let numberToShow = 6;
let propertyyData = [];
let propertyCads;


const renderShowMoreShowLessButton = (data) => {
    if (data.length > propertyCads || propertyCads === undefined) {
        numberToShow = numberToShow + ShowButtonNumbers.SUMM_TO_ADD;
        propertyCads = numberToShow;
        showMoreLessButton.textContent = ShowButtonContent.SHOW_MORE;
        if (propertyCads === ShowButtonNumbers.NUMBER_TO_LESS) {
            showMoreLessButton.textContent = ShowButtonContent.LOAD_LESS;
        }
    
    } else {
        numberToShow = numberToShow - ShowButtonNumbers.SUMM_TO_ADD;
        propertyCads = numberToShow + ShowButtonNumbers.SUMM_TO_ADD;
        showMoreLessButton.textContent = ShowButtonContent.LOAD_LESS;
        if (propertyCads === ShowButtonNumbers.NUMBER_TO_MORE) {
            showMoreLessButton.textContent = ShowButtonContent.SHOW_MORE;
            
        }
    }
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
    renderPropertyCardsAndButton(propertyyData);
    propertyLinks = document.querySelectorAll(`.property__link`);
};

const getServerAnswerError = () => {
    renderServerErrorMessage();
}

load(getServerAnswerSuccess, getServerAnswerError);

showMoreLessButton.addEventListener(`click`, (evt) => {
    evt.preventDefault;
    renderShowMoreShowLessButton(propertyyData);
})


filterInput.addEventListener(`input`, (evt) => {
    let inputValue = evt.target.value;
    let propertyyDataFileterd = []
    if (inputValue.length >= NUMBER_OF_SYMBOLS_INPUT) {
        propertyyDataFileterd = propertyyData.slice().filter((data) => {
            return compareNames(data.title, inputValue)
        })
        renderPropertyCardsAndButton(propertyyDataFileterd)
    } else {
        renderPropertyCardsAndButton(propertyyData)
    }
})


cardsItemsList.addEventListener('click', (evt) => {
    if (evt.target === cardsItemsList) {
        return;
    } else {
        evt.preventDefault();
    }
});
