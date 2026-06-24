export const formatWeatherUrl = (
	latitude: string,
	longitude: string,
): string => {
	const data: Record<string, string> = {
		latitude,
		longitude,
		current:
			"temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code",
	};

	const queryString = new URLSearchParams(data).toString();

	return `https://api.open-meteo.com/v1/forecast?${queryString}`;
};
