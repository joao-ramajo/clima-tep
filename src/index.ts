import { htmlBody, rawBody } from "./body.js";
import { bootstrap } from "./bootstrap.js";
import { send } from "./email.js";
import { getGeoData } from "./services/geoService.js";
import { getWeatherData } from "./services/weatherService.js";
import { requiredEnv } from "./utils/requireEnv.js";

bootstrap();

const MAIL_USER = requiredEnv("MAIL_USER");
const RECIPIENTS = requiredEnv("WEATHER_RECIPIENTS");

export type WeatherRecipient = {
	to: string;
	city: string;
};

const recipients = JSON.parse(RECIPIENTS ?? "[]") as WeatherRecipient[];

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

		for (const recipient of recipients) {
			const geoInfo = await getGeoData(recipient.city);
			const weatherInfo = await getWeatherData(geoInfo);

			const message: Record<string, string> = {
				from: MAIL_USER,
				to: recipient.to,
				subject: `Atualização de temperatura - ${recipient.city} ${formattedDateTime}`,
				text: rawBody(geoInfo, weatherInfo),
				html: htmlBody(geoInfo, weatherInfo),
			};

			await send(message);

			console.log(`Email enviado com informações sobre ${recipient.city}`);
		}
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Houve um erro durante o processamento: ${error.message}`);
			return;
		}

		console.error("Houve um erro desconhecido durante o processamento:", error);

		process.exit(1);
	}
};

main();
