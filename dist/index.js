#!/usr/bin/env node
'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _content = require('./content.js');

var _content2 = _interopRequireDefault(_content);

var _accordion = require('./accordion.js');

var _accordion2 = _interopRequireDefault(_accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up the CLI commands


// Include the JS files
_commander2.default.command('content').action(function () {
    // Console log out what we are doing
    console.log(_chalk2.default.green('Adding content flexible section'));
    // Run through the function to create the files
    (0, _content2.default)();
});

_commander2.default.command('accordion').action(function () {
    console.log(_chalk2.default.green('Adding the accordion section'));
    (0, _accordion2.default)();
});

_commander2.default.command('tiles').action(function () {
    console.log(_chalk2.default.green('Adding tiles flexible section'));
});

_commander2.default.command('fifty-fifty').action(function () {
    console.log((0, _chalk2.default)('Adding the fifty-fifty section'));
});

_commander2.default.parse(process.argv);