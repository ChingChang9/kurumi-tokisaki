module.exports = {
  exec(context, words, config) {
    const x = config.x;
    let y = config.y;
    const maxWidth = config.maxWidth;
    const maxHeight = config.maxHeight;
    const shadow = config.shadow;

    const textRows = adjustFontSize(context, words, maxWidth, maxHeight);

    y +=( maxHeight - (textRows.length - 1) * parseInt(context.font.match(/\d+px/)) + getHeight(context)) / 2;
    textRows.forEach((row) => {
      const newX = x + (maxWidth - context.measureText(row).width) / 2;

      if (shadow) context.strokeText(row, newX, y);
      context.fillText(row, newX, y);
      y += parseInt(context.font.match(/\d+px/));
    });
  }
};

function adjustFontSize(context, words, maxWidth, maxHeight) {
  let textRows = [];
  let testLine = "";

  context.font = context.font.replace(/\d+px/, `${ parseInt(context.font.match(/\d+px/)) + 2 }px`);
  do {
    context.font = context.font.replace(/\d+px/, `${ parseInt(context.font.match(/\d+px/)) - 2 }px`);
    textRows = []; testLine = "";

    words.forEach((word) => {
      if (context.measureText(testLine + word).width > maxWidth) {
        textRows.push(testLine.trim());
        testLine = "";
      }
      testLine += `${ word } `;
    });
    textRows.push(testLine.trim());
  } while (parseInt(context.font.match(/\d+px/)) * 2 * (textRows.length - 1) > maxHeight || textRows.some((row) => context.measureText(row).width > maxWidth));

  return textRows;
}

function getHeight(context) {
  const metrics = context.measureText("T");
  return metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
}