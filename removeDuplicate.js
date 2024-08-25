const array = [11, 3, 4, 11, 4, 7, 3, 5, 34, 33, 5, 3];
// const setArray = new Set(array);
// const newArray = [...setArray];
// console.log(newArray);
const newArray = [];

// for (let index = 0; index < array.length; index++) {
//     if (!newArray.includes(array[index])) {
//         newArray.push(array[index])
//     }
// }
for (const element of array) {
    if (!newArray.includes(element)) {
        newArray.push(element);
    }
}
console.log(newArray);

