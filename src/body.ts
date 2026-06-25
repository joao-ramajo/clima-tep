import type { GeoData } from "./types/geoData.js";
import type { WeatherData } from "./types/weatherData.js";

export const rawBody = (geoInfo: GeoData, weatherInfo: WeatherData): string => {
	return `
        Cidade: ${geoInfo.cityName}
        Temperatura: ${weatherInfo.temperature}
        Sensação térmica: ${weatherInfo.apparentTemperature}
        Vento: ${weatherInfo.windSpeed}
        Umidade: ${weatherInfo.humidity}
        Condição: ${weatherInfo.condition}
    `;
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
<body style="margin: 0; padding: 24px; background-color: #f4f4f5; font-family: Arial, sans-serif; color: #18181b;">

<table width="520" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 12px; overflow: hidden;">

    <!-- Header -->
    <tr>
        <td bgcolor="#1a6fb5" style="padding: 24px; border-radius: 12px 12px 0 0;">
            <div style="font-size: 18px; color: #bfdbf7;">${geoInfo.cityName}</div>
            <div style="margin-top: 6px; font-size: 22px; font-weight: bold; color: #ffffff;">Previsão do tempo</div>
            <div style="margin-top: 4px; font-size: 12px; color: #bfdbf7;">Atualização automática de temperatura</div>
        </td>
    </tr>

    <!-- Temperatura -->
    <tr>
        <td style="padding: 20px 20px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#eaf3fb" style="border: 1px solid #c8dff5; border-radius: 10px;">
                <tr>
                    <td style="padding: 16px 18px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                                <td style="vertical-align: middle; width: 44px; font-size: 28px;">☀️</td>
                                <td style="vertical-align: middle; padding-left: 8px;">
                                    <div style="font-size: 11px; color: #4a7dab;">Temperatura</div>
                                    <div style="font-size: 30px; font-weight: bold; color: #1a4f80; line-height: 1.1;">${weatherInfo.temperature}</div>
                                </td>
                                <td align="right" style="vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td bgcolor="#1a6fb5" style="font-size: 12px; color: #ffffff; padding: 4px 12px; border-radius: 20px;">
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

    <!-- Sensação térmica -->
    <tr>
        <td style="padding: 10px 20px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#fef6e8" style="border: 1px solid #f5dfa8; border-radius: 10px;">
                <tr>
                    <td style="padding: 14px 16px;">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td style="vertical-align: middle; width: 36px; font-size: 22px;">🌡️</td>
                                <td style="padding-left: 10px; vertical-align: middle;">
                                    <div style="font-size: 11px; color: #a06010;">Sensação térmica</div>
                                    <div style="font-size: 20px; font-weight: bold; color: #7a4a08;">${weatherInfo.apparentTemperature}</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <!-- Umidade -->
    <tr>
        <td style="padding: 10px 20px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#eaf5f0" style="border: 1px solid #a8dcc0; border-radius: 10px;">
                <tr>
                    <td style="padding: 14px 16px;">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td style="vertical-align: middle; width: 36px; font-size: 22px;">💧</td>
                                <td style="padding-left: 10px; vertical-align: middle;">
                                    <div style="font-size: 11px; color: #1a8050;">Umidade</div>
                                    <div style="font-size: 20px; font-weight: bold; color: #0d5c38;">${weatherInfo.humidity}</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <!-- Vento -->
    <tr>
        <td style="padding: 10px 20px 0;">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#f0effe" style="border: 1px solid #cdc8f5; border-radius: 10px;">
                <tr>
                    <td style="padding: 14px 16px;">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td style="vertical-align: middle; width: 36px; font-size: 22px;">💨<i class="fa-solid fa-wind"></i></td>
                                <td style="padding-left: 10px; vertical-align: middle;">
                                    <div style="font-size: 11px; color: #5b4cc4;">Velocidade do vento</div>
                                    <div style="font-size: 20px; font-weight: bold; color: #3b2fa0;">${weatherInfo.windSpeed}</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="padding: 20px 24px; text-align: center; font-size: 11px; color: #9ca3af;">
            Gerado automaticamente · Não responda este e-mail
        </td>
    </tr>

</table>

</body>
</html>
`;
};
