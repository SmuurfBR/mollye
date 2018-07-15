const Discord = require('discord.js');

exports.run = async (client, message, args, ops, tools) => {

  if (!args[0]) return message.channel.send(':exclamation: **|** **Use: m!votacao questão**');

  const embed = new Discord.RichEmbed ()
    .setColor(0xffffff)
    .setFooter('Reaja para votar')
    .setDescription(args.join(' '))
    .setTitle(`Votação criada por ${message.author.username}`);

  let msg = await message.channel.send(embed);

  await msg.react('✅');
  await msg.react('❌');

  message.delete({timeout: 1000});


}
