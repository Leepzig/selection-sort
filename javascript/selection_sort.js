function selectionSort(arr) {
  // type your code here
  //new array
  //find minimum
  //splice
  //append to new array
  //repeat until 
  const newArr = []
  const length = arr.length
  for (let i = 0; i < length; i++) {
    const minIndex = arr.findIndex(el => el === Math.min(...arr))
    minElement = arr.splice(minIndex, 1)
    newArr.push(minElement)
  }
  // find min index
  // remove item with splice
  // append removed item to new array
 
  return newArr.flat()
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-100, -1, 0, 2, 3, 5, 100]");
  console.log("=>", selectionSort([3, -1,-100, 5, 2, 100, 0]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
console.log('Hello, world!')
const arr = [2, 4, 5, 6]
const newArr = []

const removeMin = () => {
  const index = arr.findIndex((el) => el === Math.min(...arr))
  const newEl = arr.splice(index,1)
  console.log(newEl)
newArr.push(newEl)
}

// arr.forEach(removeMin)

*/