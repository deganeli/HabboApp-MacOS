# HabboApp
Jogue Habbo de forma nativa em computadores com MacOS.

## Como criar o aplicativo?
1. Baixe e Instale o NodeJS: https://nodejs.org/
 
2. Abra o `Terminal` e navegue até a pasta do HabboApp.

3. Instale as dependências com: `npm install`

4. Abra o arquivo `package.json` e edite as informações:

    • productName = Nome do Hotel
    
    • appId = app.habboapp.r4zor (edite no Main.js!)

5. Abra o arquivo de configuração `config.env` e altere os links:

    URL = https://www.habbo.com
    
    SHORT_URL = habbo.com
    
6. Edite o arquivo `views/home.html`

7. No `Terminal` digite o seguinte comando para testar o aplicativo: `npm start` 

8. Boa! O aplicativo já deve funcionar normalmente o hotel já deve estar carregando sem problemas.

9. Ainda no `Terminal` digite o comando abaixo para compilar o aplicativo:
    * `npm run mac` 
    
10. Pronto! Aplicativo compilado! Abra a pasta `dist` e o seu .dmg estará lá pronto para ser divulgado.

## Agradecimentos
Electron<br>
NodeJS<br>
Chromium<br>
Apple<br>
AsteroidDev<br>
r4zor (rettro)<br>

