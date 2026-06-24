export const formatGeoUrl = (city: string): string => {
    const data: Record<string, string | string> = {
        name: city,
        count: "1",
        language: "pt",
        format: "json"
    }
    const params = new URLSearchParams(data);
    const queryString = params.toString();
    return `https://geocoding-api.open-meteo.com/v1/search?${queryString}`
}