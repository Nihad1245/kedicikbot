const db = require("quick.db");
const Discord = require('discord.js');
const baskan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || baskan.prefix 

let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Bot Yardım Menyü `, client.user.avatarURL)
.setColor('#0a0099')
.setDescription(`<a:tac:796732354810609746>Yaradıcım Nihad<a:tac:796732354810609746>`)  
.addField(`__Arrow__`,`<a:ok:794178955821318146>\`${prefix}arrow <yazı>\` : Arrow Logo Düzəldir.\ `,true)
.addField(`__Blue__`,`<a:ok:794178955821318146>\`${prefix}blue <yazı>\` : Blue Logo Düzəldir.\ `,true)
.addField(`__Booking__`,`<a:ok:794178955821318146>\`${prefix}booking <yazı>\` : Booking Logo Düzəldir.\ `,true)
.addField(`__Bubble__`,`<a:ok:794178955821318146>\`${prefix}bubble <yazı>\` : Bubble Logo Düzəldir.\ `,true)
.addField(`__Bubble 2__`,`<a:ok:794178955821318146>\`${prefix}bubble2 <yazı>\` : Bubble 2 Logo Düzəldir.\ `,true)
.addField(`__Bubble 3__`,`<a:ok:794178955821318146>\`${prefix}bubble3 <yazı>\` : Bubble 3 Logo Düzəldir.\ `,true)
.addField(`__Comic__`,`<a:ok:794178955821318146>\`${prefix}comic <yazı>\` : Comic Logo Düzəldir.\ `,true) 
.addField(`__Cool__`,`<a:ok:794178955821318146>\`${prefix}cool <yazı>\` : Cool Logo Düzəldir.\ `,true)
.addField(`__Discord__`,`<a:ok:794178955821318146>\`${prefix}discord <yazı>\` : Discord Logo Düzəldir.\ `,true)
.addField(`__Fire__`,`<a:ok:794178955821318146>\`${prefix}fire <yazı>\` : Fire Logo Düzəldir.\ `,true)
.addField(`__Gold__`,`<a:ok:794178955821318146>\`${prefix}gold <yazı>\` : Gold Logo Düzəldir.\ `,true)
.addField(`__Gold 2__`,`<a:ok:794178955821318146>\`${prefix}gold2 <yazı>\` : Gold 2 Logo Düzəldir.\ `,true)
.addField(`__Green__`,`<a:ok:794178955821318146>\`${prefix}green <yazı>\` : Green Logo Düzəldir.\ `,true)
.addField(`__Müzik__`,`<a:ok:794178955821318146>\`${prefix}müsiqi <yazı>\` : Müsuqi Logo Düzəldir.\ `,true) 
.addField(`__Skull__`,`<a:ok:794178955821318146>\`${prefix}skull <yazı>\` : Sull Logo Düzəldir.\ `,true) 
.addField(`__Əlyazı__`,`<a:ok:794178955821318146>\`${prefix}əlyazı <yazı>\` : Yazdığınız mesajı əlyazı ilə yazar.\ `,true) 
  .setImage('https://media.discordapp.net/attachments/787958172433776641/794189365336997968/350kb.gif')
 message.channel.send(eklenti) 
  }
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["logo-yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'logo-yardım'
  }; 