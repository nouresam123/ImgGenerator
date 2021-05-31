const chalk = require('chalk');
const figlet = require('figlet');

module.exports = async(client) => {
    console.log(chalk.yellow(figlet.textSync('IMG Generator', { horizontalLayout: 'full' })));
    console.log(chalk.red(`Bot started!
=====================================
> Users: ${client.users.cache.size}
> Channels: ${client.channels.cache.size}
> Servers: ${client.guilds.cache.size}
> Bot Ping: ${client.ws.ping}  XD
> Prefix: ${client.config.prefix}
> Developer: @ニロ#3121
> Support: https://discord.gg/YJ6mUdgTsc
=====================================`))
    client.user.setActivity("NAAR Codes ✨");

}