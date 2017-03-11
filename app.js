'use strict';


function sum(a, b){
  var sumAnswer = a + b;
  var sumConsoleAnswer = 'The sum of ' + a + ' and ' + b + ' is ' + sumAnswer + '.';
  return [sumAnswer, sumConsoleAnswer];
}

testSum(4, 7);



function multiply(a, b){
  var mulAnswer = a * b;
  var mulConsoleAnswer = 'The product of ' + a + ' and ' + b + ' is ' + mulAnswer + '.';
  return [mulAnswer, mulConsoleAnswer];
}

testMultiply(5,9);


function sumAndMultiply(a,b,c){
  var blah = sum(a,b);
  var meh = sum(blah[0], c);
  var zlah = multiply(a,b);
  var zeh = multiply(zlah[0], c);
  var consoleMeh = a + ' and ' + b + ' and ' + c + ' sum to ' + meh[0] + '.';
  var consoleZeh = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + zeh[0] + '.';
  var stupidArray = [meh[0], zeh[0], consoleMeh, consoleZeh];
  console.log(stupidArray);
  return stupidArray;
}

testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
  var sumAn = sum(testArray[0], testArray[1]);
  var sumBn = sum(sumAn[0], testArray[2]);
  var sumArrayAnswer = sumBn[0];
  var sumArrayMessage = testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' was passed in as an array of numbers, and ' + sumArrayAnswer + ' is their sum.';
  var anotherStupidArray = [sumArrayAnswer, sumArrayMessage];
  console.log(anotherStupidArray);
  return anotherStupidArray;
}
// 2,3,4 was passed in as an array of numbers, and 9 is their sum.
// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
