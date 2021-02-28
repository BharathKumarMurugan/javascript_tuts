/** Array */
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const transformedArray = months.map((month) => {
  return month.toUpperCase();
});

console.log(transformedArray);

/** Array of objects */
const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
  },
  {
    first_name: "John",
    last_name: "Carte",
  },
];
const userName = users.map((user) => {
  return `${user.first_name} ${user.last_name}`;
});

console.log(userName);

/** Return specific value from the list */
const userList = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
    age: 30,
  },
  {
    first_name: "Tim",
    last_name: "Lee",
    age: 45,
  },
  {
    first_name: "John",
    last_name: "Carte",
    age: 25,
  },
];
const lastName = userList.map((user) => {
  return user.last_name;
});

console.log(lastName);
