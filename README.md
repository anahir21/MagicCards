# MagicCards
This program filters data from an API, to show Magic Cards depending on which color and type selected by the user.

# Magic Cards Filter

Este proyecto es una aplicación web simple que permite filtrar cartas de Magic: The Gathering por color y tipo utilizando la API de Scryfall (https://scryfall.com/docs/api). El usuario puede seleccionar opciones de color y tipo, y luego utilizar el botón para filtrar los resultados para mostrar las cartas correspondientes.

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (incluye `npm`)

## Instrucciones de instalación

### Windows / macOS / Linux

1. **Instalar Node.js:**

   Si no tienes Node.js instalado, lo puedes descargar e instalar desde [aquí](https://nodejs.org/). La instalación de Node.js incluye `npm` (Node Package Manager).

2. **Clonar el repositorio:**

   Abre una terminal y clona el repositorio:

   ```bash
   git clone --
3. Navegar al directorio del proyecto:

   cd magic-cards-filter

4. Ejecutar el proyecto
   
Para ejecutar el proyecto, necesitas un servidor local. Puedes usar http-server, un paquete npm que ayuda a ejecutar archivos locales a través de HTTP.

- Instalar http-server globalmente:

npm install -g http-server

- Iniciar el servidor:

En el directorio del proyecto, ejecuta:

http-server

Abrir la aplicación en el navegador:

Abre tu navegador web y en la barra de navegación, ingresa http://localhost:8080. Aquí podrás ver la aplicación funcionando.

#Estructura del proyecto

magic-cards-filter/
├── index.html      # Contiene el HTML principal
├── style.css       # Contiene los estilos CSS
└── script.js       # Contiene el código JavaScript para la funcionalidad de filtrar y mostrar las cartas

index.html
Este archivo contiene la estructura básica HTML de la aplicación, incluyendo los menús desplegables para seleccionar color y tipo, y el botón de filtrado.

style.css
Este archivo contiene los estilos CSS para la aplicación, de los menús desplegables y  de los resultados, para que estos se muestren correctamente.

script.js
Este archivo contiene el código JavaScript que maneja la lógica de filtrado y muestra los resultados de la API de Scryfall en la página.

#Uso
Abre la aplicación en tu navegador.
Selecciona un color y un tipo utilizando los menús desplegables.
Haz clic en el botón "Filter".
Las cartas correspondientes aparecerán en la página.

Notas
Si alguna carta no tiene una imagen disponible, la aplicación intentará cargar la siguiente carta en la lista.
Las cartas se muestran en un formato más pequeño para permitir una mejor visualización en la página.

   
