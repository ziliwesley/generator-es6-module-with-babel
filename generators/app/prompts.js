'use strict';

const path = require('path');

module.exports = [{
    type: 'input',
    name: 'module:name',
    message: 'Name of your module',
    default: process.cwd().split(path.sep).pop(),
    store: true
}, {
    type: 'input',
    name: 'module:description',
    message: 'A short description',
    store: true
}, {
    type: 'list',
    choices: [
        'GitHub',
        'coding'
    ],
    name: 'repo:host',
    message: 'Git hosting service',
    store: true
}, {
    type: 'input',
    name: 'module:author:nickname',
    message: 'You user name there',
    store: true
}];
