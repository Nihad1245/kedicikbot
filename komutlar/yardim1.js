const Discord = require("discord.js");
const db = require("quick.db");
const talkedRecently = new Set();

exports.run = async (client, message, params, args) => {
                       if (talkedRecently.has(message.author.id)) {
           return message.reply(".Bu komutu 5 Saniyədi bir İsdifadə Edə bilərsiz.");
    } else {

        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  const quick = new Discord.MessageEmbed()

 .setAuthor("", message.guild.iconURL())   
 .setColor(0xF001FA)
 .setDescription(
      `

**▬▬▬▬▬▬[** :beginner: **Yardım Komutları** :beginner: **]▬▬▬▬▬▬**
> **» -logo-yardım** : Logo Sistəm Komutlarını Göstərir.
> **» -əyləncə-yardım** : Əyləncə Komutlarını Göstərir. 
> **» -digər-yardım** : Əlavə Komutların Yardım Sistemin Göstərir.
**▬▬▬▬▬▬[** :white_flower: **Bilgiləndirmə** :white_flower: **]▬▬▬▬▬▬**

> :exclamation: **Fikirləriniz Önəmlidir!**
> :confused: **Yaradıcım Daim Aktiv Ola Bilmıdiyindən Yeni komutlar Gəlməyib.**
 `
    )
    .setTitle(
      `**▬▬▬▬▬▬[** :cyclone: **Bot** :cyclone: **]▬▬▬▬▬▬** \n ` +
        "\n>Güncəlləmə Yoxdu.\n ",
    )
    .setImage('https://media.discordapp.net/attachments/787958172433776641/794189365336997968/350kb.gif')
  
 return message.channel.send(quick);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help","yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  aliases: ["y"],
  permLevel: 0
};