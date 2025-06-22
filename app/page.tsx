'use client'

import './index.css';
import { useEffect, useState } from 'react';
import BgCanvas from './components/BgCanvas';
import Loading from './components/Loading';
import WeatherGraph from './components/WeatherGraph';
import Link from 'next/link';

export default function Home() {

  const [Data, setData] = useState<{
    style: any,
    current_weather: any,
    daily_weather: any,
    hourly_weather: any
  } | null>(null);
  const [Show, setShow] = useState(false);
  const [Day, setDay] = useState(0);
  const [Date, setDate] = useState<string>();

  const handleSelect = (day: number, date: string) => {
    setDay(day);
    setDate(date);
  }

  useEffect(() => {
    const selected_city = localStorage.getItem('city');

    if (selected_city === null) {
      window.location.pathname = "/search";
    } else {
      const city = JSON.parse(selected_city);

      fetch(`/api?lat=${encodeURIComponent(city.lat)}&long=${encodeURIComponent(city.long)}`)
        .then((response) => response.json())
        .then((data) => {

          setData(data);
          setDate(data.current_weather.time);

          setShow(true);
        })
        .catch((_) => setShow(false));
    }
  }, []);

  return (
    <>
      {
        !Show ?
          <Loading />
          :
          <main className={`animate-gradient-xy bg-gradient-to-r min-h-screen h-full ${Data?.style?.bg}`}>
            <BgCanvas
              type={Data?.current_weather?.weathercode}
              is_day={Data?.current_weather?.is_day}
            />
            <Link
              href="/search"
              className="absolute left-2 top-2 z-20 text-white font-mono text-lg card-commons bg-white bg-opacity-10 px-3 py-2"
            >
              🔍
            </Link>
            <main className="z-10 p-6 m-auto flex flex-col">
              <div className={`m-auto font-mono h-full space-y-7 ${Data?.style?.text}`}>
                <div className="flex justify-between">
                  <div className="card-commons bg-white bg-opacity-10 md:w-fit w-full h-fit flex space-x-5">
                    <img
                      src={Data?.current_weather?.icon.image}
                      alt={Data?.current_weather?.icon.description}
                      className="rounded-l-xl rounded-r-sm bg-white bg-opacity-40"
                    />
                    <span className="w-full m-auto text-center pr-6">
                      <p className="text-4xl">
                        {Data?.current_weather?.temperature}&deg;C
                      </p>
                      <p className="text-xs">
                        current temprature
                      </p>
                    </span>
                  </div>
                  <div>
                    <p className={`hidden font-bold md:block md:text-8xl title-common font-title ${Data?.style?.title}`}>
                      天気
                    </p>
                  </div>
                </div>
                <div className="space-y-4 hidden md:block">
                  <div className="flex justify-between">
                    <div className="flex w-fit p-4 text-xs card-commons bg-white bg-opacity-10 space-x-5">
                      <Legend
                        label="temperature"
                        color="bg-red-500"
                      />
                      <Legend
                        label="precipitation"
                        color="bg-blue-500"
                      />
                      <Legend
                        label="wind speed"
                        color="bg-gray-500"
                      />
                    </div>
                    <p className='card-commons w-fit bg-white bg-opacity-10 text-xs font-bold p-4'>
                      {Date}
                    </p>
                  </div>
                  <div className="h-[40vh] bg-white bg-opacity-10 card-commons">
                    <WeatherGraph data={Data?.hourly_weather.slice(Day * 24, (Day + 1) * 24)} />
                  </div>
                </div>
                <div className="h-[70vh] xs:h-[79.5vh] sm:h-[58vh] md:h-[28.5vh] pb-3 w-full overflow-y-auto">
                  <div className="grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 w-full justify-items-center gap-8">
                    {
                      Data?.daily_weather.map((value: any, index: number) =>
                        <div
                          key={index}
                          className="m-auto flex flex-col space-y-4 p-4 card-commons bg-white bg-opacity-10"
                        >
                          <button
                            onClick={() => handleSelect(index, value.date)}
                            className="px-4 card-commons bg-white bg-opacity-40 hover:bg-opacity-60  active:bg-neutral-600"
                          >
                            <img
                              src={value.icon.image}
                              alt={value.icon.description}
                              className="m-auto"
                            />
                          </button>
                          <div className="m-auto text-left text-xs sm:text-sm xl:text-xs 2xl:text-sm">
                            <p><b>max:</b> {value.max}&deg;C</p>
                            <p><b>min:</b> {value.min}&deg;C</p>
                            <p><b>ppt:</b> {value.ppt}%</p>
                            <p><b>wind:</b> {value.wind}km/h</p>
                            <p><b>date:</b> {value.date}</p>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </main>
          </main>
      }
    </>
  )
};

type LegendType = {
  label: string,
  color: string
}

function Legend(props: LegendType) {
  return (
    <p>
      <span className={`px-1 rounded-full ${props.color}`}>&nbsp;</span> {props.label}
    </p>
  )
}