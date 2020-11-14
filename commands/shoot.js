const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const sizeOf = require("image-size");
const wordWrap = require("../scripts/wordWrap.js");

module.exports = {
  name: "shoot",
  description: "Say something as a waifu holding a gun",
  arguments: false,
  usage: "[text]",
  aliases: ["bang"],
  execute(message, arguments) {
    const text = arguments.map((word) => word.toUpperCase());

    const folderSize = fs.readdirSync("./assets/images").length;
    const index = Math.floor(Math.random() * (folderSize - 1));

    sizeOf(`./assets/images/${ index }.jpg`, async (error, dimensions) => {
      const [context, canvas] = await createImage(index, dimensions.width, dimensions.height);

      fs.readFile("./assets/imageInfo.json", async (error, data) => {
        if (error) return console.log(error);

        const config = await JSON.parse(data)[index];

        setFont(context, config);
        wordWrap.exec(context, text, config);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "image.jpg");
        message.channel.send(attachment);
      });
    });
  }
};

async function createImage(index, width, height) {
  const canvas = Canvas.createCanvas(width, height);
  const context = canvas.getContext("2d");
  const background = await Canvas.loadImage(`./assets/images/${ index }.jpg`);
  context.drawImage(background, 0, 0, width, height);

  return [context, canvas];
}

function setFont(context, imageInfo) {
  context.font = "bold 96px Arial";
  if (imageInfo.shadow) {
    context.shadowColor = "#000000";
    context.fillStyle = "#ffffff";
    context.shadowBlur = 6;
    context.lineWidth = 3;
  } else {
    context.fillStyle = "#000000";
  }
}