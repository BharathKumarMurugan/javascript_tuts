/**
 * Class static initialization blocks
 */
// class classWithStaticProps {
//   static staticVariable1 = "something";
//   static staticVariable2;
//   static {
//     this.staticVariable2 = true;
//   }
// }

// console.log(classWithStaticProps.staticVariable1);
// console.log(classWithStaticProps.staticVariable2);

/**
 * constructor
 */
class Polygon {
  constructor(shape) {
    this.shape = shape;
  }
}

const poly = new Polygon("hexagon");
console.log(poly.shape);
