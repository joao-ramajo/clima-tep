export const geo = async () => {
    const geoInfoUrl = (city) => {
        const data = {
            name: city,
            count: 1,
            language: "pt",
            format: "json"
        }
        const params = new URLSearchParams(data);
        const queryString = params.toString();
        return `https://geocoding-api.open-meteo.com/v1/search?${queryString}`
    }

    const response = await fetch(geoInfoUrl("Carapicuiba"));

    if (!response.ok) {
        throw new Error(`Houve um erro ao buscar informações da localização: ${response.status}`);
    }

    const data = await response.json();

    const geoInfo = {
        location: data.results[0].name,
        lat: data.results[0].latitude,
        long: data.results[0].longitude,
    }

    return geoInfo;
}