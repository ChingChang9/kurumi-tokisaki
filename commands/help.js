const Discord = require("discord.js");
const { prefix } = require("../config.json");
const icon = new Discord.MessageAttachment("./assets/icon.jpg");
const fs = require("fs");

module.exports = {
  name: "help",
  description: "List all of my commands or info about a specific command",
  aliases: ["alias", "aliases", "command", "commands"],
  arguments: false,
  usage: "[command-name]",
  execute(message, arguments) {
    const { commands } = message.client;

    if (!arguments.length) {
      function readDirectory(path, directory) {
      	const commandFiles = fs.readdirSync(path);
      	for (const file of commandFiles) {
      		if (fs.statSync(`${ path }/${ file }`).isDirectory()) {
      			readDirectory(`${ path }/${ file }`, directory);
      		} else if (directory[path.split("/")[path.split("/").length - 1]]) {
            directory[path.split("/")[path.split("/").length - 1]].push(file);
          } else {
            if (path.split("/")[path.split("/").length - 1] === "🤫 Secret") return;
            directory[path.split("/")[path.split("/").length - 1]] = [file];
          }
      	}
        return directory;
      }
      const commandsDirectory = readDirectory("./commands", {});
      let fields = [];
      for (const key in commandsDirectory) {
        fields.push({
          name: key === "commands" ? "📜 General" : key,
          value: `\`${ prefix }${ commandsDirectory[key].map((fileName) => fileName.slice(0, -3)).join(`\`, \`${ prefix }`) }\``
        });
      }
      return message.channel.send({
        files: [icon],
        embed: {
        	color: "#fefefe",
        	author: {
        		name: "Kurumi Tokisaki's Commands",
        		icon_url: "attachment://icon.jpg",
        		url: "https://www.chingchang.dev"
        	},
        	description: `Use \`${ prefix }help [command]\` for more information on a specific command\n\`<>\`: Required \`[]\`: Optional`,
        	fields: fields,
        	footer: {
        		text: "Ching Chang © 2020 Some Rights Reserved",
        		icon_url: "attachment://icon.jpg"
        	}
        }
      });
    }

    const name = arguments[0].toLowerCase();
    const command = commands.get(name) || commands.find((command) => command.aliases && command.aliases.includes(name));
    if (!command) return message.reply("that's not a valid command!");

    const commandUsage = command.usage ? ` ${ command.usage }` : "";
    return message.channel.send({
      files: [icon],
      embed: {
      	color: "#fefefe",
      	author: {
      		name: "Kurumi Tokisaki's Help Menu",
      		icon_url: "attachment://icon.jpg",
      		url: "https://www.chingchang.dev"
      	},
        title: `${ prefix }${ command.name }`,
      	description: command.description,
      	fields: [
          {
            name: "Usage",
            value: `\`${ prefix }${ command.name }${ commandUsage }\``,
            inline: true
          },
          {
            name: "Default Value",
            value: command.default || "No default value",
            inline: true
          },
          {
            name: "Aliases",
            value: command.aliases ? `\`${ prefix }${ command.aliases.join(`\`, \`${ prefix }`) }\`` : "No aliases"
          }
      	]
      }
    });
  }
};