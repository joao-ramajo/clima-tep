import { GeoCodingResponse } from "../types/geoCodingResponse.js";
import { GeoData } from "../types/geoData.js";
import { formatGeoUrl } from "../utils/formatGeoUrl.js";


export const getGeoData = async (city: string): Promise<GeoData> => {
    const response = await fetch(formatGeoUrl(city));

    if (!response.ok) {
        throw new Error(`Houve um erro ao buscar informações da localização: ${response.status}`);
    }

    const data = await response.json() as GeoCodingResponse;

    const result = data.results?.[0];

    if (!result) {
        throw new Error(`Cidade não encontrada: ${city}`);
    }

    return {
        latitude: result.latitude.toString(),
        longitude: result.longitude.toString(),
        cityName: result.name
    };
}