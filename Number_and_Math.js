
//------------------------------------------------------NUMBER FUCNTION ------------------------------------------------------------------------------
let score = 300000
console.log(score)
let number = 100000000
const price = new Number(399.3456)// this is nothing but the spceifieing the type of the veriabel useing new word with the dataType 
score = new String(3000000)
console.log(price) // output = [Number 399.3456]
console.log(score) // output = [string'3000000']
console.log(price.toFixed(2)) // to fixed method is used to fix the number after the decimal it will round of the number in this case we want only 2 digit after dicimal
console.log(price.toPrecision(4)) // to precision is used to conatin the lengthe of the number means if i pass 4 now my number laength will be the 4 only like 399.3 this is precision 
console.log(number.toLocaleString('en-IN'))// this is method is used to conbert normal number into the proper formate and tha parameter is for indin version


// -----------------------------------------------------MATH FUNCTION--------------------------------------------------------------------------------------------------------------------------------------------
console.log(Math) // this is a function used to manipulate with numbers like max-min and random 
console.log(Math.round(price)) // its simplie round of the value if .6 it will take high value and 0.4 it take low vlaue 
console.log(Math.floor(price)) // this function roundoff the number and get the lowest value ex- 34.56 roundof is 34
console.log(Math.ceil(price)) // this function roundoff as above but take the highest value like ex - 34.56 roundof is 35
console.log(Math.max(3,4,0,3,9,4)) // this is used to find the maximum value from the array 
console.log(Math.min(3,4,5,3,2,8))// same as above but here we are geting the minimum number 
console.log((Math.random()*10))  //  random is used to find the random number between 0-1 all the point no and if you want no bigger than 1 multiplied by the 10 
console.log(Math.round((Math.random()*10)))