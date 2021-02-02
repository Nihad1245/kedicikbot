const Discord = require("discord.js");

exports.run = (client, msg, args) => {

let kedicik = args.slice(0).join(" ");
if (kedicik.length < 1) {

return msg.reply("** | Kimə qartopu atmaq istəyirsən?etiketlə yada adın yaz!**");


} else {

    msg.channel
      .send("<=====     :snowflake:")
      .then(nmsg => nmsg.edit("<=====  :snowflake:"))
      .then(nmsg => nmsg.edit("<====  :snowflake:"))
      .then(nmsg => nmsg.edit("<==== :snowflake:"))
      .then(nmsg => nmsg.edit("<===:snowflake:"))
      .then(nmsg => nmsg.edit("<==:snowflake:"))
      .then(nmsg => nmsg.edit("<=:snowflake:"))
      .then(nmsg => nmsg.edit("<=:snowflake:"))
      .then(nmsg => nmsg.edit("<:snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(`${kedicik} artıq :snowman: oldu.:)`));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["qartopu"],
  permLevel: 0
};

exports.help = {
  name: "kartopu",
  description: "yt.com/synex",
  usage: "qartopu"
};
