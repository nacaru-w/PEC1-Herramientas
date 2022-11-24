---
title: "PEC 1: Desarrollo de una web"
subtitle: "Herramientas HTML y CSS: Universitat Oberta de Catalunya"
date: "Noviembre de 2022"
author: "Ignacio Casares Ruiz"
documentclass: scrreprt
colorlinks: true
header-includes:
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}
 - \renewcommand{\figurename}{Imagen}
---

En este documento se describirán los pasos que se siguieron en la elaboración del proyecto. Se han descrito estos de forma concisa y objetiva, intentando respetar el orden cronológico en el que sucedieron las distintas tomas de decisión y posteriores ejecuciones de las mismas, aunque dando siempre prioridad al orden temático. 

La página final es accessible de forma pública a través del siguiente enlace:

COMPLETAR

El proyecto se realizó en un ordenador con un SO Linux Ubuntu 22.04.1 LTS. Para la redacción de la parte teórica se creó un documento en formato [markdown](https://www.markdownguide.org/) que sería posteriormente transformado en un documento PDF a través de LaTeX con la herramienta de conversión libre [Pandoc](https://pandoc.org/).

## Aspectos generales
Antes de comenzar el aspecto programático del diseño de la web, se consideró el tema en torno al cual sería construido el contenido. El enunciado de la PEC pedía «un pequeño portal biográfico». Para este fin, se eligió al personaje histórico [Tarrare](https://en.wikipedia.org/wiki/Tarrare).

Con el objetivo de conseguir cierta coherencia visual en cuanto a colores, se decidió utilizar la herramienta [Coolors](https://coolors.co/) para establecer una paleta de colores la cual se seguiría a lo largo del proyecto. Se decidió, igualmente, utilizar un estilo sobrio y minimalista, sin excesivo abarrotamiento de la página con el objetivo de evitar tiempos de carga excesivos; se tomaron algunas de las ideas mostradas en [brutalistwebsites.com](https://brutalistwebsites.com/) como inspiración.

El enunciado de la PEC solicitaba que el contenido fuera libre, por lo que se decidió en este punto la utilización de una licencia libre Creative Commons que solo incluyera restricciones a la reproducción de la página para el uso comercial y ante una modificación sustancial. Para este fin, se empleó la licencia [Creative Commons Attribution-NonCommercial-NoDerivs 2.0 Generic](https://creativecommons.org/licenses/by-nc-nd/2.0/) (CC BY-NC-ND 2.0).

Posteriormente, se creó un repositorio en git de forma local y [se subió](https://github.com/nacaru-w/PEC1-Herramientas) a GitHub. Esto permitiría tener un sistema de control de cambios y un _back-up_ almacenado en línea en caso de que se produjera algún problema con los archivos en el curso de la realización del proyecto. Este cambio fue reflejado en el archivo `json`:

```json
"repository": {
    "type": "git",
    "url": "https//github.com/nacaru-w/PEC1-Herramientas.git"
},
```

## Editor de código

Como gestor de código se decidió utilizar Visual Studio Code (VSCode). 

* __Justificación__: la razón por la que se eligió esta aplicación respecto a las otras es porque ya estaba familiarizado con su uso, porque posee una terminal integrada a través de la cual pueden ejecutarse comandos y porque ya había instalado algunas herramientas para optimizar código en el pasado que me ayudarían en el proceso: GitLens y multiples _build tasks_.

* __Resultados__: VSCode fue una herramienta muy útil para desarrollar el código. Todos los comandos de npm y pandoc, además de las diversas interacciones con git fueron ejecutados a través de la consola integrada. El programa incluye un servicio de diagnóstico local que te avisa de posibles problemas en el código, y a través de Gitlens se exploró el historial de ediciones en varias ocasiones para decidir o revertir múltiples cambios.

## Gestión de paquetes

A continuación se tomó la decisión de con qué gestor de paquetes trabajar el proyecto. Para este fin, aunque se consideró emplear yarn, se decidió finalmente utilizar el gestor de paquetes [npm](https://www.npmjs.com/). 

* __Justificación__: las principales razones por las que se eligió npm fueron: es más común entre los desarrolladores _frontend_, incluye herramientas útiles por defecto como NodeJS, y posee un [buscador](https://www.npmjs.com/package/) sencillo de utilizar a la hora de incorporar nuevas dependencias que puedan formar parte del proyecto. Además, npm ya se encontraba instalado en mi dispositivo y estaba familiarizado con algunos de sus comandos, por lo que solo hubo que realizar una comprobación para confirmar que se estaba usando una versión adecuada. 

Tras comprobar que se estaba utilizando la versión de `npm` adecuada, a través de la consola se ejecutó el comando `init` del mismo gestor de paquetes, creando un archivo `json` a partir del cual construir la página web.

![Archivo `json`. Algunas de las dependencias que aparecen en la imagen serían instaladas más tarde.](img/Screenshot from 2022-11-24 19-51-08.png)

* __Resultados__: npm es una herramienta sencilla de utilizar. Se encuentra ya instalado en muchos dispositivos y su catálogo de dependencias es útil a la hora de añadir nuevos elementos a la página. Instala por defecto diversos módulos de node necesarios e incluye una serie de dependencias por defecto que pueden ser de utilidad en proyectos similares.

## Utilización de un _module bundler_

A través de npm se decidió utilizar un module bundler a través del cual construir un _boilerplate_ sobre el cual trabajar en el proyecto. 

* __Justificación__: aunque ya había utilizado Webpack [en proyectos anteriores](https://github.com/nacaru-w/twinkle-lite), decidí utilizar Parcel para afianzar lo aprendido en el módulo M2 de la asignatura. Además, parcel imprime en la consola posibles problemas y otros detalles de diagnóstico (avisa de archivos incompatibles o demasiado pesados). 

Se instaló Parcel de forma local y se prodecedió a ejecutar el comando `npx parcel src/index.html` para construir un servidor local que permitiría ver los cambios realizados a nuestra paǵina web en tiempo real. A continuación, se creó una hoja de estilo CSS y un archivo `.js` como dependencia al archivo `index.html` principal.

Se instaló Rimraf y npm-run-all a través de npm para tener una herramienta que limpiase la caché creada por parcel en el procesamiento de los archivos y la construcción del servidor local. Se incluyeron ambas dependencias en el archivo `json` en las siguientes líneas de código para que se dé su instalación ante la ejecución del comando `npm run build`:

```json
  "devDependencies": {
    "parcel": "latest",
    "rimraf": "latest",
    "npm-run-all": "latest"
  },
```

Asimismo se crearon diversos scripts que facilitarían el trabajo en el proyecto y se añadieron al archivo `json` (véase imagen 1):

* `npm run clean` limpia la caché creada por Parcel a través de Rifraf (`rimraf dist .parcel-cache`)

* `npm run build` se asoció a `npm-run-all clean parcel:build` permite a parcel construir la aplicación para producción y optimizar los archivos del proyecto. También ejecuta `clean` que limpia la caché a través de Rifraf.

* `npm run start` se asoció a `npm-run-all clean parcel:dev`, esto permitiría igualmente limpiar la caché cada vez que se ejecutase el servidor local.

En general, los resultados de utilizar Parcel fueron los siguientes:

* __Resultados__: Parcel optimizó en una sola línea de código lo hallado en los archivos `.html`, `.css` y `.js`. Además, construyó un servidor local a través del cual se visualizaría el trabajo en tiempo real. En la consola, además, mostraba información útil como posibles incompatibilidades o el añadido de archivos con demasiado peso al proyecto.

![Captura de pantalla que muestra el diagnóstico de Parcel a través de la consola](img/Screenshot from 2022-11-24 14-17-57.png)

## Implementación de dependencia externa

Como requisito en la PAC, debía de realizarse la implementación de algún recurso externo en forma de dependencia. 

* Justificación: para este fin, se buscaron varias opciones a través del catálogo de npm. Se descartaron algunas de ellas por estar posiblemente obsoletas y se decidió utilizar [sidebarjs](https://www.npmjs.com/package/sidebarjs). Se empleó esta dependencia por ser ligera, porque permitía añadir un menú de navegación lateral adicinal, por estar adaptada a diferentes navegadores y a dispositivos móviles y tablets; y porque es gestionable a partir del archivo `app.js`, por lo que nos permitiría paralelamente realizar la implementación por javascript que también pedía el enunciado de la PEC.

Se instaló mediante la consola a través del código `npm install sidebarjs`. Se escribió el código HTML necesario (la dependencia requiere de la utilización de ciertos atributos), se realizó el _import_ del código en el archivo `app.js` a través de las líneas:

```js
import { SidebarElement, SidebarService } from 'sidebarjs';
import 'sidebarjs/lib/sidebarjs.css';
```

Y se creó una variable que generara la _sidebar_:

```js
const sidebarjs = new SidebarElement({
});
```

La dependencia generó un fichero `sidebarjs` en la carpeta `node_modules` con el código necesario para su implementación. Además, generó código en el archivo `json` que permitía su instalación en la compilación para producción:

```json
  "dependencies": {
    "sidebarjs": "^9.0.0"
  }
```

Tras comprobar que la dependencia funcionaba correctamente y que no generaba lentitud o problemas de compatibilidad, se decidió mantener su uso en la página web.

## Código HTML

## Código CSS

## Postprocesador CSS

Parte de los requisitos era la instalación de un post-procesador CSS/JS. Para esta finalidad se decidió utilizar PostCSS y Autoprefixer.

* __Justificación__: se utilizaron estos dos al estar incluidos en el compilador de Parcel. Se sopesaron otras opciones como [Sass](https://sass-lang.com/) o [LESS](https://lesscss.org/), pero al no conocer las curvas de aprendizaje de estos preprocesadores, se decidió utilizar los que ya estaban incluidos en la compilación de Parcel.

Se configuró el archivo `json` del `root` para que el código se adaptase a navegadores a través de la siguiente línea:

```json
"browserslist": "> 0.5%, last 2 versions, not dead",
```

* __Resultados__: como parte de la acción de estas aplicaciones, se optimizó el código CSS, de forma que algunas secciones de código quedaron modificadas para mayor facilidad de procesamiento. Uno de los ejemplos es el siguiente:

Este segmento del código:

```CSS
main p {
    font-size: 1.15em;
}

main ul {
    font-size: 1.15em;
}
```

Pasó a visualizarse de la siguiente forma:

```CSS
main p, main ul {
  font-size: 1.15em;
}
```

## Publicación de la página

La descripción del enunciado de la PEC pedía, igualmente, la publicación de la página en internet. Para este fin se utilizó el servicio gratuito de hosting Netlify.

* __Justificación__: aunque GitHub ofrece un servicio de hosting gratuito, este ya estaba siendo utilizado para mi página web personal. Se consideró Netlify como segunda opción tras observar que incluía un servicio de actualización rápida a partir de un repositorio de github.

