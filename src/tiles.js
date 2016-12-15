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

const createFunctionFile = () => {
    return '<?php \n' +
    'return (object) array( \n' +
    '    \'acf_name\' => \'tiles_section\', \n' +
    '    \'options\' => (options) array( \n' +
    '        \'func\' => function($padding_classes = \'\') { \n' +
    '            $p_loc = FlexibleContentSectionUtility::getSectionsDirectory(); \n' +
    '            $sb_loc = "$p_loc/tiles" \n' +
    '            $item = "$sb_loc/item.php" \n' +
    '            require($item) \n' +
    '        } \n' +
    '        \'has_padding\' => true \n' +
    '    ) \n' +
    ');';
};

const createItemFile = () => {

};

const createSassFile = () => {

};

export default createTilesDir;
