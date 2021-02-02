const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
  
let times = await db.fetch(`çalışmasüresi_${message.author.id}`)
  let day = 1020600
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ İşləmək Üçün ${time.minutes ? time.minutes + ' dəqiqə,' : ''} ${time.seconds ? time.seconds + ' saniyə gözdə! sonra yenidən yoxla ⏱' : 'təkrar işdə!'}`))
  return
  }//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let works = ["Süpermarkettə","Maqazində","Bazarda","Fabrikada","Ayaqqabı Mağazasında ","Restaranda"]
  var work = works[Math.floor(Math.random() * works.length)];
let moneys = rastgeleMiktar(600,1200);
      message.channel.send(new Discord.MessageEmbed()
                   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                   .setColor("YELLOW")
                   .setDescription(`${work} işlədin və ${moneys} 💸 qazandın!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
db.set(`çalışmasüresi_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)
    
 };
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
  aliases: ["işdə","maaş"],
};

exports.help = {
  name: 'işdə',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\