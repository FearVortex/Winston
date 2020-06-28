'use strict';
const {Client, MessageEmbed} = require('discord.js');
const client = new Client();
const token = "NzA0NDg5NTc2Mzk5NjM0NDcy.XvfFBw.0CYCmG2EWqd24XFMaJirFdt1iXE";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("to Josue's orders", {type:"LISTENING"});
});

client.on('guildMemberAdd', async member => {
  var welcome = 'Welcome to the CS++ discord server. ';
  var description = 'Here you can ask for help on homework or coding problems.';
  var info = 'Choose your role on #announcements';
  const embed = new MessageEmbed()
    .setTitle('***You Just Joined CS++ Discord***')
    .setDescription(welcome + description + info)
    .addField('_**Member: **_', member.user.username)
    .setColor('#04DF25')
    .setThumbnail(member.user.avatarURL())
    .setFooter('Welcome!')
  const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
  if(!channel) return;
  channel.send(embed);
  console.log("Succesfully Executed")
});

client.on('guildMemberRemove', async member => {
  const embed = new MessageEmbed()
    .setTitle('***Bye CS++ Member***')
    .addField('_**Member:**_', member.user.username)
    .setColor('#FD0404')
    .setThumbnail(member.user.avatarURL())
    .setFooter('See you later')
  const channel = member.guild.channels.cache.find(channel => channel.name === "welcome")
  if(!channel) return;
  channel.send(embed);
  console.log("Succesfully Executed")
});

client.login(token);