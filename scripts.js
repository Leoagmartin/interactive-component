

const elements = document.querySelectorAll('.elements');
const btnSubmit = document.getElementById('button-submit');
const btnGoBack = document.getElementById('btn-go-back');
const mainWindow = document.getElementById('main');
const thankYouWindow = document.getElementById('thank-you-window');
let elementSelected = document.getElementById('number-selected');
let number = 0;



const cleanClass = () => {
    elements.forEach( (e) => {
        e.classList.remove('selected');
    })
}


elements.forEach(e => {
    e.addEventListener('click', () => {
        if(number !== 0) cleanClass();
        number = parseInt(e.innerText);
        e.classList.add('selected');

           })
});

btnSubmit.addEventListener('click', () => {
    
    if(number !== 0){
        mainWindow.classList.add('hidden');
        thankYouWindow.classList.remove('hidden');
        elementSelected.textContent = number;
        cleanClass();
        number = 0;
    }
    else{
        alert("You need to select a option");
    }
});

btnGoBack.addEventListener('click', () => {
    mainWindow.classList.remove('hidden');
    thankYouWindow.classList.add('hidden');
});

