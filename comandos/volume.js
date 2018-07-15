exports.run = (client, message, args, ops) => {

  let fetched = ops.active.get(message.guild.id);

  if (!fetched) return message.channel.send(":x: **|** **Desculpe, não estou tocando nada atualmente**");

  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':exclamation: **|** **Desculpe, você não está conectado ao mesmo canal de voz do bot!**');

  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send(':exclamation: **|** **Por favor, coloque um número entre 0 e 200**');

  fetched.dispatcher.setVolume(args[0]/100);

  message.channel.send(`:white_check_mark: **|** **Volume da música: ${fetched.queue[0].songTitle} setado com sucesso para ${args[0]}**`);

}
