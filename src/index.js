#!/usr/bin/env node

import chalk from 'chalk';
import commander from 'commander';

// Include the JS files
import createContentDir from './content.js';
import createAccordionDir from './accordion.js';

// Set up the CLI commands
commander
    .command('content')
    .action(function() {
        // Console log out what we are doing
        console.log(
            chalk.green('Adding content flexible section')
        );
        // Run through the function to create the files
        createContentDir();
    });

commander
    .command('accordion')
    .action(function() {
        console.log(
            chalk.green('Adding the accordion section')
        );
        createAccordionDir();
    });

commander
    .command('tiles')
    .action(function() {
        console.log(
            chalk.green('Adding tiles flexible section')
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
