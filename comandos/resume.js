exports.run = (client, message, args, ops) => {

  let fetched = ops.active.get(message.guild.id);

  if (!fetched) return message.channel.send(':x: **|** **Desculpe, não estou tocando nada atualmente**');

  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':x: **|** **Desculpe, você não está conectado ao mesmo canal de voz do bot**');

  if (fetched.dispatcher.resumed) return message.channel.send(':exclamation: **|** **A Música não está pausada!**');

  fetched.dispatcher.resume();

  message.channel.send(`:white_check_mark: **|** **${fetched.queue[0].songTitle}** **Despausada com sucesso!**`);




}
