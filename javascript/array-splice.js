/**
 * Remove Items Using splice()
 * arr.splice(startIndex:number, deleteCount: number) --> returns elements that are deleted.
 */
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
const { log } = console;

log(arr.splice(2, 3));

/**
 * Add Items Using splice()
 */
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const deleteCount = 1;
numbers.splice(startIndex, deleteCount, 13, 14);
log(numbers);
