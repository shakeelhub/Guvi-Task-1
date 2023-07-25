// Question 1

 //  using anonymous functions
 // a) print odd numbers in arrays 

//  var my_array =[1,2,3,4,5,6,7,8]
// var my_result =[];
// var calculate_array = function(){
//   for(var i=0;i<my_array.length;i++){
//     if (my_array[i]%2!=0){
  //       my_result.push(my_array[i])

  //     }
//   }
//   return result
// }

// console.log(anny(my_array))


 //  using IIFE functions
 // b) print odd numbers in arrays


// (function() {
// var arr =[1,2,3,4,5,6,7,8]
// var result =[];
// var anny = function(){
//   for(var i=0;i<arr.length;i++){
//     if (arr[i]%2!=0){
//       result.push(arr[i])
//       }
//   }
//   return result
// }

// console.log( "Odd Number is : " +anny(arr))

// })();

// Output:

// [ 1, 3, 5, 7 ]

//-----------------------------------------------------------------------------------------------------------------------

//Question 2

// using annoymous functions
//  b) Convert all the strings to title caps in a string array

// var titleCase =function(string){
   //var sentence  =string.toLowerCase().split(" ");
   // for(var i = 0; i<sentence.length; i++){
    //     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    // }
    //   console.log(sentence.join(" "));
    //   return sentence;
    // }     
    
    // titleCase("guvi geek pvt ltd");   
    
    
    
    // using annoymous functions
    //  b) Convert all the strings to title caps in a string array
    
// (function() {

//   var titleCase =function(string){
//     var sentence  =string.toLowerCase().split(" ");
//     for(var i =0; i<sentence.length; i++){
//       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
//     console.log(sentence.join(" "));
//     return sentence;
//   }     
  
//   titleCase("guvi geek pvt ltd");   
  
  
//   })();

// Output:

// Guvi Geek Pvt Ltd

//-----------------------------------------------------------------------------------------------------------------------

//Question 3

// using anonymous functions
//c) sum all numbers in arrays 
// var arr =[2,5,6,7,8]
// var sum=0;
//  var funct =function(){
  // for (let i =0; i < arr.length;i++){
    //     sum += arr[i]; 
    // }
    //      return sum
    //  }
    //  console.log("sum numbers:"+funct(sum))
    // -----------------------------------------------------
    
    
//  using IIFE functions
//c) sum all numbers in arrays 
// (function() {

//   var arr =[2,5,6,7,8]
//   var sum=0;
//     var funct =function(){
//   for (let i =0; i < arr.length;i++){
//       sum += arr[i]; 
//   }
//         return sum
//     }
      
//     console.log("sum numbers:"+funct(sum))
//       })();

// Output:

// 29

//-----------------------------------------------------------------------------------------------------------------------

//Question 4

// using anonymous functions

// d)Return all the prime numbers in an array

//const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

//const getPrimes = (arr) => arr.filter(num => isPrime(num));

// const isPrime = (num) => {
//   if (num <= 1) return false;
//   if (num <= 3) return true;
  
//   // Exclude even numbers greater than 2
//   if (num % 2 === 0) return false;
  
//   // Check for divisors up to the square root of the number
//   for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     if (num % i === 0) return false;
//   }
  
//   return true;
// };

//  using IIFE functions
// d)Return all the prime numbers in an array

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// const primeNumbers = (function(arr) {
//   const isPrime = (num) => {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
    
//     // Exclude even numbers greater than 2
//     if (num % 2 === 0) return false;
    
//     // Check for divisors up to the square root of the number
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       if (num % i === 0) return false;
//     }
    
//     return true;
//   };

//   return arr.filter(num => isPrime(num));
// })(numbers);

// console.log(primeNumbers);

// Output: 
// [2, 3, 5, 7]

//-----------------------------------------------------------------------------------------------------------------------

//Question 5

// using anonymous functions

// e)Return all the palindromes in an array
// const words = ["level", "hello", "radar", "world", "madam"];

// const getPalindromes = function(arr) { arr.filter(word => isPalindrome(word))};

// const isPalindrome = (word) => {
//   const reversedWord = word.split('').reverse().join('');
//   return word === reversedWord;
// };

// const palindromeWords = getPalindromes(words);
// console.log(palindromeWords);

//  using IIFE functions

// d)Return all the palindromes in an array

// const words = ["level", "hello", "radar", "world", "madam"];

// const palindromeWords = (function(arr) {
//   const isPalindrome = (word) => {
//     const reversedWord = word.split('').reverse().join('');
//     return word === reversedWord;
//   };

//   return arr.filter(word => isPalindrome(word));
// })(words);

// console.log(palindromeWords); 

 // Output: 
//  ["level", "radar", "madam"]

//-----------------------------------------------------------------------------------------------------------------------


//Question 6

// using anonymous functions

// e)Return median of two sorted arrays of the same size.

// const findMedian = function(arr1, arr2) {
//     const mergedArray = [...arr1, ...arr2];
//     mergedArray.sort((a, b) => a - b);
  
//     const middleIndex = Math.floor(mergedArray.length / 2);
    
//     if (mergedArray.length % 2 === 0) {
//       // If the merged array has an even number of elements, return the average of the two middle elements
//       return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
//     } else {
//       // If the merged array has an odd number of elements, return the middle element
//       return mergedArray[middleIndex];
//     }
//   };
  
//   // Example usage:
//   const arr1 = [1, 3, 5];
//   const arr2 = [2, 4, 6];
//   const median = findMedian(arr1, arr2);
//   console.log(median); // Output: 3.5

// using IIFE functions

// e)Return median of two sorted arrays of the same size.

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];

// const median = (function(arr1, arr2) {
//   const mergedArray = [...arr1, ...arr2];
//   mergedArray.sort((a, b) => a - b);

//   const middleIndex = Math.floor(mergedArray.length / 2);
  
//   if (mergedArray.length % 2 === 0) {
//     // If the merged array has an even number of elements, return the average of the two middle elements
//     return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
//   } else {
//     // If the merged array has an odd number of elements, return the middle element
//     return mergedArray[middleIndex];
//   }
// })(arr1, arr2);

// console.log(median);

// Output: 
// 3.5

//-----------------------------------------------------------------------------------------------------------------------

//Question 7

// using annoymous function 

// g) Remove duplicates from an array

    //   var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
      
    //   var removeDuplicates= function (arr){
    //   return arr.filter((item,
    //   index) => arr.indexOf(item) === index);
    //   }
      
    //   console.log(removeDuplicates(arr));
      
    

// using IIFE function

// g)  Remove duplicates from an array

// (function() {

    //   var arr = ["apple", "mango", "apple",
    //   "orange", "mango", "mango"];
      
    //   var removeDuplicates= (arr) => {
    //   return arr.filter((item,
    //   index) => arr.indexOf(item) === index);
    //   }
      
    //   console.log(removeDuplicates(arr));
      
      
    //       })();

// Output: 
// ['apple','mango','orange']
    
//------------------------------------------------------------------------------------------------------------------   

 //Question 8

// using annoymous function 

// h) Rotate an array by k times


// var annoy = function(nums){
  
//   var k = nums.length-1;
//   for(var i =0; i<k;i++){
//     nums.unshift(nums.pop())
//   }
//   return nums
// }

// console.log(annoy([1,2,3,4,5]))


// using IIFE function
// h) Rotate an array by k times

    // (function() {

    //   var annoy = function(nums){
      
    //     var k = nums.length-1;
    //     for(var i =0; i<k;i++){
    //       nums.unshift(nums.pop())
    //     }
    //     return nums
    //   }
    //     console.log(annoy([1,2,3,4,5]))
      
    //       })();

    // Output:

    // [ 2, 3, 4, 5, 1 ]
 //------------------------------------------------------------------------------------------------------------------------   
      