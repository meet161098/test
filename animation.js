// animation.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');
const GIFEncoder = require('gifencoder');

async function createAnimation(text) {
  const width = 800;
  const height = 600;
  const encoder = new GIFEncoder(width, height);
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  encoder.createReadStream().pipe(fs.createWriteStream(path.join(__dirname, 'public', 'animation.gif')));
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(100);  // 100 ms delay between frames
  encoder.setQuality(10);

  let frame = 0;
  while (frame < 100) {  // Example: 100 frames
    ctx.clearRect(0, 0, width, height);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(text, 50 + frame, 100);

    encoder.addFrame(ctx);
    frame++;
  }

  encoder.finish();
  return '/animation.gif';
}

module.exports = { createAnimation };
