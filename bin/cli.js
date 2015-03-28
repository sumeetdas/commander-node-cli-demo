#!/usr/bin/env node

var cli = require('commander');

/**
 * Set version of the CLI
 */
cli
    .version('0.0.1');

cli
    .command('hi') // add listener for command 'hi'
    .description('initialize project configuration') // add description to command 'hi'
    .action(function(){
        console.log('Hi my Friend!!!');
    }); // add action to be performed upon

cli
    .command('bye [name]') // add listener for 'bye [name]', where [name] is a command line argument
    .description('initialize project configuration')
    .action(function(name){
        console.log('Bye ' + name + '. It was good to see you!');
    });

cli
    .command('*') // add listener for any other command
    .action(function(env){
        console.log('Enter a Valid command');
        terminate(true);
    });

cli.parse(process.argv); 