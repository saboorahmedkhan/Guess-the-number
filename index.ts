#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let genNum = Math.floor(Math.random()*2);

console.log(genNum);

let user = await inquirer.prompt({
        name: 'numb1',
        type: "list",
        message: "please select te number: ",
        choices: ['0','1']
});

if (genNum == parseInt(user.numb1))
    {       
        console.log(chalk.bold.blueBright("congratulations you won"));
    }
else 
    {       
        console.log(chalk.bold.redBright("Sorry better luck next time"));
    }