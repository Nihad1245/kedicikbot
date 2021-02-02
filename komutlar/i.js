const codework3 = require("discord.js");
const codework = require("moment");
const codework2 = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  message.react("<a:yesil_dogru:804333013005631490>");
  const CodeWork = new codework3.MessageEmbed()
    .setColor("BLACK")
    .setFooter(`İstatistik`)
    .addField(
      " **Yaddaş**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      " **<a:alov:804329615534456857>Botun Quruluş Tarixi <a:alov:804329615534456857>**",
      "25.01.2021"
    )
    .addField(
      " **<:calis:793803231742263297> Çalışma Zamanı<:calis:793803231742263297> **",
      codework
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dəqiqə], s [saniyə]")
    )
    .addField(
      "**<a:among:804330163315408897>İsdifadəçilər<a:among:804330163315408897>**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )
    .addField(
      " **<a:sancaq:804330343347388526>Server<a:sancaq:804330343347388526>**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      " **<a:dogru:804330613129609258>Kanallar<a:dogru:804330613129609258>**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("**<:kodlasdirma2:804331101929340969> Discord.JS sürüm<:kodlasdirma2:804331101929340969> **", "v" + codework3.version, true)
    .addField(" **<:kodlasdirma2:804331101929340969> Node.JS sürüm<:kodlasdirma2:804331101929340969> **", `${process.version}`, true)
    .addField("**<:kodlasdirma2:804331101929340969> Ping<:kodlasdirma2:804331101929340969> **", client.ws.ping + " ms", true)
    .addField(
      "**<a:yardim:804329558265298975>CPU<a:yardim:804329558265298975>**",
      `\`\`\`md\n${codework2.cpus().map((i) => `${i.model}`)[0]}\`\`\``
    )
    .addField(" **<a:yardim:804329558265298975>Bit<a:yardim:804329558265298975>**", `\`${codework2.arch()}\``, true)
    .addField(" **<a:yardim:804329558265298975>İşlətim Sistemi<a:yardim:804329558265298975>**", `\`\`${codework2.platform()}\`\``)

    
  return message.channel.send(CodeWork);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};
exports.help = {
  name: 'istatistik',
  
  description: 'CodeWork V12 istatistik',
  usage: 'istatistik'
};