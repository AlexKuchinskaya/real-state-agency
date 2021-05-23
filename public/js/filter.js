export const compareNames = (comparedElement, newElement) => {
    const dataToLowerCase = comparedElement.toLowerCase();
    console.log(`dataToLowerCase`, dataToLowerCase)
    console.log(`newElement`, newElement)
    return dataToLowerCase.includes(newElement) 
};
