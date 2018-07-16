const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ft = new Fortnite(process.env.FORTNITE_API);

exports.run = (client, message, args, ops, tools) => {
  message.delete();
  //!fortnite SmuurfBR PC
  let username = args[0];
  let platform = args[1] || "pc";

  let data = ft.user(username, platform).then(data => {
  console.log(data)
    
      let stats = data.lifetimeStats;
      let kills = stats.find(s => s.stat == 'kills');
      let wins = stats.find(s => s.stat == 'wins');
      let kd = stats.find(s => s.stat == 'kd');
      let mPlayed = stats.find(s => s.stat == 'matchesPlayed');
      let tPlayed = stats.find(s => s.stat == 'timePlayed');
      let asTime = stats.find(s => s.stat == 'avgSurvivalTime');

      let embed2 = new Discord.RichEmbed()
      .setTitle("Fortnite Stats")
      .setAuthor(data.username)
      .setColor(0xffffff)
      .addField("🔪 | `Kills`", kills.value, true)
      .addField("🏆 | `Vitorias`", wins.value, true)
      .addField("🛡 | `K/D`", kd.value, true)
      .addField("🔎 | `Partidas`", mPlayed.value, true)
      .addField("📊 | `Tempo jogado`", kills.value, true)
      .addField("📈 | `Tempo de sobrevivência`", kills.value, true)

    message.channel.send(embed2);

  }).catch(e => {
      console.log(e);
      message.channel.send(":exclamation: **| Não foi possivel encontrar o usúario**")
  });

}
