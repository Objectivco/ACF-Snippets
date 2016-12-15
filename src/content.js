import fs from 'fs';
import mkdirp from 'mkdirp';
import chalk from 'chalk';

const createContentDir = () => {
    console.log('creating the files...');

    const dir = './partials/sections/content/';
    const sassDir = './assets/styles/sections/';

    mkdirp.sync(dir);
    const modulePath = path.resolve('');
    const source = modulePath + '/snippets/acf/content';
    const destination = dir;

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('done!');
    });
};

export default createContentDir;
