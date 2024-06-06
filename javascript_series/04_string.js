const name = 'brijesh'
const repoCount =50

// console.log(name + repoCount + "value")

// console.log(`Hello my name is ${name} and my repo count ${repoCount}`);

const gameName = new String ('Brijesh')


// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('h'))

const newString = gameName.substring(0, 4)

console.log(newString);

const anotherString = gameName.slice( -7, 4)
console.log(anotherString)

const anotherStringOne = '     brijesh         '

console.log(anotherStringOne)
console.log(anotherStringOne.trim())

const url ='https://vidursoft.com20%nvudnu'
console.log(url.replace('20%' , '-'))
console.log(url.includes('vidursoft'))


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split('.');
console.log(words[3]);