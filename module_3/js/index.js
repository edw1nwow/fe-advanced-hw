//const firstString = ['q','w','e','r','t', 'y','u','i', 'o','p','[',']','\\'];
//const secondString = ['a','s','d','f','g','h','j','k','l',';','\''];
//const thirdString = ['z','x','c','v','b','n','m',',','.','/'];
//const keyboard = [firstString, secondString, thirdString];
//let keyboard = [['qwertyuiop[]\\'],['asdfghjkl;\''],['zxcvbnm/']];
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard;
let firstWord;
let secondWord;
let thirdWord;

keyboard = alphabet.split("");
firstWord = keyboard[17]+keyboard[2]+keyboard[20]+keyboard[20]+keyboard[8];
secondWord = keyboard[18] + keyboard[12] + keyboard[26] + keyboard[12] + keyboard[13] + keyboard[25] + keyboard[3] + keyboard[7] + keyboard[9] + keyboard[4];
thirdWord = keyboard[4] + keyboard[3] + keyboard[12] + keyboard[7] + keyboard[28] + keyboard[2] + keyboard[3];

console.log(keyboard);
console.log(firstWord);
console.log(secondWord);
console.log(thirdWord);
