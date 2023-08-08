/*
-------------------
 Basic Problem
-------------------
 */

// problem no: 1;

// function isInteger(number){
//   if(typeof number !== 'number'){
//     return 'Please provide a number';
//   }
//   if(number % 1 === 0){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(isInteger(2));


// problem no: 2;

// approach 1
// function isJavaScriptFile(fileName){
//   if(typeof fileName !== 'string'){
//     return 'Please provide me a valid file name (string)';
//   }
//   if(fileName.toLowerCase().endsWith('.js')){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isJavaScriptFile('index.js'));

// shorthand method
// function isJavaScriptFile(fileName){
//   if(typeof fileName !== 'string'){
//     return 'Please provide me a valid file name (string)';
//   }
//   else{
//     return fileName.toLowerCase().endsWith(".js");
//   }
// }
// console.log(isJavaScriptFile('index.js'));

// approach 2

// function isJavaScriptFile(fileName){
//   if(typeof fileName !== 'string'){
//     return 'Please provide me a valid file name (string)';
//   }
//   else{
//     const arr = fileName.split('.');
//     const lastElement = arr.pop();
//     return lastElement.toLowerCase() === 'js';
//   }
// }
// console.log(isJavaScriptFile('index.js'));


// problem no: 3;

// function mindGame(number){
//   if(typeof number !== 'number'){
//     return 'please provide a number';
//   }else if(number <= 0){
//     return 'please provide a positive number';
//   }else{
//     const result = (((number*3)+10)/2)-5;
//     return result;
//   }
// }
// console.log(mindGame(5));

// function mindGame(number){
//   if(typeof number !== 'number' || number <= 0){
//     return 'please provide a positive number';
//   }else{
//     const result = (((number*3)+10)/2)-5;
//     return result;
//   }
// }
// console.log(mindGame(5));


// problem no: 4;

// function isLGSeven(number){
//   if(typeof number !== 'number'){
//     return 'Please provide a number';
//   }else{
//     const differ = number - 7;
//     if(differ < 7){
//       return differ;
//     }
//     else{
//       return number * 2;
//     }
//   }
// }
// console.log(isLGSeven(15));



/*
--------------------
Moderate Problem
--------------------
*/

// Problem no: 1

// function findingBadData(numbers){
//   if(!Array.isArray(numbers)){
//     return 'Please provide me an array of number.';
//   }else{
//     let badData = 0;
//     for (const item of numbers) {
//       if(typeof item !== 'number'){
//         return 'please provide me a number.';
//       }else{
//         if(item < 0){
//           badData++;
//         }
//       }
//     }
//     return badData;
//   }
// }
// const arr = [1,-7,-5,2,-9,6];
// console.log(findingBadData(arr));



// problem no: 2;

// function gemsToDiamond(x,y,z){
//   if(typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'){
//     return 'Please provide me a valid number input.';
//   }else if(x < 0 || y < 0 || z < 0){
//     return 'Please provide me all positive number.';
//   }else if(x%1 !== 0 || y%1 !== 1 || z%1 !== 0){
//     return "please provide me an all integer number";
//   }else{
//     const frnd1 = 21;
//     const frnd2 = 32;
//     const frnd3 = 43;

//     const total = (x * frnd1) + (y * frnd2) + (z * frnd3);
//     if(total > 2000){
//       return total - 2000;
//     }else{
//       return total;
//     }
//   }
// }
// console.log(gemsToDiamond(100,5,1));



// problem no: 3;

// function printDetails(person){
//   if(typeof person !== 'object'){
//     return 'please provide me a valid object.';
//   }else{
//     const name = person.name || 'nai';
//     const age = person.age || 'nai';
//     const email = person.email || 'nai';
//     const bou = person.bou || 'nai';

//     return 'amar nam '+ name+', amar boyos '+age+', amar email '+email+', amar bou '+bou+'.';
//   }
// }
// const obj = {
//   name: 'zahurul',
//   age: 23,
//   email: 'zahurul100@gmail.com'
// }
// console.log(printDetails(obj));




/*
----------------------
advance problem
----------------------
*/

// problem no: 1;

// function isValidPhotoName(photoName, imageExtensions){
//   if(typeof photoName !== 'string' || !Array.isArray(imageExtensions)){
//     return 'please provide valid inputs.';
//   }else{
//     for(let item of imageExtensions){
//       if(photoName.toLowerCase().endsWith(item.toLowerCase())){
//         return true;
//       }
//     }
//     return false;
//   }
// }

// const photo = 'image.jpg';
// const extensions = ['.jpg', '.JPEG', '.png', 'gif', 'ico'];
// console.log(isValidPhotoName(photo,extensions)); 


// problem no: 2;

// function findPrimeNumbers(arr){
//   if(!Array.isArray(arr)){
//     return 'please provide me an array of numbers.';
//   }else{
//     let primes = [];
//     for (const item of arr) {
//       if(item > 1){
//         let isPrime = true;
//         for(let i = 2; i< item; i++){
//           if(item % i === 0){
//             isPrime = false;
//             break;
//           }
//         }
//         if(isPrime === true){
//           primes.push(item);
//         }
//       }
//     }
//     return primes;
//   }
// }

// const arr = [4,7,8,11,9,2,10];
// console.log(findPrimeNumbers(arr));


// problem no: 3;

// recursion function

// function sumOfN(n){
//   if(n === 1){
//     return 1;
//   }else {
//     return n + sumOfN(n-1);
//   }
// }
// const n = 5;
// console.log(sumOfN(n));
