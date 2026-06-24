export const rawBody = (geoInfo: Record<string, string>, weatherInfo: Record<string, string>): string => {
    return `Cidade: ${geoInfo.location} Temperatura: ${weatherInfo.temperature} ${weatherInfo.temperatureUnit} Vento: ${weatherInfo.windSpeed} ${weatherInfo.windUnit}`;
}

export const htmlBody = (geoInfo: Record<string, string>, weatherInfo: Record<string, string>) => {
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <title>Atualização de temperatura</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #f4f4f5; font-family: Arial, sans-serif; color: #18181b;">
    <div style="max-width: 520px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e4e4e7;">
        <h1 style="margin: 0 0 8px; font-size: 24px; color: #18181b;">
            Previsão do tempo
        </h1>

        <p style="margin: 0 0 24px; font-size: 14px; color: #71717a;">
            Atualização automática de temperatura
        </p>

        <div style="padding: 16px; border-radius: 10px; background-color: #f9fafb; margin-bottom: 12px;">
            <strong style="display: block; font-size: 13px; color: #71717a; margin-bottom: 4px;">
                Cidade
            </strong>
            <span style="font-size: 18px;">
                ${geoInfo.location}
            </span>
        </div>

        <div style="padding: 16px; border-radius: 10px; background-color: #f9fafb; margin-bottom: 12px;">
            <strong style="display: block; font-size: 13px; color: #71717a; margin-bottom: 4px;">
                Temperatura
            </strong>
            <span style="font-size: 28px; font-weight: bold;">
                ${weatherInfo.temperature} ${weatherInfo.temperatureUnit}
            </span>
        </div>

        <div style="padding: 16px; border-radius: 10px; background-color: #f9fafb;">
            <strong style="display: block; font-size: 13px; color: #71717a; margin-bottom: 4px;">
                Vento
            </strong>
            <span style="font-size: 18px;">
                ${weatherInfo.windSpeed} ${weatherInfo.windUnit}
            </span>
        </div>
    </div>
</body>
</html>
`}