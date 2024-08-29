/* 
 In java Script we have 8 data type and divided into  two types 
 1.premative data type 
 2.non-premative data type 
 -----------------------------------------------------------------------------------------------
 1.premative data type 
  we have 7 types of preamative data type 
  1.string (nothing but the words or the latter )
  2.null (null is not initalize and the type of null is object)
  3.undefiend (undefined is nothing but the not defined)
  4.BigInt (BigInt is used to represent long number )
  5.boolean(true and false)
  6.number(the number is range of 0 to 2power of 53)
  7.symbol(sybole is used full for the unique values)
  -----------------------------------------------------------------------------------------------
2.non-premative data type 
 IN non-premative data type we have three types of 
 1.object 
 2.function
 3.array
 this is non-premative data types in the java Script 
 ------------------------------------------------------------------------------------------------------
Memory mangment in the java script 
As  we saw the data types in the javaScript and they are different from one main compnent like memory managment 
in java script or in computer  we have two types to store data 
1.Heap memory 
2.stack memory 
  1.Heap memory 
  All non-prmative data type use the heap memory type for storing the memeory its nothing but the we have one continer and 
  all the values stored in that container and whatever changesh happens its happens in the orignal memory  
 for example - 
 let userOne = {
  name: "Rupesh",
  age: 23,
  eamil: "rupesh@gamil.com",
};
let userTwo = userOne;
userTwo.name = "Rahul";
console.log(userOne);
 
 output - Rahul
          23
          rupesh@gamil.com
the changes happend in the orignal memory and its permantly changed so this is the heap memory in heap memory they 
actuly giving the the orignal memory refrace so whatever the changes happend its happend in the orignal memory and 
its prmanant changes.
2.stack memory 
 All prmative data types use the stack memory its nothing but the when you give the referance to another verible its 
 show or provide the duplicate of that veriabel so whatever changes you do it will not happen in to the orignal veriable 
 the changes happens in to the duplicate 
 for Example -
   let userOne = 3
   let userTwo = userOne 
   userTwo = 23
   console.log(userOne)
   console.log(userTwo)
   output -
            3
            23
   now what happend the changes actualy happens into the duplicate memory and orignal veriable value is ramain tha same 
   so this tha stack memory 
*/
"use strict"; // treat or write the all code with newer version of the javaScript.
let Number = 34;
let name = "string ";
let boolean = true / false;
let undefiend = undefined;
let Null = null;
let symbol = "&";
