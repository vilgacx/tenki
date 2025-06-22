import { useEffect, useRef } from "react";

class CanvasEffects {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;

  constructor(ctx: CanvasRenderingContext2D, w: number, h: number) {
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
    for (let a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * size,
        xs: 0,
        ys: Math.random() * 10 + 10
      })
    }

    let particles: Cord[] = [];
    for (let b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (let c = 0; c < particles.length; c++) {
        let p = particles[c];
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        ctx!.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx!.stroke();
      }
      move();
    }

    function move() {
      for (let b = 0; b < particles.length; b++) {
        let p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > w || p.y > h) {
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
    bg.src = "/bgcloud.webp";
    bg.height = h;
    bg.width = w;
    bg.onload = function () {
      ctx.drawImage(bg, 0, 0);
    }
  }
};


type Weather = {
  type: number,
  is_day: number,
}

function BgCanvas(props: Weather) {
  const element = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = element.current;
    if (canvas !== null) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const Effects = new CanvasEffects(ctx!, w, h);

      switch (props.type) {
        case 1: case 2: case 3:
          props.is_day === 1 ? Effects.CloudEffect() : 0;
          break;
        case 61: case 66:
          Effects.RainEffect(4, 2, 500);
          break;
        case 71: case 73: case 75:
          Effects.RainEffect(0.1, 5, 500);
          break;
        case 80: case 81:
          Effects.RainEffect(3, 2, 500);
          break;
        case 63: case 65: case 67: case 85: case 86:
          Effects.RainEffect(0.1, 9, 800);
          break;
        case 82: case 95: case 96: case 99:
          Effects.RainEffect(4, 3, 800);
          break;
      }
    }
  });

  return (
    <canvas
      id="bg-canvas"
      className="absolute left-0 top-0 h-full w-full hidden xs:block"
      ref={element}
    >
    </canvas>
  )
}

export default BgCanvas;
