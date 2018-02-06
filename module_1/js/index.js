const topLoverCase = 'qwertyuiop[]\\';
const middleLowerCase = 'asdfghjkl\;\'';
const bottomLowerCase = 'zxcvbnm,.';

const topLength = topLoverCase.length;
const middleLength = middleLowerCase.length;
const bottomLength = bottomLowerCase.length;

const findElementOne = topLoverCase.indexOf('[');
const findElementTwo = topLoverCase.indexOf(']');
                                           
console.log (`topLoverCase = ${topLoverCase} ${topLength} ${topLoverCase.charAt(0)} 
${topLoverCase.charAt(12)} ${findElementOne} ${findElementTwo} 
middleLowerCase = ${middleLowerCase} ${middleLength} ${middleLowerCase.charAt(0) } 
${middleLowerCase.charAt(10)} 
bottomLowerCase = ${bottomLowerCase} ${bottomLength} ${bottomLowerCase.charAt(0)} 
${bottomLowerCase.charAt(8)}`);