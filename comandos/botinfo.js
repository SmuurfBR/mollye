const Discord = require('discord.js');
const ms = require("ms");
const moment = require ("moment")
exports.run = (client, message, args) => {
 const ownerBot = client.users.get('314460143909601280').tag;
  let ms = client.uptime;
  let cd = 24 * 60 * 60 * 1000; // Calc days
  let ch = 60 * 60 * 1000; // Calc hours
  let cm = 60 * 1000; // Calc minutes
  let cs = 1000; // Calc seconds
  let days = Math.floor(ms / cd);
  let dms = days * cd; // Days, in ms
  let hours = Math.floor((ms - dms) / ch);
  let hms = hours * ch; // Hours, in ms
  let minutes = Math.floor((ms - dms - hms) / cm);
  let mms = minutes * cm; // Minutes, in ms
  let seconds = Math.round((ms - dms - hms - mms) / cs);
  if (seconds === 60) {
     minutes++; // Increase by 1
     seconds = 0;
  }
  if (minutes === 60) {
     hours++; // Inc by 1
     minutes = 0;
  }
  if (hours === 24) {
     days++; // Increase by 1
     hours = 0;
  }
  let dateStrings = [];

  if (days === 1) {
     dateStrings.push('**1** Dia');
  } else if (days > 1) {
     dateStrings.push('**' + String(days) + '** Dias');
  }

  if (hours === 1) {
     dateStrings.push('**1** Hora' );
  } else if (hours > 1) {
     dateStrings.push('**' + String(hours) + '** Horas');
  }

  if (minutes === 1) {
     dateStrings.push('**1** Minuto');
  } else if (minutes > 1) {
     dateStrings.push('**' + String(minutes) + '** Minutos');
  }

  if (seconds === 1) {
     dateStrings.push('**1** Segundo');
  } else if (seconds > 1) {
     dateStrings.push('**' + String(seconds) + '** Segundos');
  }

  let dateString = '';
  for (let i = 0; i < dateStrings.length - 1; i++) {
     dateString += dateStrings[i];
     dateString += ', ';
  }
  if (dateStrings.length >= 2) {
     dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
     dateString += 'e ';
  }

  dateString += dateStrings[dateStrings.length - 1];
      let bicon = client.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setTitle("**Informações sobre o bot**")
      .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
      .setThumbnail(bicon)
      .addField ("Nome do bot :game_die: : ", "**"+client.user.username+"**", true)
      .addField ("Bot criado em :date: : ",`**${moment.utc(client.user.createdAt).format("D/M/Y, HH:mm:ss")}**`, true )
      // .addField ('Memória utlizada :timer: : ' , `${Math.round(used * 100) / 100} MB/500MB`, true)
      .addField ('Uptime :control_knobs:', dateString, true)
      .addField ('Livraria :books:', '**Discord.js**', true)
      .addField ("ID Do Bot :id:", "**"+client.user.id+"**", true)
      .addField ("ㅤCriador do bot :pushpin:", ownerBot, true)
      .addField ("Servidores ao total :timer:", "**" + client.guilds.size + "**", true)
  	  .addField ("Membros ao Total :spy:", "**" + client.users.size + "**", true)
    	.addField ("Linguagem :rotating_light:", "**JavaScript**", true)
      .addField ("ㅤ", "ㅤ", false)
      .addField ("Me adicione ao seu servidor: ", "**Você Pode Me Adicionar Ao Seu Servidor Clicando** [AQUI](https://discordapp.com/oauth2/authorize?client_id=461524520365195274&scope=bot&permissions=2146958591%22w)", false)
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()


    message.channel.send(botembed);
}
