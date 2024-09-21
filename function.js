// function is nothing but the block of code which we want to repeat agin and again for execution to avoide over writing the 
// there are two wayas to write the function like with the paramerers and another is wihtout parameter 
function func1() {
    console.log("this function is without parameter ")
}
func1()
function func2(num1, num2) {
    console.log(num1 + num2)
}
func2(2, 4)
// adding object in the function and first create function with the username and price 
const shop = {
    userName: "Rupesh",
    price: 35
}
// creating function which is capable to taking object  username and price 

function obj(anyObject) {
    console.log(`Hello ${anyObject.userName} and your product price is ${anyObject.price}`)
}

//calling the function with shop object parameter 
obj(shop)
//lets see the arrow function how its work and why its important the differance between arrow and normal function is simpliear syntax and scop in arrow function u can't use this key word and you can write the code with or without curly braices and its is more useful for loops 
const arrowFunction = () => {
    console.log("this is the simple way to write the arrow function ")
}
const secondArrow = () => (console.log("this is the another way to write the arrow function in the single row without curly braices"))
arrowFunction();
secondArrow();
// now lets see the imediate invoke function expression this function is used to execuate the function as soon as code run for that we use the double braises ()() first one is represent the expression and second one is for execution 
( ()=>{
    console.log(`this is IIFE function`)})();
    (function IIFE () {
        console.log("this is named IIFE function")
    })()