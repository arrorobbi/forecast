// data = [
//   {
//     week: 1,
//     y: 2000
//   },
//   {
//     week: 2,
//     y: 3000
//   },{
//     week: 3,
//     y: 4000
//   },{
//     week: 4,
//     y: 5000
//   },
// ]

// const embed = (data) => {
//   console.log(data[0]['week'])
// }
// embed(data)

const array = [1, 2, 3, 4, 5, 6]; // Example array
const startIndex = 2; // Index to start deletion
const endIndex = array.length; // Index to end deletion (inclusive)

// Calculate number of elements to delete
let numElementsToDelete = endIndex - startIndex + 1;

// Use splice to delete elements
array.splice(startIndex, numElementsToDelete);

console.log(array); // Output: [1, 2, 5]