type Cord = {
  x: number,
  y: number,
  l: number,
  xs: number,
  ys: number
}

export default function RainEffect(ctx: CanvasRenderingContext2D, w: number , h: number) {
  ctx.strokeStyle = '#aec2e0';
  ctx.lineWidth = 1;
  ctx.lineCap = 'round';

  var init: Array<Cord> = [];
  var maxParts = 500;
  for(var a = 0; a < maxParts; a++) {
    init.push({
      x: Math.random() * w,
      y: Math.random() * h,
      l: Math.random() * 5,
      xs: 0,
      ys: Math.random() * 10 + 10
    })
  }

  var particles: Array<Cord> = [];
  for(var b = 0; b < maxParts; b++) {
    particles[b] = init[b];
  }

  function draw() {
    ctx!.clearRect(0, 0, w, h);
    for(var c = 0; c < particles.length; c++) {
      var p = particles[c];
      ctx!.beginPath();
      ctx!.moveTo(p.x, p.y);
      ctx!.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      ctx!.stroke();
    }
    move();
  }

  function move() {
    for(var b = 0; b < particles.length; b++) {
      var p = particles[b];
      p.x += p.xs;
      p.y += p.ys;
      if(p.x > w || p.y > h) {
        p.x = Math.random() * w;
        p.y = -20;
      }
    }
  }
  setInterval(draw, 30);
}
