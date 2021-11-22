const { log } = console;
const numbers = [1, 2, 3, 4];

// add an element
const updatedArray_1 = [...numbers, 5];
log(updatedArray_1);

// add an element at specific location
const index = numbers.indexOf(2);
const updatedArray_2 = [...numbers.slice(0, index), 5, ...numbers.slice(index)];
log(updatedArray_2);

// removing an element
const removedItem = numbers.filter((n) => n !== 2);
log(removedItem);

// update an element (replace with new number)
const updatedArray_3 = numbers.map((n) => (n === 2 ? 20 : n));
log(updatedArray_3);
