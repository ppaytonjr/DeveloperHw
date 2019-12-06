var jest = require("jest");
var inquirer = require("inquirer");


class Employee {
    constructor(name, id , title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }

    getName(){
        name = `${employeeName}`

    }
    getId(){
        id = `${employeeId}`

    }
    getEmail({
        email = `${employeeEmail}`
        
    })
    

{
inquirer.prompt([
    {
        type: "input",
        message: "Please give employee's name",
        name: "employeeName",

    },
    {
        type: "input",
        message: "Please give email address for employee",
        name: "employeeEmail",
    },
    {
        type: "input",
        message: "Please give employee's ID number",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What school does your Intern attend?",
        name: "employeeschoolName"
    },
    {
        type: "input",
        message: "What is the link to your employee's GitHub profile?",
        name: "employeeGitHub",
    },
    {
        type: "input",
        message: "What is your employee's current office number?",
        name: "employeeOfficeNumber ",
    }
    


])};

}
module.exports = Employee;