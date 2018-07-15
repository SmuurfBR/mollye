exports.run = (client, message, args) => {

  message.channel.send(`:ping_pong: **|** ***Aproximadamente ${Math.round(client.ping)}ms!***`);

}
