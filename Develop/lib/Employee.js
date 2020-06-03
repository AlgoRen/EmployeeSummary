// TODO: Write code to define and export the Employee class
// Create a class of Employee and create a constructor that will build an object.
// Use object to hold data from inquirer prompt instances.

class Employee {
    // Employee Constructor with name, id, and email.
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Employee Methods
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

const e = new Employee();


// Exporting Employee module.
module.exports = Employee;
