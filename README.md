# table-generator for Astarium

Szybki podgląd: http://table-generator.tymdev.pl/ jeżeli wyświetla się informacja o niezabezpieczonej stronie należy kliknąć "Zaawansowane" a następnie "Odwiedź mimo to".

## Instalacja

Wymagany jest zainstalowany NodeJS.

- $ git clone https://github.com/d0peCode/table-generator
- $ cd table-generator
- $ npm i
- $ npm run serve

## Testy

Testy oczywiście wymagają uprzedniego poprawnego uruchomienia aplikacji poprzez `npm run serve`. Aplikacja powinna działać na porcie `:8080` (może się zdarzyć, że jeśli port `8080` jest zajęty to aplikacja uruchomi się na `8081` po `npm run serve`).
### e2e (Puppeteer)

- npm run test:e2e

### unit (Jest)

- npm run test:unit

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
