import type { GeoData } from "./types/geoData.js";
import type { WeatherData } from "./types/weatherData.js";

export const rawBody = (geoInfo: GeoData, weatherInfo: WeatherData): string => {
	return `Cidade: ${geoInfo.cityName}
Temperatura: ${weatherInfo.temperature}
Sensação térmica: ${weatherInfo.apparentTemperature}
Vento: ${weatherInfo.windSpeed}
Umidade: ${weatherInfo.humidity}
Condição: ${weatherInfo.condition}`;
};

export const htmlBody = (
	geoInfo: GeoData,
	weatherInfo: WeatherData,
): string => {
	return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <title>Atualização de temperatura</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #eef2f7; font-family: Arial, Helvetica, sans-serif; color: #172033;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td align="center">

            <table role="presentation" width="520" cellpadding="0" cellspacing="0" border="0" style="width: 520px; max-width: 520px; background-color: #ffffff; border: 1px solid #dde5ef; border-radius: 16px; overflow: hidden;">

                <!-- Header -->
                <tr>
                    <td style="padding: 28px 28px 24px; background-color: #155f9c;">
                        <div style="font-size: 12px; line-height: 1.4; color: #c7ddf2; text-transform: uppercase; letter-spacing: 0.08em;">
                            Atualização automática
                        </div>

                        <div style="margin-top: 8px; font-size: 24px; line-height: 1.25; font-weight: bold; color: #ffffff;">
                            Previsão do tempo
                        </div>

                        <div style="margin-top: 4px; font-size: 15px; line-height: 1.4; color: #dcecff;">
                            ${geoInfo.cityName}
                        </div>
                    </td>
                </tr>

                <!-- Temperatura principal -->
                <tr>
                    <td style="padding: 24px 24px 0;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f0f7ff; border: 1px solid #c8dff5; border-radius: 14px;">
                            <tr>
                                <td style="padding: 22px;">
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td width="52" style="vertical-align: middle;">
                                                <img
                                                    src="https://raw.githubusercontent.com/joao-ramajo/clima-tep/main/public/icons/cloud-sun-rain-solid-full.svg"
                                                    alt="Ícone de clima"
                                                    width="40"
                                                    height="40"
                                                    style="display: block;"
                                                />
                                            </td>

                                            <td style="vertical-align: middle;">
                                                <div style="font-size: 12px; line-height: 1.4; color: #426f99;">
                                                    Temperatura atual
                                                </div>

                                                <div style="margin-top: 2px; font-size: 38px; line-height: 1; font-weight: bold; color: #124a78;">
                                                    ${weatherInfo.temperature}
                                                </div>
                                            </td>

                                            <td align="right" style="vertical-align: middle;">
                                                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                                    <tr>
                                                        <td style="background-color: #155f9c; color: #ffffff; font-size: 12px; line-height: 1; font-weight: bold; padding: 8px 12px; border-radius: 999px;">
                                                            ${weatherInfo.condition}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Métricas secundárias -->
                <tr>
                    <td style="padding: 14px 24px 0;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>

                                <!-- Sensação -->
                                <td width="33.33%" style="padding-right: 6px; vertical-align: top;">
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff8eb; border: 1px solid #f1dfb8; border-radius: 12px;">
                                        <tr>
                                            <td style="padding: 14px;">
                                                <img
                                                    src="https://raw.githubusercontent.com/joao-ramajo/clima-tep/main/public/icons/temperature-empty-solid.png"
                                                    alt="Ícone de temperatura"
                                                    width="22"
                                                    height="22"
                                                    style="display: block;"
                                                />

                                                <div style="margin-top: 10px; font-size: 11px; line-height: 1.3; color: #9a640f;">
                                                    Sensação
                                                </div>

                                                <div style="margin-top: 2px; font-size: 18px; line-height: 1.2; font-weight: bold; color: #6f4608;">
                                                    ${weatherInfo.apparentTemperature}
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>

                                <!-- Umidade -->
                                <td width="33.33%" style="padding-left: 6px; padding-right: 6px; vertical-align: top;">
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #eefaf5; border: 1px solid #b8e2cc; border-radius: 12px;">
                                        <tr>
                                            <td style="padding: 14px;">
                                                <img
                                                    src="https://raw.githubusercontent.com/joao-ramajo/clima-tep/main/public/icons/droplet-solid.png"
                                                    alt="Ícone de umidade"
                                                    width="22"
                                                    height="22"
                                                    style="display: block;"
                                                />

                                                <div style="margin-top: 10px; font-size: 11px; line-height: 1.3; color: #22724e;">
                                                    Umidade
                                                </div>

                                                <div style="margin-top: 2px; font-size: 18px; line-height: 1.2; font-weight: bold; color: #115737;">
                                                    ${weatherInfo.humidity}
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>

                                <!-- Vento -->
                                <td width="33.33%" style="padding-left: 6px; vertical-align: top;">
                                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f3f1ff; border: 1px solid #d4cdf5; border-radius: 12px;">
                                        <tr>
                                            <td style="padding: 14px;">
                                                <img
                                                    src="https://raw.githubusercontent.com/joao-ramajo/clima-tep/main/public/icons/wind-solid.png"
                                                    alt="Ícone de vento"
                                                    width="22"
                                                    height="22"
                                                    style="display: block;"
                                                />

                                                <div style="margin-top: 10px; font-size: 11px; line-height: 1.3; color: #5b4cc4;">
                                                    Vento
                                                </div>

                                                <div style="margin-top: 2px; font-size: 18px; line-height: 1.2; font-weight: bold; color: #3b2fa0;">
                                                    ${weatherInfo.windSpeed}
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>

                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Resumo textual -->
                <tr>
                    <td style="padding: 18px 24px 0;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
                            <tr>
                                <td style="padding: 14px 16px; font-size: 13px; line-height: 1.5; color: #475569;">
                                    Em <strong style="color: #172033;">${geoInfo.cityName}</strong>, a temperatura atual é de
                                    <strong style="color: #172033;">${weatherInfo.temperature}</strong>, com sensação térmica de
                                    <strong style="color: #172033;">${weatherInfo.apparentTemperature}</strong>.
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td style="padding: 22px 24px 24px; text-align: center; font-size: 11px; line-height: 1.5; color: #94a3b8;">
                        Gerado automaticamente · Não responda este e-mail
                    </td>
                </tr>

            </table>

        </td>
    </tr>
</table>

</body>
</html>
`;
};
