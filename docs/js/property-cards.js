import { compareImageNmaes } from "./images-filter"

const catalogList = document.querySelector(`.catalog__list`)

const PropertyClass = {
    INDEPENDENT: `independent`,
    SUPPORT: `support`
}

const PropertyTypesServer = {
    INDEPENDENT: `IndependentLiving`,
    SUPPORT: `SupportAvailable`
}

const PropertyLabel = {
    INDEPENDENT_LIVING: `Independent living`,
    SUPPORT_RESTAURANT: `Restaurant & Support available`
}

const renderPropertyTypes = (title, optionOne, optionTwo) => {

    switch(title) {
        case PropertyTypesServer.INDEPENDENT:
           return optionOne;
    
        case PropertyTypesServer.SUPPORT: 
            return optionTwo;
            
        default: 
            return null;
        
    }
}

export const renderPropertyCardsTempalte = (data, numberOfCards) => {
    return data.slice(0, numberOfCards).map((element) => {
        return `<li class="catalog__item property">
            <a class="property__link" href="/details/${element.id}">
                <img class="property__photo" src="img/${compareImageNmaes(element.title)}.png" width="277" height="227" alt="${element.title}">
                <span class="property__type property__type--${renderPropertyTypes(element.type, PropertyClass.INDEPENDENT, PropertyClass.SUPPORT)}">${renderPropertyTypes(element.type, PropertyLabel.INDEPENDENT_LIVING, PropertyLabel.SUPPORT_RESTAURANT)}</span>
            </a>
            <div class="property__resume">
                <a class="property__title" href="#"><h3 class="title">${element.title}</h3></a>
                <span class="property__address">${element.address}</span>
                <p class="property__information">New Properties for Sale from <strong>£${element.price.toLocaleString()}</strong></p>
                <span class="property__ownership">Shared Ownership Available</span>
            </div>
        </li>`
    })
}
export const renderPropertyCards = (data, numberOfCards) => {
    catalogList.innerHTML = renderPropertyCardsTempalte(data, numberOfCards).join(``)
}
