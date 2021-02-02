const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("İndi deyirəm gözdə 1 dəqiqə..").then(message => {

    var synex = [

      "**BAKIDA YAŞAYAN ADAM NİYƏ FRANSADA ÖLƏ BİLMƏZ? +NİYƏ? - ÇÜNKİ O HƏLƏ YAŞAYIR** :joy:",
      "**Dünyanın ən şirin oğlan adı hansıdı? Hansı? baloğlan :joy:**",
      "**+qoy durumda, qoymasam dura bilmərsən? aha aha aha** ",
      "**danışan əlidi? yox ayağıdı :rofl: muhahahah**",
      "**** ",
      "****",
    ];

    var synex = synex[Math.floor(Math.random() * synex.length)];

    message.edit(`${synex}`);
  
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cm"],
  permLevel: 0
};

exports.help = {
  name: "zarafat",
  description: "Malafatını Söyler.",
  usage: "zarafat"
};