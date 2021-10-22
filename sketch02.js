const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const x = 0;
    const y = 0;
    const w = width * 0.30;
    const h = height * 0.30;
    context.fillStyle = 'black';
    context.beginPath();
    context.rect(x, y, w, h,);
    context.fill();
    
  };
};

canvasSketch(sketch, settings);
