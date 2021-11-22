const myArr = [5, 3, 7, 2, 1, 6, 3, 1, 8, 4];
const arrObj = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

// find duplicate objects
function findDuplicates(arr) {
  return arr.filter((item, i) => arr.indexOf(item) !== i);
}
console.log(findDuplicates(myArr));

function removeDuplicateObjects(myArr) {
  return myArr.filter(
    (value, index, arr) =>
      arr.findIndex((item) => item.id === value.id) === index
  );
}
console.log(removeDuplicateObjects(arrObj));

// find unique numbers
const uniqueNumbers = [...new Set(myArr)];
console.log("uniqueNumbers: ", uniqueNumbers);
