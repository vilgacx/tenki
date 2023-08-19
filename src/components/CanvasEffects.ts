export default class CanvasEffects {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;

  constructor (ctx: CanvasRenderingContext2D, w: number, h: number) {
    this.ctx = ctx;
    this.w = w;
    this.h = h;
  }

  public RainEffect(size: number, linewidth: number, parts: number) {
    const ctx = this.ctx;
    const w = this.w;
    const h = this.h;

    type Cord = {
      x: number,
      y: number,
      l: number,
      xs: number,
      ys: number
    }

    ctx.strokeStyle = '#aec2e0';
    ctx.lineWidth = linewidth;
    ctx.lineCap = 'round';

    let init: Cord[] = [];
    let maxParts = parts;
    for(let a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * size,
        xs: 0,
        ys: Math.random() * 10 + 10
      })
    }

    let particles: Cord[] = [];
    for(let b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for(let c = 0; c < particles.length; c++) {
        let p = particles[c];
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        ctx!.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx!.stroke();
      }
      move();
    }

    function move() {
      for(let b = 0; b < particles.length; b++) {
        let p = particles[b];
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

  public CloudEffect() {
    const ctx = this.ctx;
    const w = this.w;
    const h = this.h;

    const bg = new Image();
    bg.src = "/bgcloud.png";
    bg.height = h;
    bg.width = w;
    bg.onload = function(){
      ctx.drawImage(bg,0,0); 
    }
  }
};
