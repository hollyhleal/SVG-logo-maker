// Include common functionality and properties shared by Triangle, Circle and Square classes and use inheritance to reuse in child classes

class Shapes {
  constructor() {
    this.shapeColor = "";
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

class Circle extends Shapes {
  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="250,60 100,400 400,400" class="triangle" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect width="100" height="100" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Circle, Triangle, Square };
