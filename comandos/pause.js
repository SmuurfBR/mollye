exports.run = (client, message, args, ops) => {

  let fetched = ops.active.get(message.guild.id);

  if (!fetched) return message.channel.send(':x: **|** **Desculpe, não estou tocando nada atualmente**');

  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':x: **|** **Desculpe, você não está conectado ao mesmo canal de voz do bot**');

  if (fetched.dispatcher.paused) return message.channel.send(':exclamation: **|** **Música já está pausada!**');

  fetched.dispatcher.pause();

  message.channel.send(`:white_check_mark: **|** **${fetched.queue[0].songTitle}** **Pausada com sucesso!**`);




}
