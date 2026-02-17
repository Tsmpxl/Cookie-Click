//KANEI SAVE TA CLICKED TIMES KAI AN KSEKINAS APO THN ARXH EISAI 0.
let buttonClicks = parseInt(localStorage.getItem('buttonClicks')) || 0;

const myButton = document.querySelector('.js-click');
const messageEl = document.querySelector('.js-clicks-count-message');
function updateMessage() {
  messageEl.innerHTML = `You clicked the <img class="cookie-image-message" src="icons/cookie.png" alt="cookie logo"> ${buttonClicks} times!`;
};

function saveToStorage() {
  localStorage.setItem('buttonClicks', buttonClicks)
};

// IT SHOWS THE SAVED CLICKES WHEN YOU GO TO THE PAGE
  updateMessage();

const clickSound = new Audio('sounds/click.mp3');
function clickPlay() {
    clickSound.currentTime = 0.45;
    clickSound.volume = 0.65; 
    clickSound.play();
};


// EVERY CLICK IS PLUS 1 , KATHE CLICK EINAI ENA CLICK
myButton.addEventListener('click', () => {
    buttonClicks++;

    clickPlay();
    // KANEI SAVE TO UPDATED COUNT STO LOCALSTORAGE
    saveToStorage();

    // KAI KANEI UPDATE TO MUNHMA
    updateMessage();
    

});

const autoButtonEl = document.querySelector('.js-auto-cliker');

const buttonToggle = document.querySelector('.js-auto-click-message')

let autoClickInterval = null; 

autoButtonEl.addEventListener('click' , () => {
  if (autoClickInterval === null) {
    buttonToggle.innerHTML = 'Auto clicker is ON'

    autoClickInterval = setInterval(() => {
      buttonClicks++;
      saveToStorage();
      updateMessage();
      clickPlay();
  }, 5000);
  
  } else {
    buttonToggle.innerHTML = 'Auto clicker is OFF';

    clearInterval(autoClickInterval);
    autoClickInterval = null;
  }

});

function saveToStorageMoney() {
  localStorage.setItem('money', money);
}

let money = parseInt(localStorage.getItem('money')) || 0;

const moneyEl = document.querySelector('.js-money-show');

moneyEl.innerHTML = money + ' $';

const conventorEl = document.querySelector('.js-conventor');

function saveToStorageMoney() {
  localStorage.setItem('money', money);
}

//saves the last transaction and 5 clicks = to 1 dolar

function convertToMoney() {
  if (buttonClicks >= 5) {

    const clicksRemoved = Math.floor(buttonClicks / 5) * 5;
    const moneyConverted = clicksRemoved / 5;

    buttonClicks -= clicksRemoved;
    money += moneyConverted;

    saveToStorage();
    saveToStorageMoney();

    // SAVE LAST TRANSACTION
    const lastTransaction = `You converted ${moneyConverted} $ `;
    localStorage.setItem('lastTransaction', lastTransaction);

    updateMessage();
    moneyEl.innerHTML = money + ' $';
    document.querySelector('.js-message-convert-total').innerHTML = lastTransaction;
  }
}

//saves the last transaction 

conventorEl.addEventListener('click', convertToMoney);

const transactionMessageEl = document.querySelector('.js-message-convert-total');

const savedTransaction = localStorage.getItem('lastTransaction');

if (savedTransaction) {
  transactionMessageEl.innerHTML = savedTransaction;
}