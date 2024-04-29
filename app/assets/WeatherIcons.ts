//http://openweathermap.org/img/wn/
const WeatherIcons: { [key: number] : { [key: number]: { description: string, image: string } } } = {
  0: {
    0: {
      description: "Clear",
      image: "/wicons/0/01n@2x.png"
    },
    1: {
      description: "Sunny",
      image: "/wicons/1/01d@2x.png"
    }
  },
  1: {
    0: {
      description: "Mainly Clear",
      image: "/wicons/0/01n@2x.png"
    },
    1: {
      description: "Mainly Sunny",
      image: "/wicons/1/01d@2x.png"
    }
  },
  2: {
    0: {
      description: "Partly Cloudy",
      image: "/wicons/0/02n@2x.png"
    },
    1: {
      description: "Partly Cloudy",
      image: "/wicons/1/02d@2x.png"
    }
  },
  3: {
    0: {
      description: "Cloudy",
      image: "/wicons/0/03n@2x.png"
    },
    1: {
      description: "Cloudy",
      image: "/wicons/1/03d@2x.png"
    }
  },
  45: {
    0: {
      description: "Foggy",
      image: "/wicons/0/50n@2x.png"
    },
    1: {
      description: "Foggy",
      image: "/wicons/1/50d@2x.png"
    }
  },
  48: {
    0: {
      description: "Rime Fog",
      image: "/wicons/0/50n@2x.png"
    },
    1: {
      description: "Rime Fog",
      image: "/wicons/1/50d@2x.png"
    }
  },
  51: {
    0: {
      description: "Light Drizzle",
      image: "/wicons/0/09n@2x.png"
    },
    1: {
      description: "Light Drizzle",
      image: "/wicons/1/09d@2x.png"
    }
  },
  53: {
    0: {
      description: "Drizzle",
      image: "/wicons/0/09n@2x.png"
    },
    1: {
      description: "Drizzle",
      image: "/wicons/1/09d@2x.png"
    }
  },
  55: {
    0: {
      description: "Heavy Drizzle",
      image: "/wicons/0/09n@2x.png"
    },
    1: {
      description: "Heavy Drizzle",
      image: "/wicons/1/09d@2x.png"
    }
  },
  56: {
    0: {
      description: "Light Freezing Drizzle",
      image: "/wicons/0/09n@2x.png"
    },
    1: {
      description: "Light Freezing Drizzle",
      image: "/wicons/1/09d@2x.png"
    }
  },
  57: {
    0: {
      description: "Freezing Drizzle",
      image: "/wicons/0/09n@2x.png"
    },
    1: {
      description: "Freezing Drizzle",
      image: "/wicons/1/09d@2x.png"
    }
  },
  61: {
    0: {
      description: "Light Rain",
      image: "/wicons/0/10n@2x.png"
    },
    1: {
      description: "Light Rain",
      image: "/wicons/1/10d@2x.png"
    }
  },
  63: {
    0: {
      description: "Rain",
      image: "/wicons/0/10n@2x.png"
    },
    1: {
      description: "Rain",
      image: "/wicons/1/10d@2x.png"
    }
  },
  65: {
    0: {
      description: "Heavy Rain",
      image: "/wicons/0/10n@2x.png"
    },
    1: {
      description: "Heavy Rain",
      image: "/wicons/1/10d@2x.png"
    }
  },
  66: {
    0: {
      description: "Freezing Rain",
      image: "/wicons/0/10n@2x.png"
    },
    1: {
      description: "Freezing Rain",
      image: "/wicons/1/10d@2x.png"
    }
  },
  67: {
    0: {
      description: "Freezing Rain",
      image: "/wicons/0/10n@2x.png"
    },
    1: {
      description: "Freezing Rain",
      image: "/wicons/1/10d@2x.png"
    }
  },
  71: {
    0: {
      description: "Light Snow",
      image: "/wicons/0/13n@2x.png"
    },
    1: {
      description: "Light Snow",
      image: "/wicons/1/13d@2x.png"
    }
  },
  73: {
    0: {
      description: "Snow",
      image: "/wicons/0/13n@2x.png"
    },
    1: {
      description: "Snow",
      image: "/wicons/1/13d@2x.png"
    }
  },
  75: {
    0: {
      description: "Heavy Snow",
      image: "/wicons/0/13n@2x.png"
    },
    1: {
      description: "Heavy Snow",
      image: "/wicons/1/13d@2x.png"
    }
  },
  77: {
    0: {
      description: "Snow Grains",
      image: "/wicons/0/13n@2x.png"
    },
    1: {
      description: "Snow Grains",
      image: "/wicons/1/13d@2x.png"
    }
  },
  80: {
    0: {
      description: "Light Showers",
      image: "/wicons/0/09n@2x.png"
    },
    1: {
      description: "Light Showers",
      image: "/wicons/1/09d@2x.png"
    }
  },
  81: {
    0: {
      description: "Showers",
      image: "/wicons/0/09n@2x.png"
    },
    1: {
      description: "Showers",
      image: "/wicons/1/09d@2x.png"
    }
  },
  82: {
    0: {
      description: "Heavy Showers",
      image: "/wicons/0/09n@2x.png"
    },
    1: {
      description: "Heavy Showers",
      image: "/wicons/1/09d@2x.png"
    }
  },
  85: {
    0: {
      description: "Snow Showers",
      image: "/wicons/0/13n@2x.png"
    },
    1: {
      description: "Snow Showers",
      image: "/wicons/1/13d@2x.png"
    }
  },
  86: {
    0: {
      description: "Snow Showers",
      image: "/wicons/0/13n@2x.png"
    },
    1: {
      description: "Snow Showers",
      image: "/wicons/1/13d@2x.png"
    }
  },
  95: {
    0: {
      description: "Thunderstorm",
      image: "/wicons/0/11n@2x.png"
    },
    1: {
      description: "Thunderstorm",
      image: "/wicons/1/11d@2x.png"
    }
  },
  96: {
    0: {
      description: "Thunderstorm With Hail",
      image: "/wicons/0/11n@2x.png"
    },
    1: {
      description: "Thunderstorm With Hail",
      image: "/wicons/1/11d@2x.png"
    }
  },
  99: {
    0: {
      description: "Thunderstorm With Hail",
      image: "/wicons/0/11n@2x.png"
    },
    1: {
      description: "Thunderstorm With Hail",
      image: "/wicons/1/11d@2x.png"
    }
  }
}

export default WeatherIcons;
