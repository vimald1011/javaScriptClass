const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array : ${arrayNumbers}`);
console.log(`1. Add 10 into each element and log new array result on console `);
const newArray = arrayNumbers.map(element => element + 10);
console.log(newArray);
console.log(`2. Cube the each array element and log on console`);
const cubeArray = arrayNumbers.map(element => Math.pow(element, 3));
console.log(cubeArray);
console.log(`3. Add the index value into its corresponding each array element and log new array result on console`);
const addIndexArray = arrayNumbers.map((element, index) => element = element + index);
console.log(addIndexArray);

