// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Manager.
// Extends the class of Employee and create a constructor that will build an Manager object.
// Use object to hold data from inquirer prompt instances.

// Import Employee Module
// import Employee from './Employee'
const Employee = require("./Employee");
// Extending Employee with Manager class.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

const e = new Manager();


// Exporting Manager module.
module.exports = Manager;