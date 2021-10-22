const canvasSketch = require('canvas-sketch');

const math = require ('canvas-sketch-util/math');

const random = require ('canvas-sketch-util/random');
const settings = {
  dimensions: [ 1080, 1080 ]
};

// const degToRad = (degrees) => {
// return degrees / 180 * Math.PI;

// };
// const randRange = (min, max) =>{
//   return Math.random() * (max - min) + min;
// };

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);


    const cx = width * 0.5;
    const cy = height * 0.5;
    let x,y;

    const w = width * 0.01;
    const h = height * 0.1;

    const num = 12; 
    const radius = width * 0.3;

    for (let i = 0; i < num; i++){
      const slice = math.degToRad(360/num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      context.scale(random.range(1,3), 1); 


      context.fillStyle = 'black';
      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h,);
      context.fill();
      context.restore();

context.save();
context.translate(cx, cy);
context.rotate(-angle)

context.beginPath();
context.arc(0, 0, radius,slice * -0.3, slice * 0.3 );
context.stroke ();  

context.restore();

    }
    
    
  };
};

canvasSketch(sketch, settings);
