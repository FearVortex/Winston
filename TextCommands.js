const Discord = require('discord.js');
const config = require('./json/config.json');
const fs = require('fs');
const TextCommands = require('./json/commands.json');

var CommandHandler = {};
var commands = [];

var TextCommand = function(name, output){
    this.name = name.toLowerCase();
    this.output = output;
    fs.readFileSync(TextCommands, function readFileCallback(err, data){
        if(err){
            console.log(err);
        } else {
            commands = JSON.parse(data);
            for(var i in commands){
                if(commands[i].name != this.name){
                    commands.push({name: this.name, output: this.output});
                    let json = commands.stringify(commands);
                    fs.writeFileSync(TextCommands, json);
                    console.log(`${this.name} has been created`);
                } else {
                    console.log('That command already exists');
                }
            }
        }
    });
}

CommandHandler.editCommand = (command, output) => {
    fs.readFileSync(TextCommands, function readFileCallback(err, data){
        if(err){
            console.log(err);
        } else {
            commands = JSON.parse(data);
            for(var i in commands){
                if(commands[i].name == command){
                    commands[i].output = output;
                    let json = commands.stringify(commands);
                    fs.writeFileSync(TextCommands, json);
                    console.log(`${command} has been edited to have the output '${output}'`);
                }
            }
        }
    });
};

CommandHandler.commands = (message) => {
    let PREFIX = '~';
    let args = message.content.slice(PREFIX.length).split(" ");
    switch(args[0]){
        case 'add':
            if(message.member.roles.cache.has(config.admin_id)){
                if(args[1] && args[2]){
                    let newCommand = new TextCommand(args[1], args[2]);
                } else {
                    message.channel.send('Please specify the name and output');
                }
            } else {
                message.channel.send('You can\'t use that command');
            }
            break;
        case 'edit':
            if(message.member.roles.cache.has(config.admin_id)){
                if(args[1] && args[2]){

                }
            }
        default:
            message.channel.send('Sorry man, command doesn\'t exist');
    }
}

CommandHandler.checkValidity = function(message){
    if(!message.member.roles.cache.has(config.admin_id)){
        if(message.channel.id == config.commands) this.commands(message);
    } else {
        this.commands(message);
    }
};

module.exports = {CommandHandler};
