import { useEffect, useRef } from "react";
import './main.css';
import CanvasEffects from "./CanvasEffects";

type Weather = {
  type: number
}

function BgCanvas(props: Weather) {
  const element = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = element.current;
    if(canvas !== null) {
      canvas.style.width ='100%';
      canvas.style.height='100%';
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const Effects = new CanvasEffects(ctx!, w, h);

      switch (props.type) {
        case 1: case 2: case 3:
          Effects.CloudEffect();
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
    <canvas id="bg-canvas" className="bg-canvas" ref={element}></canvas>
  )
}

export default BgCanvas;
