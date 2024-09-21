let myDate = new Date(); // Date constructor 
console.log(myDate)
console.log(myDate.toDateString()) // Write the date in string 
console.log(myDate.toLocaleDateString())// write the date in dd/mm/yy formate 
console.log(myDate.toJSON())// write date in the use formate yy/mm/dd/ time with mile second
console.log(myDate.toISOString())// as same as above 
console.log(myDate.toLocaleString())// this is use to print the date and time with indian formate dd/mm/yy and then time 
console.log(myDate.toLocaleTimeString()) // this is only printing the time 
const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
console.log (month, day, year)
// [0, 17, 2000] as month are 0-indexed
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
console.log(hour,minutes,seconds)
// [16, 45, 30]
