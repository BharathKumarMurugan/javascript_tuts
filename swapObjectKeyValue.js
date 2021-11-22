data = {
  bear: "animal",
  pigeon: "bird",
  bharath: "human",
  shark: "fish",
  snake: "reptile",
};

let res = {};
Object.keys(data).forEach((ele) => {
  res[data[ele]] = ele;
});

console.log(data);
console.log(res);
