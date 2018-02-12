const keyboardString = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let arrayString = [[],[],[],];

function pushToArray (index, array, number) {
    array[index].push(number)
}

function addKeyboardLayout(alphabet) {    
    const keyboard = alphabet.split("");
    console.log(keyboard);
    for (let i = 0; i < keyboard.length; i++) {
        if ( i <= 11){
            pushToArray(0, arrayString, keyboard[i]);
        }  
        else if (i > 11 && i < 23) {
            pushToArray(1, arrayString, keyboard[i]);
        }
        else {
            pushToArray(2, arrayString, keyboard[i]);
        }
    }
}

function getRandCharInRow(rowNumber) {
    const tempNumber = parseInt(Math.random() * (arrayString[rowNumber].length - 0) + 0);
    console.log(arrayString[rowNumber][tempNumber]);
}

function getRandCharInAlph() {
    const tempNumber = parseInt(Math.random() * (3 - 0) + 0);
    const tempNumberTwo = parseInt(Math.random() * (arrayString[tempNumber].length - 0) + 0);
    console.log(arrayString[tempNumber][tempNumberTwo]);
}

addKeyboardLayout(keyboardString);
console.log(arrayString);
getRandCharInRow(2);
getRandCharInAlph();



