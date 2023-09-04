import './css/home.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BgCanvas from '../components/BgCanvas';
import Loading from '../components/Loading';
import WeatherIcons from '../assets/WeatherIcons';
import WeatherGraph from '../components/WeatherGraph.tsx';

const stylelist: {[key: number]: Array<Array<string>>} = {
  0 : [
    ['from-gray-950 to-black','from-neutral-400 to-white','text-white'],
    ['from-slate-950 to-gray-950','from-neutral-400 to-white','text-white'],
    ['from-gray-950 to-neutral-900','from-neutral-300 to-white','text-white'],
    ['from-slate-800 to-black','from-neutral-600 to-white','text-white'],
    ['from-black to-slate-950','from-white to-neutral-400','text-white'],
    ['from-gray-950 to-black', 'from-white to-neutral-400','text-white']
  ],
  1: [
    ['from-amber-50 via-sky-300 to-sky-500','from-black to-stone-600','text-black'],
    ['from-slate-200 to-cyan-100','from-neutral-600 to-black','text-black'],
    ['from-amber-50 to-sky-950','from-neutral-800 to-white','title-common from-neutral-500 to-white'],
    ['from-sky-200 via-slate-400 to-slate-600','from-black to-gray-600','text-black'],
    ['from-zinc-500 via-gray-500 to-zinc-700','from-white to-neutral-400','text-white'],
    ['from-zinc-500 via-zinc-600 to-zinc-700', 'from-white to-neutral-400','text-white']
  ]
}

const Weathers = (code: number,is_day: number) => {
  let style: Array<string> = [];
  switch (code) {
    case 0: case 1: case 2: case 3:
      style = stylelist[is_day][0];
      break;
    case 45: case 48: case 51: case 53: case 55: case 56: case 57:
      style = stylelist[is_day][1];
      break;
    case 61: case 63: case 65: case 66: case 67:
      style = stylelist[is_day][2];
      break;
    case 71: case 73: case 75:
      style = stylelist[is_day][3];
      break;
    case 80: case 81: case 82: case 85: case 86:
      style = stylelist[is_day][4];
      break;
    case 95: case 96: case 99:
      style = stylelist[is_day][5]
      break;
  }
  return style;
}

type HourlyData = {
  "time": string,
  "temprature": number,
  "precipitation": number,
  "wind speed": number
}

function Home() {
  const [CWeatherData, setCWeatherData] = useState<{[key: string]: number}>();
  const [CWeatherIcon, setCWeatherIcon] = useState<string>();
  const [DWeatherData, setDWeatherData] = useState<{[key: string]: {[key: number]: number}}>();
  const [HWeatherData, setHWeatherData] = useState<HourlyData[]>(); 
  const [Show, setShow] = useState(false);
  const [Day, setDay] = useState(0);

  const cdate = new Date();
  const [GraphDate, setGraphDate] = useState(`${cdate.getFullYear()}/${("0"+cdate.getMonth()).slice(-2)}/${("0"+cdate.getDate()).slice(-2)}`);

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
          const current_weather_data = data.current_weather;
          const daily_weather_data = data.daily;
          const hourly_weather_data = () => {
            const rawhdata = data.hourly;
            const hdata: HourlyData[] = [];
            [...Array(24).keys()].map((val) => {
              val = val+(24*Day)
              hdata.push({
                "time": (rawhdata['time'][val]).split('T')[1].split(':')[0],
                "temprature": rawhdata['temperature_2m'][val],
                "precipitation": rawhdata['precipitation_probability'][val],
                "wind speed": rawhdata['windspeed_10m'][val]
              })
            })
            return hdata;
          };
          setCWeatherData(current_weather_data);
          setDWeatherData(daily_weather_data);
          setHWeatherData(hourly_weather_data);
          setCWeatherIcon(WeatherIcons[current_weather_data.weathercode][current_weather_data.is_day]["image"]);
          setShow(true);
        })
    }
  },[Day]);

  return (
    <>
      {!Show && <Loading />}
      {Show &&
        <> 
          <main className={`home-main ${Weathers(CWeatherData!.weathercode, CWeatherData!.is_day)[0]}`}>
            <BgCanvas type={CWeatherData!.weathercode} is_day={CWeatherData!.is_day} />
            <Link to="/search" className='search-link'>🔍</Link>
            <main className="weather-card"> 
              <div className={`weather-div ${Weathers(CWeatherData!.weathercode, CWeatherData!.is_day)[2]}`}>
                <div className='flex justify-between'>
                  <div className="c-weather-card">
                    <img src={CWeatherIcon} alt="weather-logo" className="c-weather-logo"/>
                    <p className='c-temp'>{CWeatherData!['temperature']}&deg;C 
                      <p className='text-xs'>current temprature</p>
                    </p>
                  </div>
                  <div>
                    <p className={`title ${Weathers(CWeatherData!.weathercode, CWeatherData!.is_day)[1]}`}>天気</p>
                  </div>
                </div>
                <div className='w-graph-div'>
                  <div className='flex justify-between'> 
                    <div className='weather-graph-legend-div'>
                      <p><span className='legend-box bg-red-500'>&nbsp;</span> temperature</p>
                      <p><span className='legend-box bg-blue-500'>&nbsp;</span> precipitation</p>
                      <p><span className='legend-box bg-gray-500'>&nbsp;</span> wind speed</p>
                    </div>
                    <p className='w-graph-date'>{GraphDate}</p>
                  </div>
                  <div className='weather-graph-div'> 
                    <WeatherGraph data={HWeatherData!} />
                  </div>
                </div>
                <div className='d-weather-div'> 
                  <div className='d-weather-card'>
                    {[...Array(7).keys()].map((val) => {
                      const date = (DWeatherData!['time'][val]).toString().replace(/-/g,'/');
                      return <div className='d-div' key={val}>
                        <button className='d-img-div' onClick={() => {setDay(val); setGraphDate(date)}}>
                          <img src={WeatherIcons[DWeatherData!['weathercode'][val]][0]['image']} alt="weather-logo" className='m-auto'/>
                        </button>
                        <div className='d-data-div'> 
                          <p><b>max:</b> {DWeatherData!['temperature_2m_max'][val]}&deg;C</p>
                          <p><b>min:</b> {DWeatherData!['temperature_2m_min'][val]}&deg;C</p>
                          <p><b>ppt:</b> {DWeatherData!['precipitation_probability_max'][val]}%</p>
                          <p><b>wind:</b> {DWeatherData!['windspeed_10m_max'][val]}km/h</p>
                          <p><b>date:</b> {date}</p>
                        </div>
                      </div>
                    })}
                  </div>
                </div>
              </div>
            </main>
          </main>
        </>
      }
    </>
  )
}

export default Home;
