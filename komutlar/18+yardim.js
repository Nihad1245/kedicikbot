const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('')

exports.run = (client, message, args) => {
  message.react("<a:onay:804320257794768927>");
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
.addField('**:underage:<a:nida:796734789595168768>NSFW18 KOMUTLARI<a:nida:796734789595168768>:underage:  **',`
**\n:white_small_square: pgif** : Gif Atar!
**:white_small_square: pussy** : Random Gif və Şəkil Atar!
**:white_small_square: 4k** : Random Şəkil Atar!
**:white_small_square: ass** : Random Gif və Şəkil Atar!
**:white_small_square: hentai** : Random Anime Gif və Şəkil Atar!
**:white_small_square: boobs** : Random Şəkil Atar!`)

.setFooter(`${message.author.tag} Tərəfindən İstənildi.`, message.author.avatarURL())

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["18"],
  permLevel: 0,
};

exports.help = {
  name: '18',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: '18'
};
   