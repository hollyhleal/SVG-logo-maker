// Include common functionality and properties shared by Triangle, Circle and Square classes and use inheritance to reuse in child classes

class Shapes {
  constructor(color) {
    this.color = ""; // color?
  }
  setColor(shapeColor) {
    this.color = shapeColor;
  }
}

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

class Circle extends Shapes {
  //   constructor(shape) {
  //     super(color);
  //     this.shape = shape;
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.color}/>`;
  }
}

class Triangle extends Shapes {
  //   constructor(shape) {
  //     super(color);
  //     this.shape = shape;
  render() {
    return `<polygon points="250,60 100,400 400,400" class="triangle" fill="${this.color}/>`;
  }
}

class Square extends Shapes {
  //   constructor(shape) {
  //     super(color);
  //     this.shape = shape;
  render() {
    return `<rect width="100" height="100" fill="${this.color}/>`;
  }
}

module.exports = { Shapes, Circle, Triangle, Square };
