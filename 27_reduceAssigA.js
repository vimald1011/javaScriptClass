const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given array : ${array_numbers}`);
console.log(`1. Find the sum of all numbers using reduce() and traditional way`)
const subArray = array_numbers.reduce((element, currentValue) => element + currentValue, 0);
console.log(`Output: ${subArray}`);
console.log(`2. Find the numbers multiple of 5 and then sum it`)
const addFiveArray = array_numbers.filter(element => element = element % 5 == 0).reduce((preValue, currentValue) => preValue + currentValue);
console.log(`Output: ${addFiveArray}`);
const newArray = [3, 4, 8];
const averageArray = newArray.reduce((first, current) => first + current) / newArray.length;
console.log(averageArray);
