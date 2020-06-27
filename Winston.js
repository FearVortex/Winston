const Discord = require('discord.js');
const Winston = new Discord.Client();

const config = require('./json/config.json');

Winston.on('ready', () => {
    
});

Winston.login(config.token);