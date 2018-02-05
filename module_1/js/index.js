const a = 'qwertyuiop[]\\';
const b = 'asdfghjkl\;\'';
const c = 'zxcvbnm,.';

const d = a.length;
const e = b.length;
const f = c.length;

const findOne = a.indexOf('[');
const findTwo = a.indexOf(']');
                                           
console.log ('a = ' + a + ' ' + d + ' ' + a.charAt(0) + a.charAt(12) + ' '+ findOne + ' ' + findTwo +' b = ' + b + ' ' + e + ' ' + b.charAt(0) + b.charAt(10) + ' c = ' + c + ' ' + f + ' ' + c.charAt(0) + c.charAt(8));
