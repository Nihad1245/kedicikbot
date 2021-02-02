const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args) => {


    let replies = ["https://media.discordapp.net/attachments/778158015001657384/804016717982466068/unknown.png",];
    let result = Math.floor((Math.random() * replies.length));
    let resimembed = new Discord.MessageEmbed()
        .setTitle("Çək Çək Çək")
        .setColor("RANDOM")
        .setImage(replies[result]);
    message.channel.send(resimembed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g'], 
  permLevel: 0
};

exports.help = {
  name: 'talpa',
  description: 'CodeWork V12 resimçiz', 
  usage: 'g'
};