import type { GeoData } from "../types/geoData.js";
import type { WeatherData } from "../types/weatherData.js";
import type { WeatherForecastResponse } from "../types/weatherForecastResponse.js";
import { formatWeatherUrl } from "../utils/formatWeatherUrl.js";

export const getWeatherData = async (geoData: GeoData): Promise<WeatherData> => {
    const response = await fetch(formatWeatherUrl(
        geoData.latitude,
        geoData.longitude
    ));

    if (!response.ok) {
        throw new Error(`Houve um erro ao buscar informações sobre o tempo: ${response.status}`);
    }

    const data = await response.json() as WeatherForecastResponse;

    return {
        temperatureUnit: data.current_units.temperature_2m,
        windUnit: data.current_units.wind_speed_10m,
        apparentTemperatureUnit: data.current_units.apparent_temperature,
        apparentTemperature: data.current.apparent_temperature,
        temperature: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m,
    };
};