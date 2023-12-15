
const messageDate = document.querySelector('#messageDate');
const resultInput = document.querySelector('#result')
const button = document.querySelector('#button_calculate'); 


const colculeteDaysPassed = () => {
    const massegeDateStr = messageDate.value;
    const massegeTimestamp = Date.parse(massegeDateStr);
    const currentTimestemp = Date.now();
    const timeDifferenc = massegeTimestamp - currentTimestemp;
    const datesPassed = Math.floor(timeDifferenc / (1000 * 60 * 60 * 24));
    resultInput.textContent = `Passed ${datesPassed} days`;
};

button.addEventListener('click', colculeteDaysPassed);

