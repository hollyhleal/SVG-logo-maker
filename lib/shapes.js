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
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150,18 244,182 56,182" class="triangle" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Circle, Triangle, Square };
