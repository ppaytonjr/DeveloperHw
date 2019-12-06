var jest = require("jest");
var inquirer = require("inquirer");


const Employee = require("../lib/Employee");


class Engineer extends Employee {
    constructor(gitHub){
        super(name, id, "Engineer")
        this.gitHub = gitHub;


    }

    getGitHub(){
        gitHub = `${employeegitHub}`
        
    }
}

let engineer = new Engineer ("Engineer", `${employeeName}, ${employeeId}, ${employeeGitHub}`)

module.exports = Engineer;