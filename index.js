#! /usr/bin/env node
console.log("Hello World!");
const yargs = require("yargs");
const usage = "\nUsage: supercli <gitpath> path to be cloned";
const utils = require('./utils.js')
const options = yargs  
      .usage(usage)  
      .option("gd", {alias:"gitdownload", describe: "Clone repo of given path.", type: "boolean", demandOption: false })                                                                                                    
      .help(true)  
      .argv;
if(yargs.argv._[0] == null){  
      utils.showHelp();  
      return;  
      }     
var command = utils.parseCommand(yargs.argv._);
