const catalogSection = document.querySelector(`.catalog`);
export const renderServerErrorMessage = () => {
    let paragraph = document.createElement(`p`);
    paragraph.innerHTML = `unfortunately, server is unavailable. We could load property cards. Please, try later!`
    catalogSection.appendChild(paragraph);
}