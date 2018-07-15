const Discord = require('discord.js');
const fs = require("fs");
exports.run = (client, message, params) => {
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;

var HelpEmbed = new Discord.RichEmbed()
.setDescription(`Comandos de moderação!`)
.setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
.addField("Comandos de moderação :tools:", ` \`m!ban\` bane alguém do servidor! \n \`m!kick\` expulsa alguém do servidor \n \`m!mute\` muta alguém do servidor\n \`m!clear\` limpa X mensagens do chat`)
.setFooter("๖̶̶̶ζ͜͡Bot feito por SmuurfBR ͜͡ζ̶̶̶๖", client.users.get('314460143909601280').displayAvatarURL);

message.channel.send("**Da uma olhadinha nos seus DM\'s :wink:**")
message.author.send(HelpEmbed).then(msg => {
msg.delete(30000);
});

var HelpEmbed2 = new Discord.RichEmbed()
.setColor(`${message.guild.me.displayHexColor!=='Discord.redcolor' ? message.guild.me.displayHexColor : 0xffffff}`)
.addField("Comandos de informações :question:", ` \`m!help\` exibe os comandos do servidor \n \`m!botinfo\` exibe informações sobre o bot \n \`m!serverinfo\` exibe informações sobre o servidor \n \`m!userinfo\` exibe informações sobre o usúario \n\`m!ping\` exibe seu ping \n \`m!invite\` envia um invite link para convidar o bot \n \`m!tempo\` exibe o tempo de uma cidade X \n \`m!google\` faz pesquisas no google \n \`m!youtube\` faz pesquisas no youtube`)
.setFooter("๖̶̶̶ζ͜͡Bot feito por SmuurfBR ͜͡ζ̶̶̶๖", client.users.get('314460143909601280').displayAvatarURL);

message.author.send(HelpEmbed2).then(msg => {
msg.delete(30000);
});

var HelpEmbed3 = new Discord.RichEmbed()
.setColor(`${message.guild.me.displayHexColor!=='Discord.bluecolor' ? message.guild.me.displayHexColor : 0xffffff}`)
.addField("Comandos de música :notes: ", ` \`m!play\` toca uma música \n \`m!skip\` Pula a Música \n \`m!sair\` Sai do canal de voz \n \`m!pause\` Pausa a música\n \`m!resume\` Despusa a música\n \`m!volume\` Altera o volume da música\n \`m!queue\` Vê a queue`)
.setFooter("๖̶̶̶ζ͜͡Bot feito por SmuurfBR ͜͡ζ̶̶̶๖", client.users.get('314460143909601280').displayAvatarURL);

message.author.send(HelpEmbed3).then(msg => {
msg.delete(30000);
});

var HelpEmbed4 = new Discord.RichEmbed()
.setColor(`${message.guild.me.displayHexColor!=='Discord.bluecolor' ? message.guild.me.displayHexColor : 0xffffff}`)
.addField("Comandos diversos :confetti_ball: ", ` \`m!votacao\` Abre uma votação \n \`m!avatar\` exibe o avatar de uma pessoa X \n \`m!roll\` escolhe um numero de 0 até o número X \n \`m!say\` o bot envia a mensagem que você digitou\n \`m!calc\` Faz um calculo\n \`m!ascii\` Envia uma mensagem em ascii`)
.setFooter("๖̶̶̶ζ͜͡Bot feito por SmuurfBR ͜͡ζ̶̶̶๖", client.users.get('314460143909601280').displayAvatarURL);

message.author.send(HelpEmbed4).then(msg => {
msg.delete(30000);
});
}
