const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord iOS'
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Yenidən gəldim");
  response.sendStatus(200);
});

client.on('message', message => {
if (message.content === `<@${client.user.id}>`) {
 message.reply(`Prefix'im: **k.**, Yardım üçün: **k.yardım**`)
}
});

client.on("guildCreate", guild => {
guild.owner.send(`
**Salam!, __${guild.owner.user.username}!__**
**Məni __Qurucusu__ olduğun __${guild.name}__ Serverinə dəvət etdiyin üçün Təşəkkürlər**

`)
})



client.on("ready", async function() {
const voiceChannel = "803673184842678292"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})



var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});









client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'salam') 
    msg.reply('**__Aleykum Salam,Xoş gəldin__<a:ayicik:804320190350622780>**');{
  }
});

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'Necəsən?') {
  }
});






client.on('message', msg => {
  if (msg.content === 'nap1m') {
    msg.reply('yarramı ye!');
  }
}); 





client.on('message', msg => {
  if (msg.content === 'ah bot') {
    msg.reply('noldu?!');
  }
}); 

client.on('message', msg => {
  if (msg.content === 'Necəsən?') {
    msg.reply('yaxşı!');
  }
}); 
 



client.on('message', msg => {
  if (msg.content === 'bo') {
    msg.reply('Hə');
  }
}); 

client.on('message', msg => {
  if (msg.content === 'Ezhel') {
    msg.reply('Koalllll');
  }
}); 




client.on('message', msg => {
  if (msg.content === 'ezhel') {
    msg.reply('Koalllll <:SharpenEmojiPack50:800350116224827402> ');
  }
}); 









const Təriflər = [
  'Civ civim',
  'Möhtəşəmsən',
  'ƏLa',
  'Spamlamasan yaxşı olar.:upside_down: ',
  ':heart:',
  ':thumbsup:',
  'Spamladığın üçün ban verə bilərəm :upside_down:',
];
// Kopyalayıb sonra isə yapışdırarq çoxalta bilərsiz.
var iltifatSayi = 0; // Bura Əl vurma!
client.on("message", async message => {
  if(message.channel.id !== "785472398661124100" || message.author.bot) return;
  iltifatSayi++
  if(iltifatSayi >= 10) { //10-nun yerinə isdədiyiniz rəqəmi yaza bilərsiz.Bu yazdığınız rəqəm Neçə mesajdan sonra gözəl sözlər yazmağı bəlirtəcək.
    iltifatSayi = 0;
    const random = Math.floor(Math.random() * ((Təriflər).length - 1) + 1);
    message.reply(`**${(Təriflər)[random]}**`);
  };
});















client.on("guildMemberRemove", async member => {
  
    if (db.has(`gçkanal_${member.guild.id}`) === false) return;
    var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
    if (!canvaskanal) return;
  
    const request = require("node-superfetch");
    const Canvas = require("canvas"),
      Image = Canvas.Image,
      Font = Canvas.Font,
      path = require("path");
  
    var randomMsg = ["Sunucudan Ayrıldı."];
    var randomMsg_integer =
      randomMsg[Math.floor(Math.random() * randomMsg.length)];
  
    let msj = await db.fetch(`cikisM_${member.guild.id}`);
    if (!msj) msj = `{uye}, ${randomMsg_integer}`;
  
    const canvas = Canvas.createCanvas(640, 360);
    const ctx = canvas.getContext("2d");
  
    const background = await Canvas.loadImage(
      "https://i.hizliresim.com/Wrn1XW.jpg"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = `#D3D3D3`;
    ctx.font = `37px "Warsaw"`;
    ctx.textAlign = "center";
    ctx.fillText(`${member.user.username}`, 300, 342);
  
    let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    const { body } = await request.get(avatarURL);
    const avatar = await Canvas.loadImage(body);
  
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 250, 55, 110, 110);
  
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "ro-BOT-güle-güle.png"
    );
  
      canvaskanal.send(attachment);
      canvaskanal.send(
        msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
      );
      if (member.user.bot)
        return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
    
  });
  
  client.on("guildMemberAdd", async member => {
    if (db.has(`gçkanal_${member.guild.id}`) === false) return;
    var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
  
    if (!canvaskanal || canvaskanal ===  undefined) return;
    const request = require("node-superfetch");
    const Canvas = require("canvas"),
      Image = Canvas.Image,
      Font = Canvas.Font,
      path = require("path");
  
    var randomMsg = ["Sunucuya Katıldı."];
    var randomMsg_integer =
      randomMsg[Math.floor(Math.random() * randomMsg.length)];
  
    let paket = await db.fetch(`pakets_${member.id}`);
    let msj = await db.fetch(`cikisM_${member.guild.id}`);
    if (!msj) msj = `{uye}, ${randomMsg_integer}`;
  
    const canvas = Canvas.createCanvas(640, 360);
    const ctx = canvas.getContext("2d");
  
    const background = await Canvas.loadImage(
      "https://i.hizliresim.com/UyVZ4f.jpg"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = `#D3D3D3`;
    ctx.font = `37px "Warsaw"`;
    ctx.textAlign = "center";
    ctx.fillText(`${member.user.username}`, 300, 342);
  
    let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) ;
    const { body } = await request.get(avatarURL);
    const avatar = await Canvas.loadImage(body);
  
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 250, 55, 110, 110);
  
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "ro-BOT-hosgeldin.png"
    );
  
    canvaskanal.send(attachment);
    canvaskanal.send(
      msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
    );
    if (member.user.bot)
      return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
  });



















///LOG//

client.on("message", msg => {
  var dm = client.channels.cache.get("803562421549400095"); //kanal id//
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(`${msg.author.avatarURL()}`)
      .addField(":boy: Göndərən ", msg.author.tag)
      .addField(":id:  Göndərən ID :", msg.author.id)
      .addField(":globe_with_meridians: Göndərilən Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});

//SON//




const rache = new Discord.MessageEmbed()
.setThumbnail()
.addField(`Kedicik Pro Bot`, `**Salamlar Kedicik Pro Bot Sizin Üçün Vardır**`)
.addField(`Kedicik Pro Bot | Prefix`, `**Botun Prefixi = \`k.\`**`)
.addField(`Kedicik Pro Bot | Yardım Üçün ?`, `**k. Yazmanız Yetərlidir..**`)
.setFooter(`Kedicik Pro Bot Azərbaycanca Qarşınızda`)
.setTimestamp();


client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(rache)

});
client.on('ready', async(message) => {
  client.setInterval(() => {
      let channel = client.channels.cache.get("803618137605931068"); 

 setTimeout(() => {


channel.setName('özəl-söhbət')
channel.setName('yalnız-özəl')
channel.setName('only-özəl')

  }, 3000);
})
});





//EMOJİ//
client.on("message", async m => {
  if(m.content === "k.emojiekle") {
    if(!m.member.hasPermission("ATTACH_FILES")) return m.channel.send("Bu komutu İsdifadə Etmə yetkin Yoxdu.");
    m.channel.send("Emojinin adını girin.");
    m.channel.awaitMessages(a=> a.content && a.author.id === m.author.id, {max:1,time:30000,errors:["time"]})
    .then(i=> {
      m.channel.send("Emoji linkini girin.");
      m.channel.awaitMessages(a=> a.content && a.author.id === m.author.id && !(require("detect-links").replace(a.content) === a.content),{max:1,time:30000,errors:["time"]})
      .then(ii=>{
        if(!ii.array()[0].content.startsWith("http://") && !ii.array()[0].content.startsWith("https://")) return m.channel.send("Geçersiz link.");
          try {
            m.guild.emojis.create(ii.array()[0].content,i.array()[0].content);
            m.channel.send("Emoji Salındı.");
          } catch(err) {
            m.channel.send("Emoji Salına Bilinmədi.");
          }
      })
      .catch(err=>{
        if(err)return console.log(err);
        m.channel.send("Zaman Bitdi.");
      })
    })
    .catch(err=>{
      if(err)return console.log(err);
      m.channel.send("Zaman Bitdi.");
    })
  }
})

//EMOJİ//





//SAYI OYUJU//


client.on("message", async(message) => {
if(message.author.bot) return;
let kanal = client.channels.cache.get('805470809879085136')
if(message.channel.id !== kanal.id) return;

kanal.messages.fetch({ limit: 2 }).then(messages => {
let ilksay = parseInt(messages.map(a => a.content)[1])
let sayi = Math.floor(ilksay + 1)
let sonsay = parseInt(message.content)

if(isNaN(sonsay)) return  message.channel.send('Rəqəm Yazın..').then(msg => {
                msg.delete({ timeout: 900})
                message.delete()
            })

if(sonsay !== sayi) return  message.channel.send('Sıranı Pozmayın').then(msg => {
                msg.delete({ timeout: 900})
                message.delete()
            })
                  })
})






 


