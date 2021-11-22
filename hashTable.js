let obj = {
  Bharath: "1245",
  Kumar: "6789",
};
let collection = new Map();
collection.set("bharath", 12345);
collection.set("kumar", "56789");
collection["test"] = 12345;

console.log(collection);
console.log(collection.get("bharath"));
console.log(collection.get("test"));
console.log(collection["test"]);
console.log(collection.size);

for (let [key, value] of collection) {
  console.log("type of value: ", typeof value);
  console.log(`${key}: ${value}`);
}

class myhash {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
        }
      }

      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this._hash(key);
    console.log(this.table[index].length);
    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else return false;
  }
  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

h = new myhash();
console.log(h);
console.log(h.table.length);
h.set("bharath", 4000);
h.set("kumar", 4500);
h.set("murugan", 5000);
h.set("bharath kumar", "adsfasdf");
h.set("kumar73", "asd");
console.log(h);
console.log(h.table.length);
console.log(h.get("bharath"));
console.log(h.remove("kumar73"));
console.log(h);
console.log(h.get("kumar73"));
