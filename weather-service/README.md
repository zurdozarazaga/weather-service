### Weather Service

App para buscar la informaci贸n meteorol贸gica de una ciudad.

## Comenzando 馃殌

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._


### Pre-requisitos 馃搵
Deberas tener instalado lo siguiente :
    * [Node.js](https://nodejs.org/)
    * [npm](https://www.npmjs.com/)
    * [Git](https://git-scm.com/)

  Para poder utilizar la aplicaci贸n meteorol贸gica usted deber谩 poseer una api key desde OpenWeatherMap.
  La misma se realiza en la secci贸n **Configuraci贸n**. 
    
### Instalaci贸n 馃敡

    * Instala Node.js y npm:
        ```
        npm install -g npm
        npm install -g node
        ```
  Clona el repositorio en tu m谩quina local:

  Una vez dentro del directorio del proyecto, ejecuta:

     *
        ```
        npm install
        
        ```

  Luego para ejecutar el proyecto:

    *
        ```
        npm start
        ```
  Se te abrir谩 un ambiente de desarrollo en el navegador en el que podr谩s interactuar con el proyecto.
  
### Configuraci贸n 馃敡

Para poder obtener la API key deber谩 ingresar a
 
    *```
      https://openweathermap.org/
      ```
  y registrarse.
en el apartado de key podr谩 encontrala

Cree un archivo .env en la raiz del proyecto con la siguiente configuraci贸n:
```
REACT_APP_API_KEY_OPEN_WEATER_MAP= < YOUR API KEY>
REACT_APP_URL_API = https://api.openweathermap.org/data/2.5/weather?q=
  

### TECNOLOGIAS 馃敡

Para la realizaci贸n de este proyecto se bas贸 integramente con la libreria ReactJS

Para la maquetaci贸n y estilos se utiliz贸 Tailwind CSS.

Iconos se utiliz贸 Font Awesome.

Para el manejo de estados se usaron useState, useEffect y useContext. Como asi tambi茅n para los disparadores de acciones el useReducer

Los datos se consumieron desde la API de OpenWeatherMap. Los mismos se realizaron con fetch.

Creditos:
鈥渋magen: Freepik.com鈥?. La portada ha sido dise帽ada usando im谩genes de Freepik.com
