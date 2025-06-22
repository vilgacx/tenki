export const WeatherAPI = (lat: string, long: string) => `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation_probability,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto`;

//http://openweathermap.org/img/wn/
export const WeatherIcons: { [key: number]: { [key: number]: { description: string, image: string } } } = {
  0: {
    0: {
      description: "Clear",
      image: "/wicons/0/01n@2x.webp"
    },
    1: {
      description: "Sunny",
      image: "/wicons/1/01d@2x.webp"
    }
  },
  1: {
    0: {
      description: "Mainly Clear",
      image: "/wicons/0/01n@2x.webp"
    },
    1: {
      description: "Mainly Sunny",
      image: "/wicons/1/01d@2x.webp"
    }
  },
  2: {
    0: {
      description: "Partly Cloudy",
      image: "/wicons/0/02n@2x.webp"
    },
    1: {
      description: "Partly Cloudy",
      image: "/wicons/1/02d@2x.webp"
    }
  },
  3: {
    0: {
      description: "Cloudy",
      image: "/wicons/0/03n@2x.webp"
    },
    1: {
      description: "Cloudy",
      image: "/wicons/1/03d@2x.webp"
    }
  },
  45: {
    0: {
      description: "Foggy",
      image: "/wicons/0/50n@2x.webp"
    },
    1: {
      description: "Foggy",
      image: "/wicons/1/50d@2x.webp"
    }
  },
  48: {
    0: {
      description: "Rime Fog",
      image: "/wicons/0/50n@2x.webp"
    },
    1: {
      description: "Rime Fog",
      image: "/wicons/1/50d@2x.webp"
    }
  },
  51: {
    0: {
      description: "Light Drizzle",
      image: "/wicons/0/09n@2x.webp"
    },
    1: {
      description: "Light Drizzle",
      image: "/wicons/1/09d@2x.webp"
    }
  },
  53: {
    0: {
      description: "Drizzle",
      image: "/wicons/0/09n@2x.webp"
    },
    1: {
      description: "Drizzle",
      image: "/wicons/1/09d@2x.webp"
    }
  },
  55: {
    0: {
      description: "Heavy Drizzle",
      image: "/wicons/0/09n@2x.webp"
    },
    1: {
      description: "Heavy Drizzle",
      image: "/wicons/1/09d@2x.webp"
    }
  },
  56: {
    0: {
      description: "Light Freezing Drizzle",
      image: "/wicons/0/09n@2x.webp"
    },
    1: {
      description: "Light Freezing Drizzle",
      image: "/wicons/1/09d@2x.webp"
    }
  },
  57: {
    0: {
      description: "Freezing Drizzle",
      image: "/wicons/0/09n@2x.webp"
    },
    1: {
      description: "Freezing Drizzle",
      image: "/wicons/1/09d@2x.webp"
    }
  },
  61: {
    0: {
      description: "Light Rain",
      image: "/wicons/0/10n@2x.webp"
    },
    1: {
      description: "Light Rain",
      image: "/wicons/1/10d@2x.webp"
    }
  },
  63: {
    0: {
      description: "Rain",
      image: "/wicons/0/10n@2x.webp"
    },
    1: {
      description: "Rain",
      image: "/wicons/1/10d@2x.webp"
    }
  },
  65: {
    0: {
      description: "Heavy Rain",
      image: "/wicons/0/10n@2x.webp"
    },
    1: {
      description: "Heavy Rain",
      image: "/wicons/1/10d@2x.webp"
    }
  },
  66: {
    0: {
      description: "Freezing Rain",
      image: "/wicons/0/10n@2x.webp"
    },
    1: {
      description: "Freezing Rain",
      image: "/wicons/1/10d@2x.webp"
    }
  },
  67: {
    0: {
      description: "Freezing Rain",
      image: "/wicons/0/10n@2x.webp"
    },
    1: {
      description: "Freezing Rain",
      image: "/wicons/1/10d@2x.webp"
    }
  },
  71: {
    0: {
      description: "Light Snow",
      image: "/wicons/0/13n@2x.webp"
    },
    1: {
      description: "Light Snow",
      image: "/wicons/1/13d@2x.webp"
    }
  },
  73: {
    0: {
      description: "Snow",
      image: "/wicons/0/13n@2x.webp"
    },
    1: {
      description: "Snow",
      image: "/wicons/1/13d@2x.webp"
    }
  },
  75: {
    0: {
      description: "Heavy Snow",
      image: "/wicons/0/13n@2x.webp"
    },
    1: {
      description: "Heavy Snow",
      image: "/wicons/1/13d@2x.webp"
    }
  },
  77: {
    0: {
      description: "Snow Grains",
      image: "/wicons/0/13n@2x.webp"
    },
    1: {
      description: "Snow Grains",
      image: "/wicons/1/13d@2x.webp"
    }
  },
  80: {
    0: {
      description: "Light Showers",
      image: "/wicons/0/09n@2x.webp"
    },
    1: {
      description: "Light Showers",
      image: "/wicons/1/09d@2x.webp"
    }
  },
  81: {
    0: {
      description: "Showers",
      image: "/wicons/0/09n@2x.webp"
    },
    1: {
      description: "Showers",
      image: "/wicons/1/09d@2x.webp"
    }
  },
  82: {
    0: {
      description: "Heavy Showers",
      image: "/wicons/0/09n@2x.webp"
    },
    1: {
      description: "Heavy Showers",
      image: "/wicons/1/09d@2x.webp"
    }
  },
  85: {
    0: {
      description: "Snow Showers",
      image: "/wicons/0/13n@2x.webp"
    },
    1: {
      description: "Snow Showers",
      image: "/wicons/1/13d@2x.webp"
    }
  },
  86: {
    0: {
      description: "Snow Showers",
      image: "/wicons/0/13n@2x.webp"
    },
    1: {
      description: "Snow Showers",
      image: "/wicons/1/13d@2x.webp"
    }
  },
  95: {
    0: {
      description: "Thunderstorm",
      image: "/wicons/0/11n@2x.webp"
    },
    1: {
      description: "Thunderstorm",
      image: "/wicons/1/11d@2x.webp"
    }
  },
  96: {
    0: {
      description: "Thunderstorm With Hail",
      image: "/wicons/0/11n@2x.webp"
    },
    1: {
      description: "Thunderstorm With Hail",
      image: "/wicons/1/11d@2x.webp"
    }
  },
  99: {
    0: {
      description: "Thunderstorm With Hail",
      image: "/wicons/0/11n@2x.webp"
    },
    1: {
      description: "Thunderstorm With Hail",
      image: "/wicons/1/11d@2x.webp"
    }
  }
};


type Style = {
  bg: string,
  title: string
  text: string
};

const WeatherStyleList: { 0: Style[], 1: Style[] } = {
  0: [
    {
      bg: 'from-gray-950 to-black',
      title: 'from-neutral-400 to-white',
      text: 'text-white'
    },
    {
      bg: 'from-slate-950 to-gray-950',
      title: 'from-neutral-400 to-white',
      text: 'text-white'
    },
    {
      bg: 'from-gray-950 to-neutral-900',
      title: 'from-neutral-300 to-white',
      text: 'text-white'
    },
    {
      bg: 'from-slate-800 to-black',
      title: 'from-neutral-600 to-white',
      text: 'text-white'
    },
    {
      bg: 'from-black to-slate-950',
      title: 'from-white to-neutral-400',
      text: 'text-white'
    },
    {
      bg: 'from-gray-950 to-black',
      title: 'from-white to-neutral-400',
      text: 'text-white'
    }
  ],
  1: [
    {
      bg: 'from-amber-50 via-sky-300 to-sky-500',
      title: 'from-black to-stone-600',
      text: 'text-black'
    },
    {
      bg: 'from-slate-200 to-cyan-100',
      title: 'from-neutral-600 to-black',
      text: 'text-black'
    },
    {
      bg: 'from-amber-50 to-sky-950',
      title: 'from-neutral-800 to-white',
      text: 'title-common from-neutral-500 to-white'
    },
    {
      bg: 'from-sky-200 via-slate-400 to-slate-600',
      title: 'from-black to-gray-600',
      text: 'text-black'
    },
    {
      bg: 'from-zinc-500 via-gray-500 to-zinc-700',
      title: 'from-white to-neutral-400',
      text: 'text-white'
    },
    {
      bg: 'from-zinc-500 via-zinc-600 to-zinc-700',
      title: 'from-white to-neutral-400',
      text: 'text-white'
    }
  ]
}

export const WeatherStyle = (code: number, is_day: 0 | 1) => {
  switch (code) {
    case 0: case 1: case 2: case 3:
      return WeatherStyleList[is_day][0];
    case 45: case 48: case 51: case 53: case 55: case 56: case 57:
      return WeatherStyleList[is_day][1];
    case 61: case 63: case 65: case 66: case 67:
      return WeatherStyleList[is_day][2];
    case 71: case 73: case 75:
      return WeatherStyleList[is_day][3];
    case 80: case 81: case 82: case 85: case 86:
      return WeatherStyleList[is_day][4];
    case 95: case 96: case 99:
      return WeatherStyleList[is_day][5]
    default:
      return { bg: "", title: "", text: "" };
  }
}

export const ToSlashDate = (date: string) => date.toString().replace(/-/g, '/');