const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = (client, msg, args) => {

  if (msg.channel.nsfw === false) {
 const embed = new Discord.MessageEmbed()
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      const pixelien = new Discord.MessageEmbed()
      .setAuthor(`4K`)
      .setTitle("Al Bax :)")
      .setImage(response.body.message)
      .setColor("RANDOM")
      .setURL(response.body.message)
      msg.channel.send(pixelien);
    });
  } else {
    msg.channel.send("Bu kanalda **NSFW** Bağlıdı bura ata bilmərəm")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['porno','4k'],
  permLevel: 0
};

exports.help = {
  name: 'pgif',
  description: 'NSFW Resimleri Gösterir',
  usage: 'pgif'
};