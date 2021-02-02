const Discord = require('discord.js');

const synex = [
    "hmm.Bəli",
    "Dı dıXeyr",
    "Bəlkəəəə",
    "Olə bilər",
    "İşıl İşıl her yerr",
    "Oooooo",
    "Error404",
    "Bilmem",

];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = synex[Math.floor(Math.random() * synex.length)];

    if(!soru) return message.reply('Bir sual yaz.**Doğru İsdifadə `+fal <sual>` ')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["fal"],
  permLevel: 0 
};

exports.help = {
  name: 'fal', 
  description: 'Sihirli 8ball sorularınızı cevaplar',
  usage: 'fal <soru>'
};