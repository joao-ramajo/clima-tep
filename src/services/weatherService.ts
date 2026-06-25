import type { GeoData } from "../types/geoData.js";
import type { WeatherData } from "../types/weatherData.js";
import type { WeatherForecastResponse } from "../types/weatherForecastResponse.js";
import { formatWeatherCode } from "../utils/formatWeatherCode.js";
import { formatWeatherUrl } from "../utils/formatWeatherUrl.js";

export const getWeatherData = async (
	geoData: GeoData,
): Promise<WeatherData> => {
	console.log(formatWeatherUrl(geoData.latitude, geoData.longitude));
	const response = await fetch(
		formatWeatherUrl(geoData.latitude, geoData.longitude),
	);

	if (!response.ok) {
		throw new Error(
			`Houve um erro ao buscar informações sobre o tempo: ${response.status}`,
		);
	}

	const data = (await response.json()) as WeatherForecastResponse;

	const condition = formatWeatherCode(data.current.weather_code);

	return {
		temperature: `${data.current.temperature_2m + data.current_units.temperature_2m}`,
		apparentTemperature: `${data.current.apparent_temperature + data.current_units.apparent_temperature}`,
		windSpeed: `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`,
		humidity: `${data.current.relative_humidity_2m + data.current_units.relative_humidity_2m}`,
		condition: condition,
	};
};
