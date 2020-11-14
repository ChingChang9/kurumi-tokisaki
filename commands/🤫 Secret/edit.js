module.exports = {
  name: "edit",
  description: "Edit a message in a channel",
  arguments: true,
  usage: "<channel-id message-id new-text>",
  execute(message, arguments) {
    if (message.author.id !== "371129637725798400") return message.reply("you don't have the permission to use this command");

    const channelId = arguments.shift();
    const messageId = arguments.shift();
    try {
      return message.guild.channels.cache.get(channelId).messages.fetch(messageId).then((fetchedMessage) => {
        fetchedMessage.edit(arguments.join(" "));
      });
    } catch (TypeError) {
      return message.reply("the first and argument must be a channel and message id");
    }
  }
};