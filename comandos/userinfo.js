const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
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
  const millisCreated = new Date().getTime() - definedUser.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

  let uEmbed = new Discord.RichEmbed()
  .setDescription("**Informações sobre o usúario**")
  .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
  .setThumbnail(definedUser.displayAvatarURL)
  .addField("Apelido :name_badge: : ", "**"+definedUser.username+"**", true)
  .addField("Discriminator :hash: : ", "**"+definedUser.discriminator+"**", true)
  .addField("ID : ", "**"+definedUser.id+"**", true)
  .addField("Usúario BOT :robot: : ", `${definedUser.bot ? "**Sim**" : "**Não**"}`, true)
  .addField("Status : ", "**"+definedUser.presence.status+"**", true)
  .addField("Jogando :flower_playing_cards: : ", "**"+`${definedUser.presence.game ? `${definedUser.presence.game.name}` : "Não está jogando nada"}`+"**", true)
  .addField("Data de criação da conta :calendar: : ", `**${moment.utc(definedUser.createdAt).format("D/M/Y, HH:mm:ss")} ${daysCreated.toFixed(0)} Dias**`,true)
  .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

  message.channel.send(uEmbed);
}
