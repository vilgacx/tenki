const WeatherIcons: { [key: number] : { [key: number]: { description: string, image: string } } } = {
    0:{
      1: {
        "description":"Sunny",
        "image":"http://openweathermap.org/img/wn/01d@2x.png"
      },
      0: {
        "description":"Clear",
        "image":"http://openweathermap.org/img/wn/01n@2x.png"
      }
    },
    1:{
      1: {
        "description":"Mainly Sunny",
        "image":"http://openweathermap.org/img/wn/01d@2x.png"
      },
      0:{
        "description":"Mainly Clear",
        "image":"http://openweathermap.org/img/wn/01n@2x.png"
      }
    },
    2: {
      1: {
        "description":"Partly Cloudy",
        "image":"http://openweathermap.org/img/wn/02d@2x.png"
      },
      0: {
        "description":"Partly Cloudy",
        "image":"http://openweathermap.org/img/wn/02n@2x.png"
      }
    },
    3: {
      1: {
        "description":"Cloudy",
        "image":"http://openweathermap.org/img/wn/03d@2x.png"
      },
      0: {
        "description":"Cloudy",
        "image":"http://openweathermap.org/img/wn/03n@2x.png"
      }
    },
    45: {
      1: {
        "description":"Foggy",
        "image":"http://openweathermap.org/img/wn/50d@2x.png"
      },
      0: {
        "description":"Foggy",
        "image":"http://openweathermap.org/img/wn/50n@2x.png"
      }
    },
    48: {
      1: {
        "description":"Rime Fog",
        "image":"http://openweathermap.org/img/wn/50d@2x.png"
      },
      0: {
        "description":"Rime Fog",
        "image":"http://openweathermap.org/img/wn/50n@2x.png"
      }
    },
    51: {
      1: {
        "description":"Light Drizzle",
        "image":"http://openweathermap.org/img/wn/09d@2x.png"
      },
      0: {
        "description":"Light Drizzle",
        "image":"http://openweathermap.org/img/wn/09n@2x.png"
      }
    },
    53: {
      1: {
        "description":"Drizzle",
        "image":"http://openweathermap.org/img/wn/09d@2x.png"
      },
      0: {
        "description":"Drizzle",
        "image":"http://openweathermap.org/img/wn/09n@2x.png"
      }
    },
    55: {
      1: {
        "description":"Heavy Drizzle",
        "image":"http://openweathermap.org/img/wn/09d@2x.png"
      },
      0: {
        "description":"Heavy Drizzle",
        "image":"http://openweathermap.org/img/wn/09n@2x.png"
      }
    },
    56: {
      1: {
        "description":"Light Freezing Drizzle",
        "image":"http://openweathermap.org/img/wn/09d@2x.png"
      },
      0: {
        "description":"Light Freezing Drizzle",
        "image":"http://openweathermap.org/img/wn/09n@2x.png"
      }
    },
    57: {
      1: {
        "description":"Freezing Drizzle",
        "image":"http://openweathermap.org/img/wn/09d@2x.png"
      },
      0: {
        "description":"Freezing Drizzle",
        "image":"http://openweathermap.org/img/wn/09n@2x.png"
      }
    },
    61: {
      1: {
        "description":"Light Rain",
        "image":"http://openweathermap.org/img/wn/10d@2x.png"
      },
      0: {
        "description":"Light Rain",
        "image":"http://openweathermap.org/img/wn/10n@2x.png"
      }
    },
    63: {
      1: {
        "description":"Rain",
        "image":"http://openweathermap.org/img/wn/10d@2x.png"
      },
      0: {
        "description":"Rain",
        "image":"http://openweathermap.org/img/wn/10n@2x.png"
      }
    },
    65: {
      1: {
        "description":"Heavy Rain",
        "image":"http://openweathermap.org/img/wn/10d@2x.png"
      },
      0: {
        "description":"Heavy Rain",
        "image":"http://openweathermap.org/img/wn/10n@2x.png"
      }
    },
    66: {
      1: {
        "description":"Freezing Rain",
        "image":"http://openweathermap.org/img/wn/10d@2x.png"
      },
      0: {
        "description":"Freezing Rain",
        "image":"http://openweathermap.org/img/wn/10n@2x.png"
      }
    },
    67: {
      1: {
        "description":"Freezing Rain",
        "image":"http://openweathermap.org/img/wn/10d@2x.png"
      },
      0: {
        "description":"Freezing Rain",
        "image":"http://openweathermap.org/img/wn/10n@2x.png"
      }
    },
    71: {
      1: {
        "description":"Light Snow",
        "image":"http://openweathermap.org/img/wn/13d@2x.png"
      },
      0: {
        "description":"Light Snow",
        "image":"http://openweathermap.org/img/wn/13n@2x.png"
      }
    },
    73: {
      1: {
        "description":"Snow",
        "image":"http://openweathermap.org/img/wn/13d@2x.png"
      },
      0: {
        "description":"Snow",
        "image":"http://openweathermap.org/img/wn/13n@2x.png"
      }
    },
    75: {
      1: {
        "description":"Heavy Snow",
        "image":"http://openweathermap.org/img/wn/13d@2x.png"
      },
      0: {
        "description":"Heavy Snow",
        "image":"http://openweathermap.org/img/wn/13n@2x.png"
      }
    },
    77: {
      1: {
        "description":"Snow Grains",
        "image":"http://openweathermap.org/img/wn/13d@2x.png"
      },
      0: {
        "description":"Snow Grains",
        "image":"http://openweathermap.org/img/wn/13n@2x.png"
      }
    },
    80: {
      1: {
        "description":"Light Showers",
        "image":"http://openweathermap.org/img/wn/09d@2x.png"
      },
      0: {
        "description":"Light Showers",
        "image":"http://openweathermap.org/img/wn/09n@2x.png"
      }
    },
    81: {
      1: {
        "description":"Showers",
        "image":"http://openweathermap.org/img/wn/09d@2x.png"
      },
      0: {
        "description":"Showers",
        "image":"http://openweathermap.org/img/wn/09n@2x.png"
      }
    },
    82: {
      1: {
        "description":"Heavy Showers",
        "image":"http://openweathermap.org/img/wn/09d@2x.png"
      },
      0: {
        "description":"Heavy Showers",
        "image":"http://openweathermap.org/img/wn/09n@2x.png"
      }
    },
    85: {
      1: {
        "description":"Snow Showers",
        "image":"http://openweathermap.org/img/wn/13d@2x.png"
      },
      0: {
        "description":"Snow Showers",
        "image":"http://openweathermap.org/img/wn/13n@2x.png"
      }
    },
    86: {
      1: {
        "description":"Snow Showers",
        "image":"http://openweathermap.org/img/wn/13d@2x.png"
      },
      0: {
        "description":"Snow Showers",
        "image":"http://openweathermap.org/img/wn/13n@2x.png"
      }
    },
    95: {
      1: {
        "description":"Thunderstorm",
        "image":"http://openweathermap.org/img/wn/11d@2x.png"
      },
      0: {
        "description":"Thunderstorm",
        "image":"http://openweathermap.org/img/wn/11n@2x.png"
      }
    },
    96: {
      1: {
        "description":"Thunderstorm With Hail",
        "image":"http://openweathermap.org/img/wn/11d@2x.png"
      },
      0: {
        "description":"Thunderstorm With Hail",
        "image":"http://openweathermap.org/img/wn/11n@2x.png"
      }
    },
    99: {
      1: {
        "description":"Thunderstorm With Hail",
        "image":"http://openweathermap.org/img/wn/11d@2x.png"
      },
      0: {
        "description":"Thunderstorm With Hail",
        "image":"http://openweathermap.org/img/wn/11n@2x.png"
      }
    }
  }

export default WeatherIcons;
