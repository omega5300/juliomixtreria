---
title: versiones de pwa
authors: omega5300
date: 2022-04-27
---

# versiones de stack-analyze pwa
es la mas sencilla y fragmenta para los usuario de movil y web browser se divide en tres los logos separado en un dominio, las api para techstack y whois usa un backend y la app grafica como tal.

## versiones pwa

- version 1.0.0:
  - primera verion basada en version npm 1.0.7.
  - tiene su herramienta exclusiva whois analyze.
- version 1.1.0:
  1. agregados:
    - nuevas herramientas:
      1. github info.
      2. buscador de anime.
    - se agrego todas los recomendados de las versiones npm 1.0.8 - 1.0.9
  2. cambios:
    - se cambio el @submit.prevent a @keyup.enter.
    - en techstack se cambio de lista a grid cards.
  3. correciones:
    - eliminacion de modo oscuros
- version 1.2.0:
  1. agregados:
    - nueva herramienta hardware information nota este hardware information usa capacitor en lugar de systeminformation.
    - se agrego todas los recomendados de las versiones npm 1.1.1 - 1.1.1
  2. cambios:
    - se eliminar el @keyup.prevent a @submit.prevent usando key code enter con metodos de DOM.
    - se modifico la barra de tabs y todas las paginas excepto about
    - eliminacion de los modulos vuex y @capacitor/android
  3. correciones:
    - actualizacion de todos para la compatibilidad con capacitor 3
    - se agrego validaciones en github info y el buscador de anime
- version 1.3.0:
  1. agregados:
    - nueva herramienta crypto market.
    - se agrego algunas nuevas recomendaciones en la version 1.1.3.
    - se agrego el nuevo plugin de red para capacitor
  2. cambios:
    - se añade nuevo info internet status.
    - se cambio de los colores luz a colores de modo oscuro.
  3. correciones:
    - se cambio columnas en la herramienta del buscador de anime.
    - se reordena los detalles de la version en mods desceciente.
- version 1.4.0:
  1. agregados:
    - nuevas herramientas:
      1. bitly info.
      2. movies info.
    - se añadio el logo de las tecnologias en otro dominio.
    - nuevo modulo swipper.js.
  2. cambios:
    - se reescribio algunas paginas en componentes modulares.
    - se migro de tabs a el menu deliszable.
  3. correciones:
    - migración de ion-slides to swipper.js slides.
- version 1.5.0:
  1. agregados:
    - nueva herramienta twitch info.
  2. cambios:
    - se movio la recomendaciones en una pagina idependiente.
      1. la eliminacion de los recomendados de nonolive.
      2. creacion de la pagina de recomendados.
      3. se movio las recomendaciones de menu a la pagina.
    - se migro a script setup en vue.
    - se cambio y elimino colores:
      1. la eliminacion de los colores de modo normal.
      2. actualmente usa los de modo oscuro
      3. eliminacion de la clase de css dark
      4. eliminacion el color de ionic nonolive.
    - se elimino la imagen de fondo de header a un degradado.
  3. correciones:
    - se cambio la palabra de error en la herramienta de crypto market.