'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the basic angular template with module and routes ' + chalk.red('generator-angular-basic-template') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('e2e'),
      this.destinationPath('e2e'),
      { globOptions: { dot: true } }
    );
    
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src'),
      { globOptions: { dot: true } }
    );
    
    this.fs.copy(
      this.templatePath('karma.conf.js'),
      this.destinationPath('karma.conf.js'),
      { globOptions: { dot: true } }
    );
    
     this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { globOptions: { dot: true } }
    );
    
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
      { globOptions: { dot: true } }
    );

    this.fs.copy(
      this.templatePath('.gitattributes'),
      this.destinationPath('.gitattributes'),
      { globOptions: { dot: true } }
    );
    
    this.fs.copy(
      this.templatePath('protractor.conf.js'),
      this.destinationPath('protractor.conf.js'),
      { globOptions: { dot: true } }
    ); 
    
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { globOptions: { dot: true } }
    );
    
    this.fs.copy(
      this.templatePath('tslint.json'),
      this.destinationPath('tslint.json'),
      { globOptions: { dot: true } }
    );
    
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json'),
      { globOptions: { dot: true } }
    );
  }

  install() {
    this.installDependencies();
  }
};
