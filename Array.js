const myArr = [0,1,2,3,4,5]
console.log(myArr)
console.log(myArr[3]) // printing the indvidual elements using their index no
myArr.push(3)
console.log(myArr,"push (3)")// adding the new element using push method at last position 
myArr.pop()
console.log(myArr,"pop")// removing the element from the last index which is 3
myArr.unshift(7)
console.log(myArr,"unshift(7)") // adding the element at the 0 index and shifthing allthe elements index
myArr.shift()
console.log(myArr,"shift")//same like pop but the removed element from 0 index 
console.log(myArr.slice(1,4))//printing the elem3nt from index 1 to 3 because last is not include which is 4 without changing in actual array
console.log(myArr.splice(1,4))// this method actually take out the portion of the 1 to 4 of actual array and chnaged the orignal array 
console.log(myArr) // output = 0,5 after using splice method
console.log(myArr.join)// changing the type of arry from Numbers to string 
const newAarry = ["rupesh","bhai","Rj","jadhav"]
const concatArry = myArr.concat(newAarry)
console.log(concatArry)
const oldArray= [102,103,104,105,106]
const spradeArry = [...myArr,...concatArry,...oldArray]
console.log(spradeArry)
console.log(Array.isArray("Rupesh"))
console.log(Array.from("Rupesh"))
let first = 100
let second =200
let third = 300
const ofArry= Array.of(first,second,third)
console.log(ofArry)

