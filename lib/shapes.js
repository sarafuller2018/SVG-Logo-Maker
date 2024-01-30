class Shapes {
    constructor(logoName, textColor, shapeColor) {
        this.logoName = logoName;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shapes {
    constructor(logoName, textColor, shapeColor) {
        super(logoName, textColor, shapeColor)
    }
    render() {
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>
</svg>`
    }
}

class Square extends Shapes {
    constructor(logoName, textColor, shapeColor) {
        super(logoName, textColor, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="25" y="50" width="150" height="150" fill="${this.shapeColor}"/>
<text x="100" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>
</svg>`
    }
}

class Circle extends Shapes {
    constructor(logoName, textColor, shapeColor) {
        super(logoName, textColor, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoName}</text>
</svg>`
    }
}

module.exports = {
    Shapes, Triangle, Square, Circle
}