const ytdl = require('ytdl-core');
exports.run = async (client, message, args, ops) => {

  if (!message.member.voiceChannel) return message.channel.send(':x: **|** **Por favor, conecte-se a um canal de voz**');

  if (!args[0]) return message.channel.send(':x: **|** **Por favor, insira uma URL ou um titulo para este comando**');

  let validate = await ytdl.validateURL(args[0]);

  // Check validation
  if (!validate) {

    let commandFile = require(`./search.js`);
    return commandFile.run(client, message, args, ops);

  }

  let info = await ytdl.getInfo(args[0]);

  let data = ops.active.get(message.guild.id) || {};

  if (!data.connection) data.connection =  await message.member.voiceChannel.join();
  if (!data.queue) data.queue = [];
  data.guildID = message.guild.id;

  data.queue.push({
      songTitle: info.title,
      requester: message.author,
      url: args[0],
      announceChannel: message.channel.id
  });

if (!data.dispatcher) play(client, ops, data);
else {

  message.channel.send(`:notes: **|** **Adicionado a fila:** **${info.title}** **|** **Pedido por:** **${message.author}**`);

}

ops.active.set(message.guild.id, data);

async function play(client, ops, data) {

  client.channels.get(data.queue[0].announceChannel).send(`:notes: **|** **Tocando agora:** **${data.queue[0].songTitle}** **|** **Pedido por:** **${data.queue[0].requester}**`);

  data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
  data.dispatcher.guildID = data.guildID;

  data.dispatcher.once('end', function() {
      finish(client, ops, this);
  });
}

function finish(client, ops, dispatcher) {

  let fetched = ops.active.get(dispatcher.guildID);

  fetched.queue.shift();

  if (fetched.queue.length > 0) {

    ops.active.set(dispatcher.guildID, fetched);

    play(client, ops, fetched);

  } else {

      ops.active.delete(dispatcher.guildID);


      let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
      if (vc) vc.leave();
  }

  }

}
