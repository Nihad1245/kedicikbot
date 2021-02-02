const Discord = require("discord.js");
const weather = require('weather-js');

exports.run =  (bot, message, args) => {
  message.react("✅");
  if (!args[0]) return message.channel.send({embed: {
       color: Math.floor(Math.random() * ( + 1)),
       description: (`:no_entry_sign:Şəhər yazsana olm.Mən hardan bililim aaaaa.`)
 }});
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
            if (err) message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign:${err}`)
 
 }}); 
            if (!result) {
                message.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign:Düzgün Şəhər yazın.`)
 
 }}) 
                return; 
            }
            var current = result[0].current; 
            var location = result[0].location;   
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) 
                .setTimestamp()
                .setAuthor(`${current.observationpoint} Şəhəri üçün hava durumu`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00AE86) 
                .addField('İstilik',`${current.temperature} Derece`, true)
                .addField('Hissedilən İstilik',`${current.feelslike} Derece`, true)
                .addField('Külək',current.winddisplay, true)
                .addField('Külək Sürəti',current.windspeed, true)
                .addField('Nəmlik', `${current.humidity}%`, true)
                message.channel.send({embed});
        });
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hava','havadurum'],
  permLevel: 0
};

exports.help = {
  name: 'hava',
  description: 'Havadurumu söyler',
  usage: 'hava [şəhir]'
};
