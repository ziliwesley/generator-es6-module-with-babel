'use strict';

const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const prompts = require('./prompts.js');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        let done = this.async();

        // Greets the user
        this.log(yosay(
            `Welcome to the wondrous ${chalk.red('ES6 Module')} generator!'`
        ));

        this.prompt(prompts, function (answers) {
            // Store user's options
            this.answers = answers;

            done();
        }.bind(this));
    },

    writing: function () {
        // Project's Root Dir:
        //
        // ```
        // .babelrc
        // .editorconfig
        // .eslintignore
        // .eslintrc
        // .gitignore
        // .npmignore
        // .npmrc
        // .tern-project
        // CHANGELOG.md
        // index.js
        // gulpfile.js
        // ```
        this.copy('.babelrc', '.babelrc');
        this.copy('.editorconfig', '.editorconfig');
        this.copy('.eslintignore', '.eslintignore');
        this.copy('.eslintrc', '.eslintrc');
        this.copy('_gitignore', '.gitignore');
        this.copy('.npmignore', '.npmignore');
        this.copy('.npmrc', '.npmrc');
        this.copy('.tern-project', '.tern-project');
        this.copy('CHANGELOG.md', 'CHANGELOG.md');
        this.copy('index.js', 'index.js');
        this.copy('gulpfile.js', 'gulpfile.js');

        // Compose `package.json`
        this.copy('_package.json', 'package.json');
        // Compose `README.md`
        this.copy('_README.md', 'README.md');

        // Scripts folder
        this.directory('scripts', 'scripts');
        // Test folder
        this.directory('test', 'test');
        // Source folder
        this.directory('src', 'src');
    },

    install: function () {
        this.installDependencies();
    }
});
