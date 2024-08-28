const accountId = 24
let accountEmail = "rupes@gmail.com"
var accountPassowrd = "3455"
console.log("Before Update")
console.table([accountId,accountEmail,accountPassowrd])
// accountId = 34  (you can't update the const keyword after decliration)
accountEmail=" rj@gmail.com"
accountPassowrd = "3422222"
console.log("After Update")
console.table([accountId,accountEmail,accountPassowrd])

/*
In javaScript we have three ways  to write the veriabls let,const,var 
the differance between these three keywords is that the scop of the code and the 
update for example let and const having block scope and the var having global scope means 
if you want to update tha var you can update any where you want in the code 
because of this we are facing to many issues for updating the code but in let key word
you can update but you can't redefined the veriable and const you can't  update after 
decliration 
*/