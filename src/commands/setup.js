const db = require('quick.db');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "setup",
    description: "SetUp Your Img",
    cooldown: 10,
    aliases: [""],
    run: async(client, message, args) => {
        try {
            if (args[0] === "img") {
                if (!args[1]) {
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("❌ | Error", message.author.avatarURL({ dynamic: true }))
                        .setColor("RED")
                        .setDescription("**❌ | Please Type The Img URL Befor The Command!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                } else {
                    db.set(`Generator1_${message.author.id}`, {
                        img: args[1]
                    })
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("✅ | Done", message.author.avatarURL({ dynamic: true }))
                        .setColor("GREEN")
                        .setDescription("**✅ | Done Set The Img!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                }
            } else if (args[0] === "title") {
                if (!args[1]) {
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("❌ | Error", message.author.avatarURL({ dynamic: true }))
                        .setColor("RED")
                        .setDescription("**❌ | Please Type The Img Title Befor The Command!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                } else {
                    db.set(`Generator2_${message.author.id}`, {
                        title: args[1]
                    })
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("✅ | Done", message.author.avatarURL({ dynamic: true }))
                        .setColor("GREEN")
                        .setDescription("**✅ | Done Set The Title!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                }
            } else if (args[0] === "color") {
                if (!args[1]) {
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("❌ | Error", message.author.avatarURL({ dynamic: true }))
                        .setColor("RED")
                        .setDescription("**❌ | Please Type The Title Color Befor The Command!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                } else if (!args[1].startsWith('#')) {
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("❌ | Error", message.author.avatarURL({ dynamic: true }))
                        .setColor("RED")
                        .setDescription("**❌ | Title Color Have To Start With # Like: #fff!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                } else {
                    db.set(`Generator3_${message.author.id}`, {
                        color: args[1]
                    })
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("✅ | Done", message.author.avatarURL({ dynamic: true }))
                        .setColor("GREEN")
                        .setDescription("**✅ | Done Set The Title Color!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                }
            } else if (args[0] === "font") {
                if (!args[1]) {
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("❌ | Error", message.author.avatarURL({ dynamic: true }))
                        .setColor("RED")
                        .setDescription("**❌ | Please Type The Font Size Befor The Command!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                } else if (!args[1].endsWith("px")) {
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("❌ | Error", message.author.avatarURL({ dynamic: true }))
                        .setColor("RED")
                        .setDescription("**❌ | Font Size Have To Ends With px Like: 24px!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                } else {
                    db.set(`Generator4_${message.author.id}`, {
                        px: args[1]
                    })
                    message.channel.send(
                        new MessageEmbed()
                        .setAuthor("✅ | Done", message.author.avatarURL({ dynamic: true }))
                        .setColor("GREEN")
                        .setDescription("**✅ | Done Set The Font Size!.**")
                        .setThumbnail(message.author.avatarURL({ dynamic: true }))
                        .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
                    )
                }
            } else if (args[0] === "list") {
                const img = db.get(`Generator1_${message.author.id}.img`);
                if (img == null || undefined) db.set(`Generator1_${message.author.id}`, { img: "https://cdn.discordapp.com/attachments/834808956601892866/836335462065897512/11c2e7497c0b5ede152eabf8bdf4fa46.png" });
                const title = db.get(`Generator2_${message.author.id}.title`);
                if (title == null || undefined) db.set(`Generator2_${message.author.id}`, { title: "N1R0" })
                const color = db.get(`Generator3_${message.author.id}.color`);
                if (color == null || undefined) db.set(`Generator3_${message.author.id}`, { color: "#fff" });
                const px = db.get(`Generator4_${message.author.id}.px`);
                if (px == null || undefined) db.set(`Generator4_${message.author.id}`, { px: "500px" });
                message.channel.send(
                    new MessageEmbed()
                    .setThumbnail(message.author.avatarURL({ dynamic: true }))
                    .setAuthor("📜 | Data List", message.author.avatarURL({ dynamic: true }))
                    .setColor(color)
                    .setDescription(title + "\n" + "With `" + px + "` Size  " + "\n" + "With `" + img + "` Img")
                    .setFooter("Requested By: " + message.author.tag, message.author.avatarURL({ dynamic: true }))
                )
            } else if (args[0] === "clear") {
                message.channel.send(
                    new MessageEmbed()
                    .setThumbnail(message.author.avatarURL({ dynamic: true }))
                    .setAuthor("🗃 | Clear", message.author.avatarURL({ dynamic: true }))
                    .setColor("YELLOW")
                    .setDescription("**🗃 | Your Data Has Been Removed!.**")
                    .setFooter("Requested By: " + message.author.tag, message.author.avatarURL({ dynamic: true }))
                ).then(() => db.delete(`Generator4_${message.author.id}`)).then(() => db.delete(`Generator3_${message.author.id}`)).then(() => db.delete(`Generator2_${message.author.id}`)).then(() => db.delete(`Generator1_${message.author.id}`))
            } else {
                message.reply(
                    new MessageEmbed()
                    .setAuthor("🤖 | Setup Orders!.", message.author.displayAvatarURL({ dynamic: true }))
                    .setColor("YELLOW")
                    .setDescription("`img`, `title`, `color`, `font`, `list`, `clear`")
                    .setThumbnail(message.author.avatarURL({ dynamic: true }))
                    .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                )
                console.log(db.all())
            }
        } catch (err) {
            console.error(err)
        }
    }
};