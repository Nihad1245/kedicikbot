const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  message.react("<a:onay:804320257794768927>");
  
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu İsdifadə Etmək Üçün **Mesajları Yönət ** Yetkisinə Sahib Olmalısan!");

if (message.deletable) {
message.delete();
}  
  
if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
  
const embed1 = new Discord.MessageEmbed()
  
.setDescription("Lütfən Silinəcək Mesaj Miqdarını Yazın..!")
.setColor('RED')
 message.react("<a:onay:804320257794768927>");

return message.channel.send(embed1).then(m => m.delete(500));
  
}  

let deleteAmount;

if (parseInt(args[0]) > 100) { deleteAmount = 100; } else { deleteAmount = parseInt(args[0]); } 
  
message.channel.bulkDelete(deleteAmount, true)

.then(deleted => message.channel.send(`\`${deleted.size}\` Mesajı Sildim .`))


}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','süpür'],
  permLevel: 3
};

exports.help = {
  name: 'temizle',
  description: 'Mesajları Siler.',
  usage: 'sil'
}; 