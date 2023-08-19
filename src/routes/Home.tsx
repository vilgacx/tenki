import '../assets/home.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BgCanvas from "../components/BgCanvas";
import Loading from '../components/Loading';

const stylelist = [
  ['from-blue-200 to-sky-300','from-amber-950 to-stone-950'],
  ['from-blue-300 to-sky-300','from-stone-950 to-black'],
  [],
  [],
  [],
  [],
  ['from-black to-slate-950','from-white to-neutral-500'],
  ['from-neutral-950 to-black', 'from-white to-neutral-400']
]


const Weathers = (code: number) => {
  let style: Array<string> = [];
  switch (code) {
    case 0:
      style = stylelist[0];
      break;
    case 1: case 2: case 3: 
      style = stylelist[1];
      break;
    case 45: case 48:
      style = stylelist[2];
      break;
    case 51: case 53: case 55: case 56: case 57:
      style = stylelist[3];
      break;
    case 61: case 63: case 65: case 66: case 67:
      style = stylelist[4];
      break;
    case 71: case 73: case 75:
      style = stylelist[5];
      break;
    case 80: case 81: case 82: case 85: case 86:
      style = stylelist[6];
      break;
    case 95: case 96: case 99:
      style = stylelist[7]
      break;
  }
  return style;
}

function Home() {
  const [WeatherCode, setWeatherCode] = useState(0);
  const [Show, setShow] = useState(false);
  const navigate = useNavigate();
  const selected_city = localStorage.getItem('city');

  useEffect(() => {
    if (selected_city === null) {
      navigate("/search");
    } else {
      const city = JSON.parse(selected_city);
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&hourly=temperature_2m,precipitation_probability,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto`)
        .then((response) => response.json())
        .then((data) => {
          const weather_code = data.current_weather.weathercode;
          setWeatherCode(80);
          setShow(true);
        })
    }
  },[]);

  return (
    <>
      {!Show && <Loading />}
      {Show &&
        <>
          <BgCanvas type={WeatherCode} />
          <main className={`home-main ${Weathers(WeatherCode)[0]}`}>
            <main className="z-10 p-14">
              <p className={`title ${Weathers(WeatherCode)[1]}`}>今日の天気</p>
              <p className="sub-title">(today's weather)</p> 
              <div className="weather-card">
              </div>
            </main>
          </main>
        </>
      }
    </>
  )
}

export default Home;
