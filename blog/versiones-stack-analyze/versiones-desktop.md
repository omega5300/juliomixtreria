---
title: versiones de stack-analyze npm
authors: omega5300
date: 2022-04-27
---

# versiones de stack-analyze desktop

esta rama de versiones esta basada en la version npm 1.0.5 y esta enfoca en escritorio conservando la curva de npm pero un poquito mas leve.

## veriones escritorio

- version 1.0.0:
  1. primera versión oficial con los siguientes modulos de npm:
    - modulos principales:
      1. materialize-css.
      2. material-design-icons.
      3. wappalyzer.
    - modulos de desarrollo
      1. electron.
      2. electron-builder.
      3. eslint.
- version 2.0.0:
  1. agregados:
    - nuevos modulos:
      1. axios
      2. html-validator.
      3. chart.js
    - herramienta exclusiva: validador de html
  2. correciones:
    - validacion de estado de la pagina
  3. cambios:
    - reescritura y la organización en la estructura de las herramientas
- version 3.0.0:
  1. agregados:
    - nuevas herramientas:
      1.
      2.
    - se agrego la seccion de recomendados de las versiones npm 1.0.8 (1.0.85) hasta el 1.0.9.
  2. correciones:
   - se rediseño el validor de html con concepto hibrido (css plano con materialze).
  3. cambios:
    - pagespeed ahora es una herramienta separada.
    - se cambio a el grafico dona por grafico de barras.
- version 4.0.0:
  1. agregados:
   - nuevo modulo systeminformation.
   - nueva herramienta hardware information/ informacion de hardware.
   - nuevos recomendados de las versiones npm 1.1.0 y 1.1.1.
  2. correciones:
    - se rediseño todas las herramientas excepto pagespeed y hardware information por se nuevo.
    - se elimino la opcion de la tecla enter excepto en hardware information.
  3. cambios:
    - todas las herramientas en una sola ventana.
    - se agrego un menu desplegable.
    - todos usar el delete analyze excepto hardware information.
- version 5.0.0:
  1. agregados:
    - nuevos modulos:
      1. coingecko-api
      2. normalize.css
    - nueva herramienta crypto market.
    - nuevo lenguaje de diseño glassmorphism y fondo nuevo
    - se agrego webcomponents solo en la barra de navegación y cabecera.
  2. correciones:
    - reescritura de todas las herramientas
    - algunos elmentos usa el.append.
    - se reduce el navbar y header para favorecer el uso de webcomponents.
  3. cambios:
    - se eliminar el uso de materialize.css para favorecer el uso de css y js plano y favorecer el uso de normalize para dar reset a los estilos por defecto.
    - rediseño de todas las herramientas excepto crypto market.
    - se agregar y renueva recomendados.
    - cambio de nombres en algunas recomendaciones.
    - se modifico el menu solo cambios menores
- version 6.0.0.
  1. agregados:
   - nuevas herramientas:
     1. bitly info.
     2. movie info.
     *similar a la versión npm*
   - se agrego los creditos por ideas.
  2. correciones:
    - se cambio el script blocking por script defer.
  3. cambios:
    - cambios en algunos recomendados de nonolive.
    - rediseño del webcomponent.
- version 7.0.0:
  1. agregados:
    - nueva herramienta twitch info.
    - se remplaza los recomendados de nonolive por instagram.
  2. correciones:
    - optamos por script async.
  3. cambios:
   - se elimino la barra de encabezado
   - renovamos el navbar/sidebar

### versiones legado

estamos versiones son para recordar se implementa las nuevas herramientas de la edicion normal estas versiones son:

- legacy 5.0.0: primera version basada material design usando todas las herramientas de desktop 7.0.0 normal.
- legacy 6.0.0: penultima version basada en material design usando todas las herramientas de desktop 6.0.0 normal.
- legacy 7.0.0: ultima versión basada en material design usando todas las herramientas de desktop 7.0.0 normal apartir de desktop 8.0.0 no habra mas versiones legado/legacy.