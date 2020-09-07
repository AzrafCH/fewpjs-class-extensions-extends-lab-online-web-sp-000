// Your code here
class Polygon {
  constructor(array) {
    this.sides = array;
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b, 0)
  }
}

class Triangle extends Polygon {

}

class Square extends Polygon {

}
