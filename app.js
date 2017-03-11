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

testSumArray(testArray);

function multiplyArray(testArray){ //eslint-disable-line
  var sumAn = multiply(testArray[0], testArray[1]);
  var sumBn = multiply(sumAn[0], testArray[2]);
  var sumArrayAnswer = sumBn[0];
  var sumArrayMessage = 'The numbers ' + testArray[0] + ',' + testArray[1] + ',' + testArray[2] + ' have a product of ' + sumArrayAnswer + '.';
  var anotherStupidArray = [sumArrayAnswer, sumArrayMessage];
  console.log(anotherStupidArray);
  return anotherStupidArray;
}

testMultiplyArray(2,3,4);
