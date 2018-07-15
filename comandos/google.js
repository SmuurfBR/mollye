const Discord = require('discord.js');
exports.run = (client, message) => {

let args = message.content.split(' ')
   		args.shift ()
   		message.channel.send ("**Aqui está o resultado da sua pesquisa:** https://www.google.com/#q=" +args.join('%20'))
}
