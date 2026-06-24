import { loadEnvFile } from 'node:process';
import { geo } from './geo.js';
import { weather } from './weather.js';
import { htmlBody, rawBody } from './body.js';
import { send } from './email.js';

// loadEnvFile();

const MAIL_USER = process.env.MAIL_USER ?? "user";
const MAIL_TO = process.env.MAIL_TO ?? "to";

const main = async () => {
    try {
        const now = new Date();

        const formattedDateTime = new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "America/Sao_Paulo",
        }).format(now);

        const geoInfo = await geo();
        const weatherInfo = await weather(geoInfo);

        const message: Record<string, string> = {
            from: MAIL_USER,
            to: MAIL_TO,
            subject: `Atualização de temperatura ${formattedDateTime}`,
            text: rawBody(geoInfo, weatherInfo),
            html: htmlBody(geoInfo, weatherInfo),
        };

        await send(message);
    } catch (error: any) {
        console.error('Houve um erro durante o processamento: ' + error.message);
    }
}

main();