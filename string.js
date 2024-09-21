let str = "hello-world"
console.log(str); // this is simply printing the string using the consoole.log 
console.log(`this is my ${str}and concatinating my string `) // this is new mordern way of concatination using the backtick
console.log(str.length) // to find the length of the string 
console.log(str.toUpperCase()) // to convert all text into upper case 
console.log(str.toLowerCase()) // to convert all text into lower case
console.log(str[0]) // to access the latter from string using there index no.and you can't update the str form using this if the no is out of bond it will show the undefiend
console.log(str.charAt(3)) // this is same as the above object but the diffrance is that you can modified the text from using this and avoid the undifiend and show the only empty braket
console.log(str.indexOf('l')) // this function allows to access or the use the words to find thier position in the string 
const newstr = console.log (str.substring(-8,5)) // this function allow to creat new substring using existing string only we have to give the length of the string you want and the last char is not display
const anotherstr = console.log (str.slice(0,5)) // this function same as the above the different is you can use the -number also so it will give you the reverse string 
const trimstr = console.log (str.trim()) // this fuction is used to avide the space from start and end and return the char only 
