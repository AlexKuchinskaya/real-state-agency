import { load } from '../public/js/load';
import { renderPropertyCards } from '../public/js/property-cards';
import '/public/style/app.scss';

const showMoreButton = document.querySelector(`.catalog-button`);
const filterInput = document.querySelector(`.filter-form__input`);
let numberToShow = 6;
let propertyyData = [];
let propertyCardsList
const renderPropertyCardsAndButton = (data) => {
    if (propertyCardsList > numberToShow) {
        showMoreButton.style.display = `block`;
    } else {
        showMoreButton.style.display = `none`;
    }
    renderPropertyCards(data, numberToShow);
}
console.log(`propertyyData length`, propertyyData.length)
const getServerAnswerSuccess = (response) => {
    propertyyData = response;
    console.log(`propertyyData`, propertyyData)
    // pinsData = response.map((pin, index) => {
    //   pin.id = `${index}`;
    //   return pin;
    // });
    // window.pin.renderPins(pinsData);
    propertyCardsList = propertyyData.length;
    console.log(`propertyCardsList`, propertyCardsList)
    renderPropertyCardsAndButton(propertyyData);
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
showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault;
    numberToShow = numberToShow + 3;
    renderPropertyCardsAndButton(propertyyData);
})

filterInput.addEventListener(`input`, (evt) => {
    let inputValue = evt.target.value;
    console.log(`inputValue`, inputValue)
})
// var list = $(".list li");
// 
// list.hide();
// if (propertyCardsList > numberToShow) {
//     showMoreButton.classList.add();
// }
// list.slice(0, numToShow).show();