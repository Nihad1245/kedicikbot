const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
if(!args[0]) {

let lrowsxrd1 = new Discord.MessageEmbed() 
  
.setDescription(`Güncəl Covid-19 Bilgilərini Görmək üçün ;\n\n **${ayarlar.prefix}korona <ölkə kodu>** Komutunu İsdifadə edə Bilərsiniz..`)
.setColor('RED')

message.channel.send(lrowsxrd);
}

let darkcode = args[0].toLowerCase()

.replace('türkiye', 'TR')
.replace('çin', 'CN')
.replace('amerika', 'US')
.replace('japonya', 'JP')
.replace('fransa', 'FR')
.replace('norveç', 'NE')
.replace('isveç',  'SN')
  
let text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${darkcode}`);
const body = text.body;
let ülk = body.countrydata[0].info.title

let lrowsxrd = new Discord.MessageEmbed()

.setColor('')

.setTitle('Covid-19 İstatistik Tablosu')

.setDescription(`Ülke: **${ülk}**`)

.addField('*:microbe: Toplam Muşhaidə :*',`**〘 ${body.countrydata[0].total_cases} 〙**`, false)
.addField('*:syringe: Toplam Sağalan :*',`**〘 ${body.countrydata[0].total_recovered} 〙**`, false)
.addField('*:skull_crossbones: Toplam Ölümlər :*',`**〘 ${body.countrydata[0].total_deaths} 〙**`, false)
.addField('*:test_tube: Bu gün Yoluxanlar :*',`**〘 ${body.countrydata[0].total_new_cases_today} 〙**`, false)
.addField('*:warning: Bugünki Ölümlər :*',`**〘 ${body.countrydata[0].total_new_deaths_today} 〙**`, false)
.addField('*:bangbang:   Ağır Xəstələrin Sayı :*',`**〘 ${body.countrydata[0].total_serious_cases} 〙** `, false)
.addField('*:flag_white:  Ölke :*',`**〘 ${ülk} 〙**`, false)

message.channel.send(lrowsxrd);
};
//lrowsxrd
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['korona'],
  permLevel: 0 
};

exports.help = {
  name: 'korona',
  description: 'lrowsxrd v12',
  usage: 'korona'
};