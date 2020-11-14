module.exports = {
  name: "restart",
  description: "Restart the bot",
  aliases: ["reboot", "ff"],
  arguments: false,
  execute(message, arguments) {
    process.exit();
  }
};