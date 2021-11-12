//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
let last = ages[ages.length - 1];

let first = ages[ages.length - ages.length];

let diff = last - first;
console.log(
  "The diffrence between the first element and last element is" + " " + diff
);

//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(20);

console.log(ages);

last = ages[ages.length - 1];

first = ages[ages.length - ages.length];

diff = last - first;

console.log(
  "The diffrence between the first element and last element is" + " " + diff
);

//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum = 0,
  avg = 0;

for (let i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
}

avg = sum / ages.length;

console.log("The average age is" + " " + avg);

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

console.log(names);
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
(sum = 0), (avg = 0);

for (let i = 0; i < names.length; i++) {
  sum = sum + names[i].length;
}

avg = sum / names.length;

console.log("The average number of letters per name is" + " " + avg);

//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
sum = "";

for (let i = 0; i < names.length; i++) {
  sum = sum + names[i] + " ";
}
console.log(sum);

//3.	How do you access the last element of any array?
//      array.length - 1;
//4.	How do you access the first element of any array?
//      array[0];

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
const nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
  sum = sum + nameLengths[i];
}
console.log(sum);

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function numberOne(word, n) {
  let concat = "";
  while (n != 0) {
    concat += word;
    n--;
  }
  return concat;
}

console.log(numberOne("Hello", 3));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function createFullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}
createFullName("Paul", "Haliotis");

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isTotalGreaterThan100(arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
}

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function getAverage(arrOfNumbers) {
  (sum = 0), (avg = 0);

  for (let i = 0; i < arrOfNumbers.length; i++) {
    sum = sum + arrOfNumbers[i];
  }

  return sum / arrOfNumbers.length;
}
console.log(getAverage([12, 15, 25, 20]));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than
//the average of the elements in the second array.

function compareAverage(arr1, arr2) {
  if (average(arr1) > average(arr2)) {
    return true;
  } else {
    return false;
  }
}

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink() {
  let isHotOutside = true;
  let moneyInPocket = 15;

  if (isHotOutside && moneyInPocket > 10.5) {
    return true;
  }
}
console.log(willBuyDrink());

//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// if it is raining return bring umbrella otherwise return enjoy the weather!

function isItRaining(raining) {
  if (raining) {
    return "Bring an umbrella!";
  } else {
    return "Enjoy the weather!";
  }
}

console.log(isItRaining(false));
