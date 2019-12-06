var jest = require("jest");
var inquirer = require("inquirer");


const Employee = require("../lib/Employee");


class Intern extends Employee {
    constructor(school){
        super(name, id, "Intern")
        this.school = school;


    }
    getSchool(){
        school = `${employeeSchool}`

    }
}
let intern = new Intern("Intern", `${employeeName}, ${employeeId}, ${employeeSchool}`)

module.exports = Intern;
