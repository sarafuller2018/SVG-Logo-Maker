const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shapes"); //destructuring the object
const { writeFile } = require("fs/promises");

//array of questions to get user input
const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters for your logo.",
        name: "logoName"
    },

    {
        type: "input",
        message: "What color would you like your logo text? (Use color keyword or hexadecimal number.)",
        name: "textColor"
    },

    {
        type: "list",
        message: "Please select a shape for your logo.",
        name: "shape",
        choices: ["circle", "square", "triangle"]
    },

    {
        type: "input",
        message: "What color would you like your logo shape? (Use color keyword or hexadecimal number.)",
        name: "shapeColor"
    },
]

//function to create SVG file using input
function createSVG() {
    inquirer
        .prompt(questions)
        .then((responses) => {

            if (responses.logoName.length > 3) {
                console.log("ERROR: Your logo has a maximum of 3 characters.")

            } else {
                
                if (responses.shape == "triangle") {
                    const Triangle1 = new Triangle(responses.logoName, responses.textColor, responses.shapeColor);
                    const renderSVGFileTriangle1 = Triangle1.render()

                    writeFile("logo.svg", renderSVGFileTriangle1).then(() => console.log("Generated logo.svg"))
                } else if (responses.shape == "square") {
                    const Square1 = new Square(responses.logoName, responses.textColor, responses.shapeColor);
                    const renderSVGFileSquare1 = Square1.render()

                    writeFile("logo.svg", renderSVGFileSquare1).then(() => console.log("Generated logo.svg"))
                } else {
                    const Circle1 = new Circle(responses.logoName, responses.textColor, responses.shapeColor);
                    const renderSVGFileCircle1 = Circle1.render()

                    writeFile("logo.svg", renderSVGFileCircle1).then(() => console.log("Generated logo.svg"))
                }
            }
        });
};

createSVG();