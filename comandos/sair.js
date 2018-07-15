exports.run = (client, message, args, ops) => {

  if (!message.member.voiceChannel) return message.channel.send(':x: **|** **Por favor, conecte-se a um canal de voz**');

  if (!message.guild.me.voiceChannel) return message.channel.send(':x: **|** **Desculpe, o bot não está conectado a nenhum canal**');

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(':x: **|** **Você não está conectado ao mesmo canal do bot**');

  message.guild.me.voiceChannel.leave();

  message.channel.send(':white_check_mark: **|** **Me desconectei do canal de voz**');

}
