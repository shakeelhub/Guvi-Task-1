// Question 1

// print odd numbers in an Array using arrow function


// var arr =[1,2,3,4,5,6,7,8]
// var result =[];
// var anny = ()=>{
//   for(var i=0;i<arr.length;i++){
//     if (arr[i]%2!=0){
//         result.push(arr[i])

//       }
//   }
//   return result
// }

// console.log("Odd Number is : "+anny(arr))

// Output:

// Odd Number is : 1,3,5,7

// ---------------------------------------------------------------------------------------------------------------------

//Question 2

// b)Convert all the strings to title caps in a string array

// var titleCase =(string)=>{
//     var sentence  =string.toLowerCase().split(" ");
//     for(var i =0; i<sentence.length; i++){
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//       }
//       console.log(sentence.join(" "));
//       return sentence;
//     }     

// titleCase("guvi geek pvt ltd");   


// Output:
// Guvi Geek Pvt Ltd

// ---------------------------------------------------------------------------------------------------------------------

//Question 3

// c)Sum of all numbers in an array

// var arr = [2, 5, 6, 7, 8]
// var sum = 0;
// var funct = () => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }
// console.log("sum numbers:" + funct(sum))


// Output:

// sum numbers: 28

// ---------------------------------------------------------------------------------------------------------------------

//Question 4

// d)Return all the prime numbers in an array

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const getPrimes = (arr) => arr.filter(num => isPrime(num));

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

// const primeNumbers = getPrimes(numbers);
// console.log(primeNumbers);

// // Output:
// [2, 3, 5, 7, 11, 13]

// ---------------------------------------------------------------------------------------------------------------------

//Question 5

// const words = ["level", "hello", "radar", "world", "madam"];

// const getPalindromes = (arr) => arr.filter(word => isPalindrome(word));

// const isPalindrome = (word) => {
//   const reversedWord = word.split('').reverse().join('');
//   return word === reversedWord;
// };

// const palindromeWords = getPalindromes(words);
// console.log(palindromeWords); 

// Output: 
// ["level", "radar", "madam"]

// ---------------------------------------------------------------------------------------------------------------------









