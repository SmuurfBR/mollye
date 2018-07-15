exports.run = (client, message, args, ops) => {

  let fetched = ops.active.get(message.guild.id);

  if (!fetched) return message.channel.send(':exclamation: **|** **Não estou tocando nenhuma música atualmente**').then(value => {
    setInterval(() => {
      value.delete()
    }, 15 * 1000);
    });

  let queue = fetched.queue
  let nowPlaying = queue[0];

  let resp = `__**Tocando agora**__\n**${nowPlaying.songTitle}** **|** **Pedido por:** *${nowPlaying.requester}*\n\n__**Na fila**__\n`;

  for (var i = 1; i < queue.length; i++) {
      resp += `${i}. **${queue[i].songTitle}** **|** **Pedido por:** *${queue[i].requester}*\n`;

  }

  message.channel.send(resp);

}
