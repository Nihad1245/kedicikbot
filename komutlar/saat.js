
const Discord = require('discord.js')

exports.run = (client, message, params)=> {
const embed = new Discord.MessageEmbed()
.setTitle(':flag_az: Azərbaycanın Saatı aşağıda yazılmaqdadır')
.setTimestamp()
.setFooter(`${client.user.username} | Saat =>`, client.user.displayAvatarURL({dynamic:false}))
.setColor("RED")

message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["saat"],
permLevel: 0
};

module.exports.help = {
  name: 'saat',
  description: 'Botunuzu yeniden başlatır....',
  usage: 'saat'
};