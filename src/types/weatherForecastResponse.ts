export type WeatherForecastResponse = {
	current_units: {
		temperature_2m: string;
		wind_speed_10m: string;
		apparent_temperature: string;
		relative_humidity_2m: string;
	};
	current: {
		apparent_temperature: number;
		temperature_2m: number;
		wind_speed_10m: number;
		relative_humidity_2m: number;
		weather_code: number;
	};
};
