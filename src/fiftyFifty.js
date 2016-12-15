import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';
import path from 'path';
const ncp = require('ncp').ncp;

const createFiftyFiftyDir = () => {
    console.log('creating the files...');

    const sassDir = './assets/styles/sections/';

    mkdirp.sync(dir);
    const modulePath = path.resolve('');
    const source = modulePath + '/snippets/fify-fifty';
    const destination = './partials/sections/fifty-fifty';

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('done!');
    });
};

export default createFiftyFiftyDir;
