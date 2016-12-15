import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';
import path from 'path';
const ncp = require('ncp').ncp;

const createAccordionDir = () => {
    console.log('creating the files...');

    const dir = './partials/sections/accordion/';
    const sassDir = './assets/styles/sections/';

    mkdirp.sync(dir);
    const modulePath = path.resolve('');
    const source = modulePath + '/snippets/acf/accordion';
    const destination = dir;

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('done!');
    });
};

export default createAccordionDir;
