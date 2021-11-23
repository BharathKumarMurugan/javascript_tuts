/*const getStatus = () => {
  return "Selected";
};
const user = {
  name: "Interview",
  status: getStatus(),
  display: function () {
    console.log(`Interview status: ${this.status}`);
  },
};
user.display();
debugger;
const userObj = user.display;
userObj();
*/
/*
console.log(getValue());
console.log(getString());

const getValue = () => {
  return 10 * 5;
};
function getString() {
  return "from string method";
}
*/

function logger(n) {
  let score = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      score.push(j * 3);
    }
    // score.push("");
  }
  return score;
}
console.log(logger(10));
