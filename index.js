const inquirer = require("inquirer");
const Shapes = require("./lib/shapes")

//array of questions to get user input
const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters for your logo.",
        name: "logoName"
    },

    {
        type: "input",
        message: "What color would you like your logo text?",
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
        message: "What color would you like your logo shape?",
        name: "shapeColor"
    },
]

//function to create SVG file
function createSVG() {
    inquirer
        .prompt(questions)
        .then((responses) => {
// const jsonResponses = JSON.parse(responses);
const Triangle1 = new Triangle (responses.logoName, responses.textColor, responses.shapeColor);
const renderSVGFileTriangle1 = Triangle1.render()

writeFile("img.svg", renderSVGFileTriangle1).then( () => console.log("Success!")) 
        }); 
    };

createSVG();