///////////Basic String/////////


/* Write a function that returns the reverse of a given string.

Input: Write a function that returns the reverse of a given string.

Input: “abcde”
Output: “edcba”
Output: “edcba” */ 

// function reverse(input){
//   var reverseArray = []
//   i = input.length - 1 
//   var length = input.length

//   while(length > 0){
//     reverseArray.push(input[i])
//     i -= 1 
//     length -= 1 
//   }
//   console.log(reverseArray)
// };
// console.log(reverse('abcde'));
// -------------------
/*Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

Input: “i hate $ but i love money i know i know im crazy”
Output: true

Input: “abcdefghijklmnopqrstuvwxyz”
Output: false */

// function showMeTheMoney(input){
// // i = 0 
//   input.forEach(function (item));{
//     if(item === "$"){
//       console.log("true");
//     }else(console.log("false");)
//   }
// }

// if(input.forEach(item){
  
// }){

// }
// showMeTheMoney('i hate $ but i love money i know i know im crazy');
// showMeTheMoney('abcdefghijklmnopqrstuvwxyz')
// const str = 'banana';

// for (let c of str) {
//   process(c)
// }

// -----------FIRST DUPLICATE CHARACTER-----------

// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

// function duplicateCharacter(string){
//   index = 0 
//   while(index < string.length){
//     index2 = index + 1
//     if (string[index] === string[index2]){
//     return string[index];
//   }
//     else{
//       index += 1;
//     }
//   }
// };
// console.log(duplicateCharacter('abcdefghhijkkloooop'))

// -----------Palindrome-----------
// Given a string, write a function that returns true if it is a palindrome, and false if it is not. (A palindrome is a word that reads the same both forward and backward.)

// Input: “racecar”
// Output: true

// Input: “baloney”
// Output: false

// function palindrome(string){
//   index = 0;
//   reverse = string.length - 1;
//   // console.log(string[index])
//   // console.log(string[reverse])
//   while(index <= reverse){
//     if(string[index] === string[reverse]){
//       index += 1 ;
//       reverse -= 1;
//     }
//     else {
//       return 'false'
//     };
//   };
//   return 'true'
// };
// console.log(palindrome('racecar'))
// console.log(palindrome('baloney'))

// racecar 
// 0123456
// 0123456

// ----------HAMMING------

// Given two strings of equal length, write a function that returns the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.    

// Input: "ABCDEFG", "ABCDEFG",
// Output: 0

// function mismatch(str1,str2){
//   noMatch = 0 
//   let i = 0
//   let i2 = 1 

//   while(i < str1.length){
//     if(str1.substring(i,i2) !== str2.substring(i,i2)){
//       noMatch = noMatch + 1
//     } 
//     i = i + 1 
//     i2 = i2 + 1
//   }
//   console.log(noMatch)
// }
// mismatch('ABCDEFG', 'ABCXEOG')
// mismatch('ABCDEFG', 'ABCDEFG')

// -------------------REVERSE WORDS----------------------
// Given a string of words, write a function that returns a new string that contains the words in reverse order.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”


// function reverseString(string){
  
//   let sliceAndDice = string.split(" ").reverse()
//   console.log(sliceAndDice);
//   //split takes a string and splits it at whatever point you enter as the param. you split by ',', letters, number or spaces. In this instance it was split at the spaces. A param is required. The split will be an array
//   //.reverse will reverse an arrays order. 

//   let reverse = sliceAndDice.join(" ")
//   // .join  method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
//   console.log(reverse)
    
// }
// reverseString('popcorn is so cool isn’t it yeah i thought so')

// ----------------PRIMES-------------------
// Write a function that returns whether a given number is a prime number.

// function primeOrNa(n){
//   if(n % 2 !== 0){
//     console.log('Prime Number');
//   }else{
//     console.log('Even Number');
//   }
// }
// primeOrNa(99)
// primeOrNa(12)

// -----------------FIZZBUZZ----------------------
// Write a function that prints out every number from 1 to N, with the following exceptions:

// If the number is divisible by 3, print out "FIZZ".
// If the number is divisible by 5, print out "BUZZ".
// If the number is divisible by both 3 and 5, print out "FIZZBUZZ".

// function fizzBuzz(n){
//   if(n % 3 === 0 && n % 5 === 0){
//     console.log('FizzBuzz');
//   }else if(n % 3 === 0){
//     console.log('Fizz');
//   }else if(n % 5 === 0){
//     console.log('Buzz')
//   }else{
//     console.log('Not a fizz or buzz located. Try again.'); 
//   }
// }

// fizzBuzz(15)
// fizzBuzz(3)
// fizzBuzz(5)
// fizzBuzz(7)

// ------------------Fibonacci Numbers-------------------------
// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

// function fibonacciNumbers(n)
// {
//   let i1 = 0 
//   let i2 = 1 
//   let fibArray = [0,1]
  
//   while(fibArray.length < n)
//   {
//     fibArray.push(fibArray[i1] + fibArray[i2])
//     i1 += 1
//     i2 += 1
//   }
//   return fibArray.pop()
// }
// console.log(fibonacciNumbers(9))

// -----------------------------------LEAP YEAR ---------------------------------------
// Given a year, report if it is a leap year.

// The tricky thing here is that a leap year in the Gregorian calendar occurs:

// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

// If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.

// function leapYearFinder(year){

//   if(year % 4 === 0)
//   {
//     if(year % 100 === 0)
//     {
//       if(year % 400 === 0)
//       {
//         console.log('Leap year alert')
//       }
//       else 
//       {
//     console.log('Not a leap year. Try again next year!')
//       }
//     }
//     else
//     {
//       console.log('Leap year alert')
//     }
//   }
//   else
//   {
//     console.log('Not a leap year. Try again next year!')
//   }
// }

// leapYearFinder(1997) //no
// leapYearFinder(1996)  //yes
// leapYearFinder(1900) // no
// leapYearFinder(2000) //yes 

// ----------------------------Multiples of 3 & 5 ---------------------------------
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// function multiples(n){

// let count = 1 
// let sum = 0 

//   while(count < n){
//     if (count % 3 === 0 || count % 5 === 0) {
//       sum += count 
//     }
//     count += 1 
//   }
//  console.log(sum)
// }

// multiples(1000)
// multiples(10)

// ---------------------------------------Collatz Conjecture-------------------------------------

// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// Examples
// Starting with n = 12, the steps would be as follows:

// 12
// 6
// 3
// 10
// 5
// 16
// 8
// 4
// 2
// 1

// Resulting in 9 steps. So for input n = 12, the return value would be 9.

// function collatzConjecture(n){
// steps = 0 
//   while(n>1){
//     if(n%2 === 0){
//       n = n/2 
//       // steps += 1 
//     }
//     else{
//       n = (n * 3)+1
//     }
//     steps +=1 
//   }  
// console.log(steps)
// }

// collatzConjecture(12)
// collatzConjecture(15)

// -----------------------------------------Largest Palindrome Product-------------------------------------------------
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// function palindromeYesOrNo(pally){

//   var p = pally.toString().split(' ');
//   var length = pally.length;

//   i = 0 
//   while(i < length/2){
//     if(p[i] !== p[length-1-i]){
//       return false;
//     }
//     i ++ 
//   }
//   return true; 
// }

// function largestPalindrome(){
//   var largest = 0; 
//   var x = 999
//   var y = 999

//   while(x >= 100){
//     while(y >= 100){  
//       var mult = x*y 

//       if(mult < largest){
//         break;
//       }
//       if(palindromeYesOrNo(mult) && mult > largest){
//         largest = mult; 
//       }
//       y--
//     }
//     x--
//   }
//   console.log(largest)
// }

// console.log(palindromeYesOrNo()) 
// console.log(largestPalindrome())

// function isPalindrome(x){
//   x = x.toString().split(' ');
//   var len = x.length;
//   for(var i=0; i<len/2;i++){
//       if(x[i] !== x[len-1-i]){
//           return false;
//       }
//   }
//   return true;
// }
// function largestPalindrome(){
//   var largest = 0;
//   for(var i=999; i>=100; i--){
//       for(var j=999; j>=100; j--){
//           var mult = i*j;
//           if(mult < largest) break;
//           if(isPalindrome(mult) && mult > largest){
//               largest = mult;
//           }
//       }
//   }
//   return largest;
// }
// largestPalindrome()
// isPalindrome()

// const x = 6 % 2; 
// const y = x ? 'One' : 'Two';
// console.log(y); 

// console.log("---")

// "use strict";
// function logThis(){
//   this.desc = "logger";
//   console.log(this)
// }
// new logThis();
// console.log("---")

// for (var i = 0; i < 5; i++){
//   console.log(i);
// }
// console.log("---")

// console.log(typeof(42)); 

// Talk with Jamie about this one. Why does the answer change when "return" is removed from line  423 

// function minMax(arr) {
//   var lastIndex = arr.length - 1
// 	var sorted = arr.sort(function(a,b){return a - b})
//   // var sorted = arr.sort((a,b)=>a-b)
//   var sortedArry = []

//   sortedArry.push(sorted[0])
//   sortedArry.push(sorted[lastIndex])

//   console.log(sortedArry)
// }

// minMax([14,35,6,1,34,54])

//----------------------------------------------
// function largestSwap(num) {
	// put number in an array split then join after reversed 
  
  // var swap = num.toString().split("").reverse().join("")
  // if(num > swap){
  //   return true 
  // }else {
  //   return false
  // }

  // --------------

  function digital_root(n) {
    var index = n.toString().length - 1   // index = 1
    var number = n.toString()             // '16'
    
    while(number.length > 1 ){               // 2 > 1     
        number = number[index] + number[index + 1]    
      }
      console.log(number)
   }
  //  digital_root(16)

  