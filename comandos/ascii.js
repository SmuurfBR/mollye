const ascii = require('ascii-art')

exports.run = (client, message, args, ops) => {

  ascii.font(args.join(' '), 'Doom', function(rendered) {

      rendered = rendered.trimRight();

      if (rendered.length > 2000) return message.channel.send(':x: **|** **Desculpe, a mensagem é muito longa**');

      message.channel.send(rendered, {
        code: 'nd'
      });

  });

}
