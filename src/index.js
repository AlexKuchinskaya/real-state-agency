import { load } from '../public/js/load';
import { renderPropertyCards } from '../public/js/property-cards';
import '/public/style/app.scss';
console.log('Hello world')

const getServerAnswerSuccess = (response) => {
    let propertyyData = response;
    console.log(`propertyyData`, propertyyData)
    // pinsData = response.map((pin, index) => {
    //   pin.id = `${index}`;
    //   return pin;
    // });
    // window.pin.renderPins(pinsData);
    renderPropertyCards(propertyyData);
  };
const getServerAnswerError = () => {
    cpnsole.log(`error`)
}
load(getServerAnswerSuccess, getServerAnswerError);