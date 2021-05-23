export const compareNames = (comparedElement, newElement) => {
    const dataToLowerCase = comparedElement.toLowerCase();
    return dataToLowerCase.includes(newElement) 
};
