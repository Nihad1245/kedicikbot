const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args) => {


    let replies = ["https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F20200518_060627.gif?v=1611818978528","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F36.gif?v=1611818946357","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2Flokman_ver_olum_muzugi.gif?v=1611818886720","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2FSPOILER_2-9.gif?v=1611818823400","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2Fbackground%20(12).jpg?v=1611740289783","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2Fa_9c8d6cb51559b033674ed8dd16234ee7.gif?v=1611739752437","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F92a1b0afda93793dfda51143c3cdbef3.gif?v=1611739786203","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F22.gif?v=1611739652121","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F177.gif?v=1611739719411","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F10.gif?v=1611739732069","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F41.gif?v=1611739688415","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F30.gif?v=1611739717544","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2F28.gif?v=1611739698940","https://cdn.glitch.com/66f551a5-11ad-4f07-97a6-f4b795721a0b%2Fa_b88abecad8a63a6a11ff0a2bd7fe590a.gif?v=1611740141867",];
    let result = Math.floor((Math.random() * replies.length));
    let resimembed = new Discord.MessageEmbed()
        .setTitle("Profil Photo Gif;")
        .setColor("RANDOM")
        .setImage(replies[result]);
    message.channel.send(resimembed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pp'], 
  permLevel: 0
};

exports.help = {
  name: 'pp',
  description: 'CodeWork V12 resimçiz', 
  usage: 'pp'
};