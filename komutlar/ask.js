exports.run = async (client, msg, args) => {
    let ask=[
      " %3 ",
      "%26",
      "%6",
      "%12 ",
      "Sizi Evləndirək :)",
      " %20 ",
      " %23 ",
      " Aga beeee,Səni heç kim Sevmir :(",
      " %29 ",
      " %30 ",
      " %40 ",
      " Sevginin Başın burax,Dərsivi oxu",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimlə yoxlayacaqsan onu etiketlə....')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 12)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ask"],
    permLevel: 0
   };
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }