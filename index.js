require("./src/utils/express")
const { Collection, Client, MessageEmbed } = require('discord.js');
const client = new Client();
const fs = require('fs');
const chalk = require('chalk');
const db = require('quick.db')

client.config = require('./config.js');
client.commands = new Collection();
client.devs = config.devs;

fs.readdir('./src/events/', (err, files) => {
    if (err) return console.log(chalk.red.bold(err));
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./src/events/${file}`);
        let eventName = file.split('.')[0];
        console.log(chalk.green.bold("Loading Event: ") + chalk.red.bold(`"${eventName}"`));
        client.on(eventName, event.bind(null, client));
    });
});
fs.readdir(`./src/commands/`, (err, files) => {
    if (err) return console.log(chalk.red.bold(err));
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const command = require(`./src/commands/${file}`);
        let commandName = file.split('.')[0];
        console.log(chalk.green.bold("Loading Command: ") + chalk.red.bold(`"${commandName}"`))
        client.commands.set(command.name, command);
    })
});

client.login(client.config.token).catch(err => {
    console.log(chalk.red.bold("THE TOKEN IS INVIELD"))
    console.table({
        How_To_FIX_1: "Please Check Is The Token Is Right!",
        How_To_FIX_2: "Accounts tokens do not work!",
        How_To_FIX_3: "Check the parentheses!",
        How_To_FIX_4: "You Can Call The Support For More Information!!"
    })
})
