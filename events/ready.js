const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: !`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } Adı İlə giriş edildi!`
  );
  client.user.setStatus("AVUYE");
  var oyun = [
       "K💛Logo botu",
       "logo generator", 
       "Yaradıcım Nihad",
       "🌟", 
       "✨",
       "⚡ ",
      "Prefixim k.",
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "\🌟 ");
  }, 2 * 2500);
};

