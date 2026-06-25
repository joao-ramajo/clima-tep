# Clima TEP

Projeto simples em TypeScript para enviar atualizações de clima por e-mail.

Ele busca a localização de uma cidade, consulta as informações atuais do clima na Open-Meteo e envia um resumo por e-mail com temperatura, sensação térmica, vento, umidade e condição do tempo.

## Tecnologias

- Node.js
- TypeScript
- Nodemailer
- Biome
- GitHub Actions
- Open-Meteo API

## Configuração

Crie um arquivo `.env` na raiz do projeto seguindo o exemplo de `.env.example`:

```env
MAIL_USER=""
MAIL_PASS=""
WEATHER_RECIPIENTS=[{"to":"destino@email.com","city":"São Paulo"}]
```

Variáveis:

- `MAIL_USER`: e-mail usado para enviar as mensagens.
- `MAIL_PASS`: senha ou app password do provedor de e-mail.
- `WEATHER_RECIPIENTS`: lista de destinatários e cidades em formato JSON.

Exemplo com múltiplos destinatários:

```env
WEATHER_RECIPIENTS=[{"to":"pessoa1@email.com","city":"São Paulo"},{"to":"pessoa2@email.com","city":"Rio de Janeiro"}]
```

## Comandos

Instalar dependências:

```bash
npm install
```

Gerar build:

```bash
npm run build
```

Executar o projeto compilado:

```bash
npm start
```

Buildar e executar:

```bash
npm run start:build
```

Rodar lint:

```bash
npm run lint
```

## Automação

O projeto possui um workflow em `.github/workflows/weather_email.yaml`.

Ele pode ser executado manualmente pelo GitHub Actions ou automaticamente nos horários configurados no cron:

```yaml
17 9,13,17,21,1 * * *
```

No GitHub Actions, configure os secrets:

- `MAIL_USER`
- `MAIL_PASS`
- `WEATHER_RECIPIENTS`

## Estrutura

- `src/index.ts`: fluxo principal da aplicação.
- `src/services`: chamadas para APIs externas.
- `src/utils`: funções auxiliares.
- `src/types`: tipos usados pelo projeto.
- `src/body.ts`: montagem do corpo do e-mail.
- `src/email.ts`: envio do e-mail.
