const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// List of team members to be rendered to page.
const teamMembers = [];

// Starting Prompt
function Start() { // Starts with creating a manager.
    function CreateManager() {
        inquirer
            .prompt([
                { // Prompt for Manager's name.
                type: "input",
                name: "name",
                message: "What is your name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            }, 
            { // Prompt for Manager's id.
                type: "input",
                name: "id",
                message: "What is your id?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            },
            { // Prompt for Manager's email.
                type: "input",
                name: "email",
                message: "What is your email?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            },
            { // Prompt for Manager's office number.
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            } // Pushing results into Manager constructor.
        ]).then(function(answers) {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            teamMembers.push(manager);
            console.log(teamMembers);
            // Run prompt to add another member.
            createTeam();
        });
    }
    // Creating prompt for Engineer.
    function CreateEngineer() {
        inquirer
            .prompt([
                { // Prompt for Engineer's name.
                type: "input",
                name: "name",
                message: "What is your name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            }, 
            { // Prompt for Engineer's id.
                type: "input",
                name: "id",
                message: "What is your id?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            },
            { // Prompt for Engineer's email.
                type: "input",
                name: "email",
                message: "What is your email?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            },
            { // Prompt for Engineer's GitHub;
                type: "input",
                name: "github",
                message: "What is your GitHub username?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            } // Pushing results into Engineer constructor.
        ]).then(function(answers) {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            teamMembers.push(engineer);
            console.log(teamMembers);
            // Run prompt to add another member.
            createTeam();
        });
    }
     // Creating prompt for Intern.
     function CreateIntern() {
        inquirer
            .prompt([
                { // Prompt for Intern's name.
                type: "input",
                name: "name",
                message: "What is your name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            }, 
            { // Prompt for Intern's id.
                type: "input",
                name: "id",
                message: "What is your id?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            },
            { // Prompt for Intern's email.
                type: "input",
                name: "email",
                message: "What is your email?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            },
            { // Prompt for Intern's School;
                type: "input",
                name: "school",
                message: "What is your school name?",
                validate: (answer) => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character."
                }
            } // Pushing results into Intern constructor.
        ]).then(function(answers) {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school 
            );
            teamMembers.push(intern);
            console.log(teamMembers);
            // Run prompt to add another member.
            createTeam();
        });
    }
    // Creating createTeam function.
    function createTeam() {
        inquirer.prompt([
            { // Prompt for role type.
                type: "list",
                name: "role",
                message: "What kind of employee would you like to add?",
                choices: ["Engineer", "Intern", "Done"] 
            }, // Prompt choices are Engineer, Intern, and Done; which ends prompts.
        ])
        .then(function(answers) {
            switch (answers.role) {
                case "Engineer": 
                    CreateEngineer();
                    break;
                case "Intern":
                    CreateIntern();
                    break;
                default: renderTeam();
            }
        });
    } // Functionality for rendering prompt results and writing a new file.

    // Rendering results 
    function renderTeam() {
        if (!fs.existsSync(OUTPUT_DIR)){
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    CreateManager();
}
// Start function call. Runs entire program with node app.
Start()