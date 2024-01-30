const { Triangle, Square, Circle } = require("./shapes")

describe("Shapes", () => {

    describe("Triangle", () => {
        it("should take in user input and create a triangular logo", () => {
            const shape = new Triangle("AAA", "blue", "black");
            const testRenderTriangle =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="black" />
<text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">AAA</text>
</svg>`
            expect(shape.render()).toEqual(testRenderTriangle);
        })
    });

    describe("Square", () => {
        it("should take in user input and create a square logo", () => {
            const shape = new Square("AAA", "blue", "black");
            const testRenderSquare =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="25" y="50" width="150" height="150" fill="black"/>
<text x="50" y="140" font-size="60" fill="blue">AAA</text>
</svg>`
            expect(shape.render()).toEqual(testRenderSquare);
        })
    });

    describe("Circle", () => {
        it("should take in user input and create a circular logo", () => {
            const shape = new Circle("AAA", "blue", "black");
            const testRenderCircle =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="black" />
<text x="90" y="125" font-size="60" fill="blue">AAA</text>
</svg>`
            expect(shape.render()).toEqual(testRenderCircle);
        })
    });
});