const fs = require("fs");
const Discord = require("discord.js");
const { prefix, discordToken } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

function readDirectory(path) {
	const commandFiles = fs.readdirSync(path);
	for (const file of commandFiles) {
		if (fs.statSync(`${ path }/${ file }`).isDirectory()) {
			readDirectory(`${ path }/${ file }`);
		} else {
			const command = require(`${ path }/${ file }`);
			client.commands.set(command.name, command);
		}
	}
}
readDirectory("./commands");

client.on("ready", () => {
  console.log(`Logged in as ${ client.user.tag }!`);
  client.user.setActivity("with guns | k.help");
});

client.on("message", (message) => {
  if (message.author.bot) return;

	if (!message.content.startsWith(prefix)) return;

  const arguments = message.content.slice(prefix.length).split(/ +/);
	const commandName = arguments.shift().toLowerCase();

  const command = client.commands.get(commandName) || client.commands.find((command) => command.aliases && command.aliases.includes(commandName));
  if (!command) return;

  if (command.arguments && !arguments.length) {
		return message.reply(`you didn't provide any arguments baka!!\nThe proper usage would be: \`${ prefix }${ command.name } ${ command.usage }\``);
  }

  try {
  	command.execute(message, arguments);
  } catch (error) {
  	console.error(error);
  	message.reply("there was an error trying to execute that command!");
  }
});

client.on("error", (error) => console.error("The websocket connection encountered an error: ", error));
process.on("unhandledRejection", (error) => console.error("Uncaught Promise Rejection", error));

client.login(discordToken);