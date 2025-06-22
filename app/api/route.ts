import { NextRequest, NextResponse } from "next/server";
import { WeatherAPI, WeatherIcons, WeatherStyle, ToSlashDate } from "../lib/utils";

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;

    const lat = params.get("lat") || "";
    const long = params.get("long") || "";

    const api = WeatherAPI(lat, long);

    const response = await fetch(api);

    const data = await response.json();

    const { current_weather, hourly, daily } = data;

    current_weather.time = ToSlashDate(current_weather.time.split("T")[0]);

    const { weathercode, is_day } = current_weather;

    current_weather.icon = WeatherIcons[weathercode][is_day];

    const hourly_weather = hourly.time.map((value: string, index: number) => ({
        "time": new Date(value).getHours(),
        "temperature": hourly.temperature_2m[index],
        "precipitation": hourly.precipitation_probability[index],
        "wind speed": hourly.windspeed_10m[index]
    }));

    const daily_weather = daily.time.map((value: string, index: number) => ({
        date: ToSlashDate(value),
        icon: WeatherIcons[daily.weathercode[index]][0],
        max: daily.temperature_2m_max[index],
        min: daily.temperature_2m_min[index],
        ppt: daily.precipitation_probability_max[index],
        wind: daily.windspeed_10m_max[index],
    }));

    return NextResponse.json({
        style: WeatherStyle(weathercode, is_day),
        current_weather,
        hourly_weather,
        daily_weather
    });
}