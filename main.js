#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    Personality;
    constructor(Personality) {
        this.Personality = Personality;
    }
}
var IntroExtro = [
    {
        name: "introextro",
        type: "list",
        choices: [`Introvert`, "Extrovert"],
        message: chalk.bold.cyan("Are you an Introvert Or Extrovert?")
    }
];
var name = [
    {
        name: "Name",
        type: "input",
        message: chalk.bold.cyan("What is your name?")
    }
];
let PersonDetails = new Person("Mystery");
let { introextro } = await inquirer.prompt(IntroExtro);
let { Name } = await inquirer.prompt(name);
if (Name) {
    if (introextro == PersonDetails.Personality) {
        console.log(chalk.bold.italic.rgb(222, 173, 237)(`Your name is: ${Name}. You are a Mystery.`));
    }
    else if (introextro == "Introvert") {
        console.log(`Your name is: ${Name} and You like to keep to yourself!`);
    }
    else if (introextro == "Extrovert") {
        console.log(`Your name is: ${Name} and You like to Live an Adventurous life and socialise!`);
    }
    else {
        throw new Error("Only `Introvert` and `Extrovert` options are valid");
    }
}
