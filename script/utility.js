function hideElementById(element){
    const hideSection = document.getElementById(element);
    hideSection.classList.add('hidden');

}
function showElementById(element){
    const showSection =document.getElementById(element);
    showSection.classList.remove('hidden');
}

function getRandomAlphabet(){
    // get or create an alphabet array
    const aString ='abcdefghijklmnopqrstuvwxyz/';
    const alphabets =aString.split('');
// console.log(alphabets);

// get random index between 0-26
const randomNumber = Math.random() * 26;
const index = Math.round(randomNumber);

// index er value er moddhe alphabet dhukabo

const alphabet =alphabets[index];
return alphabet

}
// add inner text
function getInnerText(elementId){
    const currentElement = document.getElementById(elementId);
    const elementText = currentElement.innerText;
    const element = parseInt(elementText);
    return element;
}
function getElementText(elementId){
    const element = document.getElementById(elementId)
const text = element.innerText;
return text
}
// set text
function setInnerText(elementByid, value){
    const element = document.getElementById(elementByid);
    element.innerText = value;
}



function addbackgroundcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}
function removebackgroundcolorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}
