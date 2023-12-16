//забираем input из HTML
const messageDate = document.querySelector('#messageDate');
//забираем p из HTML
const resultP = document.querySelector('#result');
//забираем button из HTML
const button = document.querySelector('#button_calculate'); 


const colculeteDaysPassed = () => {
    // забираем значение дату из input
    const massegeDateStr = messageDate.value;
    // преобразуем в милисекунды
    const massegeTimestamp = Date.parse(massegeDateStr);
    // получаем текущую дату в милисекундах
    const currentTimestemp = Date.now();
    // вычисляем разницу между выброной и текущей
    const timeDifferenc = massegeTimestamp - currentTimestemp;
    // переводим в дни и округляем
    const datesPassed = Math.floor(timeDifferenc / (1000 * 60 * 60 * 24));
    // передаём результат переменной для вывода на экран
    resultP.textContent = `Passed ${datesPassed} days`;
};

button.addEventListener('click', colculeteDaysPassed);

