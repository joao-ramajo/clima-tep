export type GeoCodingResponse = {
    results: {
        name: string;
        latitude: number;
        longitude: number;
    }[];
};