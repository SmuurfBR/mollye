const Discord = require("discord.js");
const weather = require('weather-js')

exports.run = (client, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {

if(!result){
message.channel.send(":x: **|** Por favor, me forneça um local válido")
return;
}

  var current = result[0].current;
  var location = result[0].location;
	if (err) message.channel.send(err);
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Tempo por: ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .addField('Fuso horarío: ', `**UTC${location.timezone}**`, true)
    .addField('Tipo de grau: ', "**" + location.degreetype + "**", true)
    .addField('Temperatura: ', `**${current.temperature}** Graus`, true)
    .addField('Sensação térmica: ', `**${current.feelslike}** Graus`, true)
    .addField('Ventos: ', "**" + current.winddisplay + "**", true)
    .addField('Úmidade: ', `**${current.humidity}%**`, true)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
    message.channel.send(embed)
});


}
