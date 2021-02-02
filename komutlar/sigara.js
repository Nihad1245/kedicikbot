const Discord = require("discord.js");

exports.run = (client, msg, args) => {

let kedicik = args.slice(0).join(" ");
if (kedicik.length < 2) {

return msg.reply("**:smoking: |Hansı sigareti çəkmək istəyirsən adın yaz..!**");

} else {

    msg.channel
      .send(":japanese_goblin::smoking: :cloud::cloud::cloud::cloud::cloud::cloud:")
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud::cloud::cloud::cloud:"))
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud::cloud::cloud::cloud::cloud::cloud::cloud:"))
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud::cloud::cloud::cloud::cloud::cloud:"))
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud::cloud::cloud::cloud:"))
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud::cloud:"))
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud::cloud::cloud::cloud::cloud::cloud:"))
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud::cloud::cloud::cloud:"))
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud:"))
      .then(nmsg => nmsg.edit(":japanese_goblin::smoking: :cloud::cloud:"))
      .then(nmsg => nmsg.edit(`${kedicik} Siqaret bitdi..Sigret çəkmək yaxşı deyil.:no_smoking: Mən çəkdim sən çəkmə :)`));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sigara"],
  permLevel: 0
};

exports.help = {
  name: "sigara",
  description: "",
  usage: "sigara"
};
