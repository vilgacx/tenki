import { useEffect, useRef } from "react";
import './main.css';
import RainEffect from "./CanvasEffects";

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

      switch (props.type) {
        case 80: case 81: case 82: case 85: case 86: 
          RainEffect(ctx!, w, h);
          break;
      }
    }
  });

  return (
    <canvas id="bg-canvas" className="bg-canvas" ref={element}></canvas>
  )
}

export default BgCanvas;
