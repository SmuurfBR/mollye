const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let definedNumber = message.content.substring(6)

if(!definedNumber) {
  let result = Math.floor((Math.random() * 100) + 1);
  message.channel.send(":white_check_mark: **|** Você tem o número **" + result + "**");
} else {

  let result = Math.floor((Math.random() * definedNumber) + 1);
  message.channel.send(":white_check_mark: **|** Você tem o número **" + result + "**");
}
}
