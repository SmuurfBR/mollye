const Discord = require('discord.js');
const translate = require('google-translate-api');
const Langs = ['english','french','german','italian', 'japanese','korean','latin','portuguese','russian','spanish'];
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (!args[0]) {

        const embed = new Discord.RichEmbed()
            .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
            .setDescription(`Traduz uma frase ou uma palavra para o idioma escolhido\nUse: m!traduzir <idioma> <texto>`);

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send(`:x: | Dê uma palavra ou frase para traduzir \n\`m!traduzir <idioma> <texto>\``);

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send("**idioma indisponível**. Linguagens disponíveis `english`,`french`,`german`,`italian`, `japanese`,`korean`,`latin`,`portuguese`,`russian`,`spanish`");
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                message.channel.send("Tradução de **" + args + "**");
                message.channel.send(res.text, {code:'css'})
            });

        }

    }

}
