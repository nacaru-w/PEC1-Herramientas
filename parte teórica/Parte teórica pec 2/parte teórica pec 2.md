---
title: "PEC 2: web y recursos multimedia"
subtitle: "Herramientas HTML y CSS: Universitat Oberta de Catalunya"
date: "Diciembre de 2022"
author: "Ignacio Casares Ruiz"
documentclass: scrreprt
colorlinks: true
header-includes:
 - \usepackage{fvextra}
 - \DefineVerbatimEnvironment{Highlighting}{Verbatim}{breaklines,commandchars=\\\{\}}
 - \renewcommand{\figurename}{Imagen}
---

En este documento se describirán los pasos que se llevaron a cabo en la elaboración de esta PEC. Se han descrito estos de forma concisa y objetiva, intentando respetar el orden cronológico en el que sucedieron las distintas tomas de decisión y posteriores ejecuciones de las mismas, aunque dando siempre prioridad al orden temático. 

Al igual que en la PEC 1 de esta asignatura, la página final es accessible de forma pública a través del siguiente enlace:

[https://lively-fenglisu-dd4606.netlify.app/](https://lively-fenglisu-dd4606.netlify.app/)

El repositorio de GitHub es el siguiente. Al haberse trabajado sobre la PEC1, implementando lo exigido en el enunciado de la práctica, comparte el mismo nombre que recibía en la práctica anterior, «PEC1-Herramientas»:

[https://github.com/nacaru-w/PEC1-Herramientas](https://github.com/nacaru-w/PEC1-Herramientas)

El proyecto se realizó en un ordenador con un SO Linux Ubuntu 22.04.1 LTS. Para la redacción de la parte teórica se creó un documento en formato [markdown](https://www.markdownguide.org/) que sería posteriormente transformado en un documento PDF a través de LaTeX con la herramienta de conversión libre [Pandoc](https://pandoc.org/).

## Logotipo de la web

Uno de los requisitos descritos en el enunciado de la práctica era la elaboración de un logotipo para la web. Con el objetivo de cumplirlo, se procedió a elaborar una imagen a través del programa de la aplicación de edición de gráficos vectoriales de uso abierto [Figma](https://www.figma.com).

![Proceso de creación de la imagen en la aplicación Figma](img/proceso.png){ width=250px }

Se realizó un proyecto con el objetivo de diseñar un logotipo minimalista que representase de la web y el personaje que esta describe. Se decidió utilizar como base una forma circular, a menudo asociada con la glotonería, sobre la cual se añadió un ojo semiabierto representado a través de un semicírculo, relacionado con elementos mitológicos o fantásticos como trolls o cíclopes, así como una imagen elíptica, colocada en la parte inferior y representando una gota de saliva, haciendo referencia al hambre. En prototipos iniciales se estudió la posibilidad de añadir dientes u otros rasgos de la cara o cuerpo de Tarrare, pero se descartaron para este diseño por no corresponder adecuadamente con la estética minimalista de la página.

Para la exportación de esta imagen, se decidió utilizar un formato SVG, al estar compuesta de formas geométricas simples, ser este un formato ligero, y permitir la modificación del tamaño sin pérdida alguna de calidad.

Una vez exportada, se añadió a la sección `header` de todos los archivos `html` de la web la página web a través del siguiente código:

```html
<figure>
    <img src="img/logo.svg">
</figure>
```

Se completó a través de la implementación del código CSS siguiente. Este comprende la presencia de una transformación a través de la propiedad `transform`, que realiza un aumento del tamaño del logo al pasar el ratón por encima (`hover`), simbolizando la glotonería de Tarrare:

```css
header figure {
    width: clamp(4em, 8%, 10em);
    margin: 0 auto;
    transition: width 1s ease-in-out;
}

header img {
    margin: 0 auto;
    display: block;
    width: 100%;
}

header figure:hover {
    width: clamp(4.5em, 9%, 11em);
}
```

Se hizo uso de la función CSS `clamp()` para ajustar el tamaño de forma dinámica y dotarle de responsividad, evitando que el logo posea un tamaño demasiado reducido en dispositivos de pantalla pequeño, y limitando el tamaño en dispositivos significativamente anchos.

## Uso de `clip-path` en la página principal

Como parte de los objetivos de la práctica, se solicitaba el uso de la propiedad CSS `clip-path` en alguno de los elementos de la página principal. Mediante el uso de la aplicación [clippy](https://bennettfeely.com/clippy/), se probaron diversas formas que podrían ajustarse a la estética y coherencia del proyecto. Después de reflexionar, se decidió utilizar `clip-path` con el valor `inset` para redondear los bordes de la imagen principal que aparece en el centro de esta página, a través de la adición del siguiente código CSS:

```css
main figure img.main {
    clip-path: inset(0 0 0 0 round 5% 5% 5% 5%);
}
```

Adicionalmente, se ha añadido una pequeña versión del logo principal que aparece al hacer desplegarse el menú lateral (_sidebar_). Esta versión se ha conseguido a través de la utilización, de nuevo, de la propiedad `clip-path`, contenida en la siguiente regla y con el valor descrito a continuación:

```css
.sidebar figure.index_logo {
    width: 30%;
    margin: 1em auto 0 auto;
    clip-path: circle(26.5% at 50% 28%);
}
```

A través del valor `circle(26.5% at 50% 28%)`, se consigue que la imagen se centre en la parte del ojo del logo, simbolizando «búsqueda», hecho por el que se ha colocado en la parte superior del este índice.

[Social Media Icons 2021 por SHOCKStudio.pl](https://www.figma.com/community/file/929729132405358534). Licencia CC-BY 4.0.

## Adición de elementos gráficos en el _footer_

Dentro de los nuevos requisitos de la PAC se encontraba el de habilitar un footer que poseyese enlaces a todas las páginas. Esto se ha hecho mediante la adición de dos secciones `section`, una en la que se contienen dos `ul` con todos los enlaces de la web divididos en dos columnas, y otra en la que se han contenido enlaces a redes sociales.

Se ha hecho uso de la propiedad CSS `display` para que estos aparezcan repartidos en dos columnas, y de la propiedad `display-content` para que queden centrados. Gracias a la primera, las listas actuarán de forma _responsive_, de tal forma que al reducir considerablemente la anchura del dispositivo, estas se mostrarán una encima de la otra.

Además, la práctica solicitaba, igualmente, que el _footer_ debía de contener un elemento gráfico. Para cumplir este requisito se habilitó una lista en la que se incluyen enlaces (muertos, en este caso) a redes sociales. Esta está compuesta de un elemento `ul` que contiene elementos `img`. Para estos iconos, se han utilizado imágenes de gráficos vectoriales (`svg`), por ser este formato muy ligero y constituir formas geométricas simples en el patrón de los iconos.

```css
footer section div.media_container {
    border-top: solid #493A31 2px;
}

footer section ul.media {
    display: flex;
    padding-bottom: 3em;
}

footer section ul.media li {
    margin: 0 1em;
    transition: opacity 0.25s ease-in-out;
}

footer section ul.media li:hover {
    opacity: 0.5;
}
```

Además, como puede comprobarse en las dos últimas reglas CSS del código anterior, se ha añadido un mecanismo de transición al pasar el ratón por encima, de forma que los iconos pierden parcialmente la opacidad con el objetivo de destacar su función de enlace.

![Muestra de la barra de iconos a redes sociales](img/Screenshot 2022-12-22 at 03-21-55 Tarrare main.png)