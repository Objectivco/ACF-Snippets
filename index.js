#!/usr/bin/env node

var chalk = require('chalk');
var commander = require('commander');

commander
    .command('content')
    .action(function() {
        console.log(
            chalk.green('Adding content flexible section')
        );
    });

commander
    .command('tiles')
    .action(function() {
        console.log(
            chalk.green('Adding tiles flexible section')
        );
    });

commander
    .command('accordion')
    .action(function() {
        console.log(
            chalk('Adding the accordion section')
        );
    });

commander
    .command('fifty-fifty')
    .action(function() {
        console.log(
            chalk('Adding the fifty-fifty section')
        );
    });


commander.parse(process.argv);
