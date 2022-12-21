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

Se realizó un proyecto con el objetivo de diseñar un logotipo minimalista que representase de la web y el personaje que esta describe. Se decidió utilizar como base una forma circular, a menudo asociada con la glotonería, sobre la cual se añadió un ojo semiabierto, relacionado con elementos mitológicos o fantásticos como trolls o cíclopes, así como una imagen elíptica, colocada en la parte inferior y representando una gota de saliva, haciendo referencia al hambre. En prototipos iniciales se estudió la posibilidad de añadir dientes u otros rasgos de la cara o cuerpo de Tarrare, pero se descartaron para este diseño por no corresponder adecuadamente con la estética minimalista de la página.

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