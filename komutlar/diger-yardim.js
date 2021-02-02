const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('')

exports.run = (client, message, args) => {
                         if (talkedRecently.has(message.author.id)) {
           return message.reply("``Bu komutu 5 saniyədə Bir İsdifadə edə bilərsiniz``");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
    const embed = new Discord.MessageEmbed()
  .setColor(0xF001FA)
.setImage('')
.addField('**<:crown:799628207891677235>  **',`
**\n:white_small_square: yaradıcım** : Yaradıcını Göstərər!
**:white_small_square: pp** : Random Şəkil və Gif Atar!`)

.setFooter(`${message.author.tag} Tərəfindən İstənildi.`, message.author.avatarURL())

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["digər-yardım"],
  permLevel: 0,
};

exports.help = {
  name: 'digər-yardım',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'diger-yardim'
};
   