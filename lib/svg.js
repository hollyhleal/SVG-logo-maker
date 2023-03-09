class SVG {
  constructor() {
    this.text = "";
    this.shape = "";
  }
  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${this.shape}${this.text}</svg>`;
  }
  // one method for setting text
  setText(words, color) {
    if (words.length <= 3) {
      this.text = `<text fill="${color}" font-size="35" font-family="Verdana" x="15" y="63">${words}</text>`;
    } else {
      console.log(
        "Please enter 3 characters or less to render a logo with text."
      );
    }
  }
  // one method for setting the shape
  setShape(shape) {
    this.shape = shape.render();
  }
}

module.exports = SVG;
