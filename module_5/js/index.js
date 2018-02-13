let wichLang = prompt('en-0, ru-1, ua-2', );
const keyboard = {
    layouts: {
        en: {
            topRow: ['qwertyuiop[]'],
            middleRow: ['asdfghjkl;\''],
            bottomRow: ['zxcvbnm,./']
        },
        ru: {
            topRow: ['йцукенгшщзхъ'],
            middleRow: ['фывапролджэ'],
            bottomRow: ['ячсмитьбю/']
        },
        ua: {
            topRow: ['йцукенгшщзхъ'],
            middleRow: ['фывапролджэ'],
            bottomRow: ['ячсмитьбю/']
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};
while (wichLang < 0 || wichLang > 2) {
    alert('Недоступный язык');
    wichLang = prompt('en-0, ru-1, ua-2', );
}
wichLang = parseInt(wichLang);

if (wichLang == 0) {
    keyboard.currentLang = 'en';
} else if (wichLang == 1) {
    keyboard.currentLang = 'ru';
} else {
    keyboard.currentLang = 'ua';
}


function getRandString(wichLang) {
    const tempNumber = parseInt(Math.random() * (3 - 0) + 0);

    if (tempNumber == 0 && wichLang == 0) {
        console.log(keyboard.layouts.en.topRow)
    } else if (tempNumber == 1 && wichLang == 0) {
        console.log(keyboard.layouts.en.middleRow)
    } else if (tempNumber == 2 && wichLang == 0) {
        console.log(keyboard.layouts.en.bottomRow)
    } else if (tempNumber == 0 && wichLang == 1) {
        console.log(keyboard.layouts.ru.topRow)
    } else if (tempNumber == 1 && wichLang == 1) {
        console.log(keyboard.layouts.ru.middleRow)
    } else if (tempNumber == 2 && wichLang == 1) {
        console.log(keyboard.layouts.ru.bottomRow)
    } else if (tempNumber == 0 && wichLang == 2) {
        console.log(keyboard.layouts.ua.topRow)
    } else if (tempNumber == 1 && wichLang == 2) {
        console.log(keyboard.layouts.ua.middleRow)
    } else if (tempNumber == 2 && wichLang == 2) {
        console.log(keyboard.layouts.ua.bottomRow)
    }
}

console.log(keyboard.currentLang)
getRandString(wichLang);
