// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Extends the class of Employee and create a constructor that will build an Engineer object.
// Use object to hold data from inquirer prompt instances.

// Import Employee Module
const Employee = require("./Employee");
// Extending Employee with Manager class.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

const e = new Engineer();


// Exporting Engineer module.
module.exports = Engineer;