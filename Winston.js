const Discord = require('discord.js');
const Winston = new Discord.Client();
const fs = require('fs');
const config = require('./json/config.json');
const {CommandHandler} = require('./TextCommands');

let source = fs.readdirSync('./');
Winston.filerequest = new Map();
source.forEach(file => {
    if(file.endsWith('.js') && !file.startsWith('Winston')){
        console.log(`Starting ${file}. . .`);
        Winston.filerequest.set(file.split('.')[0], require(`./${file}`));
        console.log(`${file} complete`);
    }
})

Winston.on('ready', () => {
    console.log('Bot Online!');
    Winston.user.setActivity("Khan Academy", {type: "Watching"});
});

Winston.on('message', message => {
    if(message.content.startsWith('~') && !message.author.bot){
        CommandHandler.checkValidity(message);
    }
});

Winston.login(config.token);
