onst Discord = require("discord.js");
const client = new Discord.Client();
const Prefix = "t."

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === Prefix + 'fangroupsimulator') {
    msg.reply('Go to #script-release' ${client.user.tag}!);
  }
});


client.login('NDEzOTU2Mzc0NDAyMzAxOTUy.DWhuRA.yEI6iqqiT9LWlfryfTGGE94h0Fo');
