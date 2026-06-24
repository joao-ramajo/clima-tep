export type WeatherForecastResponse = {
	current_units: {
		temperature_2m: string;
		wind_speed_10m: string;
		apparent_temperature: string;
	};
	current: {
		apparent_temperature: number;
		temperature_2m: number;
		wind_speed_10m: number;
	};
};
