// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Extends the class of Employee and create a constructor that will build an Intern object.
// Use object to hold data from inquirer prompt instances.

// Import Employee Module
const Employee = require("../lib/Employee");
// Extending Employee with Manager class.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

const e = new Intern();


// Exporting Intern module.
module.exports = Intern;