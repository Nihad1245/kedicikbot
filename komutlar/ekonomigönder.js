const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let para = db.fetch(`para_${message.author.id}`)
  
  let etiket = message.mentions.users.first()

  let  miktar = args[1]
  
  if(!etiket) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                   
                      .setDescription(`Kiməsə Pul Vermək Üçün Birini Etiketləməlisən!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(! miktar) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`Göndərəcəyin Miqdarı Yaz!
                     \`c!gönder <miktar || hepsi>\``))
  if(miktar < 0 ||  miktar.startsWith('0') ) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Daxil Etdiyin Miqdar Keçərli Bir Sayı Deyil !?`));
 if(miktar === 'all' || miktar === 'hepsi') {
   if(para < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Pulun Yoxdu :(.`))//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
db.add(`para_${etiket.id}`, para)
db.add(`para_${message.author.id}`, -para)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Əla, ${etiket}'Adlı Adama ${para} 💸 göndərdin!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
 } else {
  if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Daxil Etdiyin Miqdar Keçərli Bir Sayı Deyil !?`))
 } //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(etiket.id === message.author.id) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))               
                      .setDescription(`⛔ Özünə Pul Göndərə Bilməzsən!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))                 
                      .setDescription(`⛔ Əlində ${para ? "sadəcə " + para + " 💸 var!": "Kasıbçılıqdı Pul Yoxdu!"} `))
if(miktar === 'all' || miktar === 'hepsi') {
  return;
}  else { //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  message.channel.send(new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))  
                .setDescription(`✅ Əla,${etiket} Adlı Adama ${miktar} 💸 göndərdin!`))
  db.add(`para_${etiket.id}`, miktar)
  db.add(`para_${message.author.id}`, -miktar)

}};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["göndər"],
  permLevel: 0
};

exports.help = {
  name: 'göndər',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\