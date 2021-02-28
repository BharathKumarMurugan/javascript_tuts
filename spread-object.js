const { log } = console;
const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};
const clone = { ...user }; // (...) indicates that the object is being cloned
log(clone);
log(user);

/** Adding new property to the cloned object */
const clonedUser = { ...user, company: "abc" };
log(clonedUser);
log(user);

/** Update property to the cloned object */
const updatedUser = { ...user, age: 50 };
log(updatedUser);
log(user);

/** normal way of object clone */
const newClone = Object.assign(user);
log("newClone --> ", newClone);
