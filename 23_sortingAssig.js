const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array is ${arrayRollNumbers}`);
console.log(`===== 1. Reverse the array =====`);
const reverseArray = arrayRollNumbers.reverse();
console.log(`Reverse Array is: ${reverseArray}`);
console.log(`===== 2. Use the sort() method as it is without any custom sorting logic =====`);
let newSortArray = arrayRollNumbers.sort();
console.log(newSortArray);
console.log(`===== 3. Sort the array in ascending order, by writing your custom logic =====`);
const newSort = arrayRollNumbers.sort((a, b) => a - b);
console.log(`Sort in ascending order: ${newSort}`);
console.log(`===== 4. Find the Greatest number from the array =====`);
console.log(`Greatest Number: ${newSort[newSort.length - 1]}`);
console.log(`===== 5. Find the smallest number from the array =====`);
console.log(`Smallest Number: ${newSort[0]}`);
console.log(`===== 6. Remove duplicates from array =====`);
const uniqueArray = [];
arrayRollNumbers.forEach((element) => {
    if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
    }
})
console.log(`Unique Array after remove duplicates: ${uniqueArray}`);