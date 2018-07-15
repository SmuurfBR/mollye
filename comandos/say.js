const Discord = require('discord.js');
exports.run = (client, message, args) => {

 //!say Hi!
  //Hi
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}
