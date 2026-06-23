export const weather = async (geoInfo) => {
    const weatherInfoUrl = (lat, long) => {
        const data = {
            latitude: lat,
            longitude: long,
        }
        const params = new URLSearchParams(data);
        const queryString = params.toString();
        return `https://api.open-meteo.com/v1/forecast?${queryString}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code`
    }
    const response = await fetch(weatherInfoUrl(geoInfo.lat, geoInfo.long));

    if (!response.ok) {
        throw new Error(`Houve um erro ao buscar informações sobre o tempo: ${response.status}`);
    }

    const data = await response.json();

    const weatherInfo = {
        temperatureUnit: data.current_units.temperature_2m,
        windUnit: data.current_units.wind_speed_10m,
        apparentTemperature: data.current.apparent_temperature,
        temperature: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m
    };

    return weatherInfo;
}

