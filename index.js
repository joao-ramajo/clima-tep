import { htmlBody, rawBody } from "./body.js";
import { send } from "./email.js";
import { geo } from "./geo.js";
import { weather } from "./weather.js";
import { loadEnvFile } from 'node:process';

loadEnvFile();

const main = async () => {
    try {
        const geoInfo = await geo();
        const weatherInfo = await weather(geoInfo);

        const message = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_TO,
            subject: "Atualização de temperatura",
            text: rawBody(geoInfo, weatherInfo),
            html: htmlBody(geoInfo, weatherInfo),
        };

        await send(message);
    } catch (error) {
        console.error('Houve um erro durante o processamento: ' + error.message);
    }
}

main();