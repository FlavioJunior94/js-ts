const {alfabeto} = require('./base');

console.log(alfabeto);

//conjunto [abc]
// negação ^
// [0-9]
console.log(alfabeto.match(/[abc123]+/g));
console.log(alfabeto.match(/[^abc123]/g));
console.log(alfabeto.match(/[0-9]/g));
console.log(alfabeto.match(/[a-z]/g));
console.log(alfabeto.match(/[A-Z0-9]/g));
console.log(alfabeto.match(/[\u00A0-\u00BA]/g));
