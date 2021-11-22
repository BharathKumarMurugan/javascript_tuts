data = {
  Hyderabad: "Chennai",
  Dehli: "Mumbai",
  Chennai: "Bangalore",
  Mumbai: "Hyderabad",
};

console.log(`data: ${JSON.stringify(data)}`);
let objkeys = Object.keys(data);
let objLen = objkeys.length;
for (let i = 0; i < objLen; i++) {
  let temp = [];
  let k = objkeys[i];
  while (k in data) {
    k = data[k];
    temp.push(k);
  }
  if (temp.length == objLen) {
    console.log(`if journery starts from ${objkeys[i]}: ${temp}`);
    break;
  }
}
