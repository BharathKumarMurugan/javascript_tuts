const user = {
  name: "Bharath",
  address: "Chennai",
  age: 28,
};

const { name, age, salary = user.salary ? user.salary : 50000 } = user;
console.log(name, age, salary);
/** Alias name for destructuring object */
const { address: permanentAddress } = user;
console.log(permanentAddress);

/** Defining new variable inside object destructuring */
const employee = {
  first_name: "Bharath Kumar",
  last_name: "Murugan",
};
const {
  first_name,
  last_name,
  full_name = `${first_name} ${last_name}`,
} = employee;
console.log(full_name);

/** Nested Object Destructuring */
const emp = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  department: {
    name: "Sales",
    Shift: "Morning",
    address: {
      city: "Bangalore",
      street: "7th Residency Rd",
      zip: 560001,
    },
  },
};

const {
  department: {
    address: { city },
  },
} = emp;
console.log(city);

/** Dynamic Name property --> when object key is unknown */

const user2 = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};
const getValue = (key) => {
  const { [key]: returnValue } = user2;
  return returnValue;
};

console.log(getValue("name"));

/** Destructure to function parameter */
const logDetails = ({ name, age }) => {
  return `${name} is ${age} year(s) old!`;
};
console.log(logDetails(user));

/** Destructre to funtion return value */
const getUser = () => {
  return {
    name: "Bharath Kumar",
    company: "Mindtree",
    aim: "Business",
  };
};
const { name: getUserName, aim } = getUser();
console.log(getUserName, aim);

/** Destructure in loops */

const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, address } of users) {
  console.log(`${name} is living in ${address}`);
}
users.forEach(({ name, address }) => {
  console.log(`${name} is living in ${address}`);
});

/** Destructuring console object */
const { log, warn, error } = console;
log("I'm from log");
warn("I'm from warn");
error("I'm from error");
