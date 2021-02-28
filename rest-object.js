const { log } = console;
const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};

const { age, ...rest } = user;
log(user);
log(rest);
log(age);
