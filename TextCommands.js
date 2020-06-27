const Discord = require('discord.js');
const {Winston} = require('./Winston');
const config = require('./json/config.json');
const fs = require('fs');

var CommandHandler = {};

var TextCommand = function(name, output){

}

CommandHandler.commands = function(message){
    let PREFIX = '~';
    let args = message.content.slice(PREFIX.length).split(" ");
    switch(args[0]){
        
    }
}

CommandHandler.checkValidity = function(message){
    if(!message.member.roles.cache.find(config.admin_id)){
        if(message.channel.id == config.commands) this.commands(message);
    } else {
        this.commands(message);
    }
};
