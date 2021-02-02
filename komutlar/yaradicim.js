const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const yapımcım = new Discord.MessageEmbed()
  
  .setTitle('Yaradıcım ;')
  
  .setColor("GREEN")
  
  .setThumbnail('https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2Fcool.png?v=1611741307507')
  
  .setDescription('<:kodlasdirma:800350053469257728> Nihad Gəncəliyev <:kodlasdirma:800350053469257728> ')
  
  message.channel.send(yapımcım)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['yaradıcım'],
  permLevel: 0
}

exports.help = {
  name: "yaradıcım",
  description: "Botun yapımcılarını gösterir.",
  usage: "yaradıcım"
}