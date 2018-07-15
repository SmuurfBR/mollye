exports.run = async (client, message, args, ops) => {

  let fetched = ops.active.get(message.guild.id);

  if (!fetched) return message.channel.send(':x: **|** **Não estou tocando nenhuma música atualmente**');

  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':exclamation: **|** **Desculpe, você não está conectado ao mesmo canal de voz do bot!**');

  let userCount = message.member.voiceChannel.members.size;

  let required = Math.ceil(userCount/2);

  if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

  if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`:exclamation: **|** **Desculpe, você já votou para pular a música!** **${fetched.queue[0].voteSkips.length}/${required} Voteskips**`);

  fetched.queue[0].voteSkips.push(message.member.id);

  ops.active.set(message.guild.id, fetched);

  if (fetched.queue[0].voteSkips.length >= required) {

    message.channel.send(':white_check_mark: **|** **A Música foi pulada com sucesso!**');

    return fetched.dispatcher.emit('end');

  }

  message.channel.send(`:white_check_mark: **|** **Você votou para pular a música!** **${fetched.queue[0].voteSkips.length}/${required} Voteskips**`);

}
