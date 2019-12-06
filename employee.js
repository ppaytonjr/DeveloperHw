var jest = require("jest");
var inquirer = require("inquirer");


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
        name: "idNumber",
    },
    {
        type: "input",
        message: "What school does your Intern attend?",
        name: "schoolName"
    },
    {
        type: "input",
        message: "What is the link to your employee's GitHub profile?",
        name: "gitHubLink",
    },
    {
        type: " input",
        message: "What is your employee's GitHub name?",
        name: "gitHubName"
    },
    {
        type: "input",
        message: "What is your employee's current office number?",
        name: "officeNumber ",
    }

]);


class Employee {
    constructor(name, position, id, email) {
        this.name = `${employeeName}`;
        this.position = position;
        this.id = id;
        this.email = email;
    }
};

class Manager extends Employee {
    constructor(office){
        super( name, "Manager", id, email)
        this.office = office;                 

        
    }
    getOffice(){
        var office = `${officeNumber}`
    }
};

class Intern extends Employee {
    constructor(school){
        super(name, "Intern", id, email)
            this.school = school;
        
    }
    getSchool(){
        var school = `${schoolName}`
    }

}
class Engineer extends Employee {
    constructor(gitHub,gitName){
        super(name, "Engineer", id, email)
            this.gitHub = gitHub; 
            this.gitName = gitName;

        
    }
    getGitHub(){
    var gitHub = `${gitHubLink}`
    var gitName = `${gitHubName}`
}



    //     inquirer.prompt([
    //     {
    //     type:"input",
    //     message:"Please give employee's name",
    //     name: "employeeName",

    // },
    // {
    //     type:"input",
    //     message:"Please give email address for employee",
    //     name:"employeeEmail",
    // },
    // {
    //     type:"input",
    //     message: "Please give employee's ID number",
    //     name: "idNumber",
    // },
    // {
    //     type:"input",
    //     message:"What school does your Intern attend?",
    //     name:"schoolName"
    // },
    // {
    //     type:"input",
    //     message:"What is the link to your employee's GitHub profile?",
    //     name:"gitHubLink",
    // },
    // {
    //     type: " input",
    //     message:"What is your employee's GitHub name?",
    //     name:"gitHubName"
    // },
    // console.log("gitHubLink", "gitHubName")

    // ]);

