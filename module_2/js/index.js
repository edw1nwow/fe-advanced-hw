const numberPeople = prompt('Количество людей', 5);
let sharm = 15;
let hurgada = 25;
let taba = 6;
let check;
let tempPlaces;

if (parseInt(numberPeople) != numberPeople) {
    alert('Введите целое число');
} else {
    alert('Вас: ' + numberPeople + ' человек');
}
if (numberPeople > 25) {
    alert('Мест нет!')
} else if (numberPeople > 15) {
    check = confirm('Для вас есть вариант поехать в hurgada');
    if (check != true) {
        alert('Приходите позже =(');
    } else {
        tempPlaces = hurgada - numberPeople;
        alert('Спасибо за выбор! Осталось мест: ' + tempPlaces);
    }
} else if (numberPeople > 5) {
    alert('Для вас есть два варианта sharm и hurgada')
    check = confirm('Первый вариант sharm')
    if (check != true) {
        check = confirm('Второй вариант hurgada');
        if (check != true) {
            alert('Спасибо что выбрали нашу службу');
        } else {
            tempPlaces = hurgada - numberPeople;
            alert('Спасибо за выбор! Осталось мест: ' + tempPlaces);
        }
    } else {
        tempPlaces = sharm - numberPeople;
        alert('Спасибо за выбор! Осталось мест: ' + tempPlaces);
    }
} else if (numberPeople > 0) {
    alert('Для вас есть три варианта')
    check = confirm('Первый вариант taba')
    if (check != true) {
        check = confirm('Второй вариант sharm')
        if (check != true) {
            check = confirm('Третий вариант hurgada');
            if (check != true){
              alert('Спасибо что выбрали нашу службу');  
            } else {
             tempPlaces = hurgada - numberPeople;
            alert('Спасибо за выбор! Осталось мест: ' + tempPlaces);   
            }
        } else {
            tempPlaces = sharm - numberPeople;
            alert('Спасибо за выбор! Осталось мест: ' + tempPlaces);
        } 
    } else {
        tempPlaces = taba - numberPeople;
            alert('Спасибо за выбор! Осталось мест: ' + tempPlaces);
    }
}
