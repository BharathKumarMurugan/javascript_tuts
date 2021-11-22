class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(a) {
    super();
    this.w = a;
    this.h = a;
  }
}

let r = new Rectangle(3, 4);
let s = new Square(3);

console.log(r.area());
console.log(s.area());

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.greeting = function () {
  console.log(`Hi, I\'m ${this.name.first}.`);
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype.greeting = function () {
  let prefix;
  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Ms.";
  } else {
    prefix = "Mx.";
  }
  console.log(
    `Hello. My name is ${prefix} ${this.name.last} and I teach ${this.subject}.`
  );
};
let p = new Person("Bharath Kumar", "Murugan", 29, "male", ["scripting", "TT"]);
p.greeting();
let t = new Teacher(
  "Bharath Kumar",
  "Murugan",
  29,
  "male",
  ["scripting", "TT"],
  "Javascript"
);
t.greeting();

// Teacher.prototype = Object.create(Person.prototype);

// console.log(Person.prototype);
