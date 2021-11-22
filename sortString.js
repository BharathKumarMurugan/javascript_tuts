/**
 * Sort String Alphabetically
 * return the array with its values sorted alphabetically
 */
data1 = ["b", "c", "d", "a"];
data2 = ["z", "c", "d", "a", "y", "a", "w"];

function sortStringAscend(data) {
  return data.sort();
}
function sortStringDescend(data) {
  return data.sort().reverse();
}
console.log(sortStringAscend(data1));
console.log(sortStringAscend(data2));
console.log(sortStringDescend(data1));
console.log(sortStringDescend(data2));
