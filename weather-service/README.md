### Weather Service

App para buscar la información meteorológica de una ciudad.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋
Deberas tener instalado lo siguiente :
    * [Node.js](https://nodejs.org/)
    * [npm](https://www.npmjs.com/)
    * [Git](https://git-scm.com/)

  Para poder utilizar la aplicación meteorológica usted deberá poseer una api key desde OpenWeatherMap.
  La misma se realiza en la sección **Configuración**. 
    
### Instalación 🔧

    * Instala Node.js y npm:
        ```
        npm install -g npm
        npm install -g node
        ```
  Clona el repositorio en tu máquina local:

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
  Se te abrirá un ambiente de desarrollo en el navegador en el que podrás interactuar con el proyecto.
  
### Configuración 🔧

Para poder obtener la API key deberá ingresar a
 
    *```
      https://openweathermap.org/
      ```
  y registrarse.
en el apartado de key podrá encontrala

Cree un archivo .env en la raiz del proyecto con la siguiente configuración:
```
REACT_APP_API_KEY_OPEN_WEATER_MAP= < YOUR API KEY>
REACT_APP_URL_API = https://api.openweathermap.org/data/2.5/weather?q=
  

### TECNOLOGIAS 🔧

Para la realización de este proyecto se basó integramente con la libreria ReactJS

Para la maquetación y estilos se utilizó Tailwind CSS.

Iconos se utilizó Font Awesome.

Para el manejo de estados se usaron useState, useEffect y useContext. Como asi también para los disparadores de acciones el useReducer

Los datos se consumieron desde la API de OpenWeatherMap. Los mismos se realizaron con fetch.

Creditos:
“imagen: Freepik.com”. La portada ha sido diseñada usando imágenes de Freepik.com
