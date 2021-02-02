const Discord = require("discord.js");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;

exports.run = function(client, message, args) {
  var soru = args.join(" ");

  if (!soru)
    return message.reply(
      "**Bir işləm yazın** `Örnək`: **!hesabla <işləm>**"
    );
  else {
    let cevap;
    try {
      cevap = math.eval(soru);
    } catch (err) {
     return message.channel.send("**Xətalı İşləm **" + err);
    }

    const Embedmeyrnn = new Discord.MessageEmbed()
      .setImage('https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif')
      .addField("Sual", soru)
      .addField("Cavab", cevap);

    return message.channel.send(Embedmeyrnn);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "hesabla",
  description: "Belirtilen işlemi yapar.",
  usage: "hesabla <işlem>"
};