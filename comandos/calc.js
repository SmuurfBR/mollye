const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (client, message, args, ops, tools) => {

  if(!args[0]) return message.channel.send(':exclamation: **|** **Por favor, insira um calculo**');

  let resp;
  try {
      resp = math.eval(args.join(' '));
  } catch (e) {
      return message.channel.send(':x: **| Desculpe, insira um calculo valido**');
  }

  const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setTitle('Calculo matemático')
        .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
        .addField('Output', `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed);

}
