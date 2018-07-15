const Discord = require('discord.js')
const moment = require ("moment")
const ms = require("ms");
const sm = require("string-similarity");

exports.run = (client, message, args) => {

    if(message.author.bot) return;
  if(message.channel.type !== "text") return;

  let members = [];
  let indexes = [];

  message.guild.members.forEach(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  })

  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;

    let member = message.guild.members.get(indexes[members.indexOf(username)])

     let definedUser = "";
     let definedUser2 = "";
    if(!args[0]) {
      definedUser = message.author
      definedUser2 = message.member
    } else {
      let mention = message.mentions.users.first()
      definedUser = mention || member.user
        definedUser2 = message.mentions.members.first() || message.guild.members.get(args[0]) || member
    }
  const millisCreated = new Date().getTime() - message.guild.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - message.member.joinedAt.getTime();
const daysJoined = millisJoined / 1000 / 60 / 60 / 24;
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**Informações do servidor**")
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setThumbnail(sicon)
  .addField("Nome do servidor :pushpin: : ", "**"+message.guild.name+"**", false)
  .addField("Membros ao total :m: : ", "**"+message.guild.memberCount+"**",false)
  .addField("ID do proprietário do servidor :pushpin: : ", `**${message.guild.owner.id}**`,false)
  .addField("ID do servidor :id: : ", "**"+message.guild.id+"**", false)
  .setImage(sicon)
  .setTimestamp()
  .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
    return message.channel.send(serverembed);

}
