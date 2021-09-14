const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const prefix = '$';

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})
/*
client.once('ready', () => {
    console.log('CaliphBot is online.');
});

client.on('message', message =>{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.channel.send('Pong!');
    }
})
*/
//Keep this as last line.
client.login('ODg3MTM0MTQwNjYxNjYxNzQ3.YT_uDQ.8j5grs8TD7e4FqtMgti2qA21U3E');

