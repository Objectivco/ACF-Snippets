import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';
import path from 'path';
const ncp = require('ncp').ncp;

const createTilesDir = () => {
    console.log('creating the files...');

    const dir = './partials/sections/tiles/';
    const sassDir = './assets/styles/sections/';

    mkdirp.sync(dir);
    const modulePath = path.resolve('');
    const source = modulePath + '/snippets/tiles';
    const destination = './partials/sections/tiles';

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('done!');
    });
};

export default createTilesDir;
