const Discord = require('discord.js');
const talkedRecently = new Set();
let botid = ('')

exports.run = (client, message, args) => {
                         if (talkedRecently.has(message.author.id)) {
           return message.reply("````");
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
.setImage('https://media.discordapp.net/attachments/787958172433776641/794189365336997968/350kb.gif')
.addField('**:white_check_mark: Əyləncə Komutları. :white_check_mark:**',`
**\n:white_small_square: aşk** : Biriylə Sevginizi Ölçər!
**:white_small_square: qartopu** : Birisinə Qartopu Atarsız!
**:white_small_square: alkış** : Alqışlama Gifi Atar!
**:white_small_square: sigara** : Sigaret Çəkərsiz!
**:white_small_square: trump** : Trumpa Yazı yazdırarsız (Saxta)!
**:white_small_square: dayı** :   Taksim Dayının giflərin atar!
**:white_small_square: meme** :   Random Şəkil Atar'!
**:white_small_square: slots** : Slot Oyunu Oynayarsız!`)

.setFooter(`${message.author.tag} Tərəfindən İstənildi.`, message.author.avatarURL())

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["əyləncə-yardım"],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: 'Premium Rolü Hakkındaki Bilgileri Gösterir.',
  usage: 'premium'
};
   