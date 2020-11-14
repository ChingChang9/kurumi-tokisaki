module.exports = {
  name: "say",
  description: "Say something in a channel",
  arguments: true,
  usage: "<channel-id thing-to-say>",
  execute(message, arguments) {
    if (message.author.id !== "371129637725798400") return message.reply("you don't have the permission to use this command");

    const channelId = arguments.shift();
    try {
      return message.guild.channels.cache.get(channelId).send(arguments.join(" "));
    } catch (TypeError) {
      return message.reply("the first argument must be a channel id");
    }
  }
};