const db = require('quick.db');
const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: "create",
    description: "",
    cooldown: 30,
    aliases: [""],
    run: async(client, message, args) => {
        try {
            const photo = db.get(`Generator1_${message.author.id}.img`);
            if (photo == null || undefined) db.set(`Generator1_${message.author.id}`, { img: "https://cdn.discordapp.com/attachments/834808956601892866/836335462065897512/11c2e7497c0b5ede152eabf8bdf4fa46.png" });
            const title = db.get(`Generator2_${message.author.id}.title`);
            if (title == null || undefined) db.set(`Generator2_${message.author.id}`, { title: "N1R0" })
            const color = db.get(`Generator3_${message.author.id}.color`);
            if (color == null || undefined) db.set(`Generator3_${message.author.id}`, { color: "#fff" });
            const px = db.get(`Generator4_${message.author.id}.px`);
            if (px == null || undefined) db.set(`Generator4_${message.author.id}`, { px: "500px" });
            message.channel.startTyping();
            const { registerFont } = require('canvas');
            registerFont('CairoBold.ttf', { family: 'cairo-bold' });
            const Canvas = createCanvas(1920, 1920);
            const ctx = Canvas.getContext('2d');
            const img = await loadImage(photo);
            ctx.drawImage(img, 0, 0, Canvas.width, Canvas.height);
            ctx.strokeStyle = color;
            ctx.strokeRect(0, 0, Canvas.width, Canvas.height);
            ctx.fillStyle = color;
            ctx.font = `${px} cairo-bold`;
            ctx.textAlign = "center";
            ctx.shadowColor = 'black';
            ctx.shadowBlur = 50;
            ctx.fillText(title, 960, 960);
            const attachment = new MessageAttachment(Canvas.toBuffer(), 'img.png');
            message.channel.send(attachment).then(() => {
                message.channel.stopTyping();
            })
        } catch (err) {
            console.error(err)
            message.channel.send(err);
            message.channel.stopTyping();
        }
    }
};