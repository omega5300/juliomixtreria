---
title: versiones de npm
authors: omega5300
date: 2022-04-27
---

## versiones de stack-analyze

a lo largo de la linea principal de desarrollo, la de npm se conforma por dos estilos de cambio:
  - cambio mayor: la inclusion de herremientas y optimizaciones.
  - cambio menor: se optimizar, arregla y/o corregir algunos cambios que no me convecieron.
  - parches: son cambios prioritarios de una version tanto cambio mayor o menor para solucionar errores criticos
  
## veriones npm
en esta se muestra todas las versiones y cambios notables, corregidos, eliminados y nuevas adiciones en el código.

- versiones 1.0.1 to 1.0.3:
test version module without wappalyzer module (only testing)
- version 1.0.4:
  1. primera version oficial con los siguientes modulos de npm:
    - wappalyzer
    - inquirer
    - commander
- version 1.0.5:
  1. cambios.
    - modificacion en la estructura de codigo.
  2. eliminaciones:
    - la eliminacion de modulo commander.
- version 1.0.6:
  1. agregados:
    - se agrego las nuevas opciones:
      1. multiple analyze (analizar varios sitios)
      2. salir de CLI
    - codigo testeado con eslint para evitar errores al ejecutar
    - resescritura en los modulos de codigo
  2. cambios:
    - las opciones ahora es por lista con inquir
  er
    - mensaje de bienvenida modificado
- version 1.0.7:
  1. agregados:
    - se agregado nuevos modulos:
      1. figlet como modulo principal
      2. jest como modulo de desarrollo y testeo
    - se añadio nuevas opciones en las opciones principales como:
      1. pagespeed
      2. about "acerca de"
    - se agrego el retorno hacia el menu principal o salir
  2. correciones:
    - si los sitios en blanco o sin http:// o https:// se te regresar al menu principal
  3. cambios:
    - se opto por lista cruda para las opciones
    - se implemento jsdocs en todo excepto en los archivos para testeo
    - se utilizar otros funciones de console para no utilizar el ```console.log``` solo cuando salimos del CLI
- version 1.0.8:
  1. agregados:
    - se agregado nuevos modulos
      1. colors
      2. cli-progress 
  2. correciones:
    - se cambio la impresion console.table en lugar de mostrar un json
  3. cambios:
    - se cambio el console.dir por console.table
    - se cambio de texto a barras en los resultados de pagespeed
    - se agrego un insigna en tech-stack
  - notas de parche de la version 1.0.85
   1. correción de la ejecución de CLI
   2. se elimino el performance.now para colocar un tiempo definido en pagespeed
   3. se agrego la sección de recomendados
- version 1.0.9:
  1. agregados:
    - se agrego nuevo modulo timeago.js.
    - nuevas herramientas github info y buscador de anime.
    - nuevos recomendados en la seccion acerca de.
  2. correciones:
   - regresa el performance.now para pagespeed.
  3. cambios:
   - se agrega nuevas funciones para testing.
- version 1.1.0:
  1. agregados:
    - se agrego nuevos modulos:
      1. systeminformation
      2. jsdoc mas plantilla minami como modulos de desarrollo
    - nueva herramienta hardware information/infomacion de hardware
    - nuevos recomendados en la seccion acerca de.
  2. correciones:
   - se rescribe las funciones singlestack y multiple.
   - se añade el nombre de la app para la funcion de pregunta
  3. cambios:
   - se remplaza los estilos de color para node para usar el modulo colors.
- version 1.1.1:
  1. agregados:
    - nuevo modulo agregado cosnole-table-printer
    -se agrego las nuevas secciones de recomendados nonolive y youtube dev
  2. correciones:
    - se reescribio algunas funciones
    - se framento la seccion de acerca de.
  3. cambios:
    - se usa console.table unicamente en variables en algunas opciones y algunos de la opcion acerca de-
- version 1.1.2:
  1. agregados:
   - nuevos recomendos en la seccion nonolive.
  2. correciones:
    - reescritura de multiple techstack
    - reescritura en los archivos de prueba
  3. cambios:
    - se cambio de cliclo for...or a forEach
- version 1.1.3:
  1. agregados:
    - nuevo modulo coingecko-api.
    - nueva herramienta crypto market.
    - nuevos recomendados.
    - nuevos testeos.
  2. correciones:
    - reescritura en algunas funciones.
    - actualizacion de modulos via manual.
  3. cambios:
    - se agregado nuevas variables const para el uso de array.map
- version 1.1.4:
  1. agregados:
    - nueva herramienta bitly info.
    - nuevo testeo.
  2. correciones:
   - reescritura de algunas funciones
   - actualizacion de modulos via manual
  3. cambios:
   - sin cambios
- version 1.1.5:
  1. agregados:
    - nueva herramienta movie info.
    - nuevo testeo.
    - menu renovado
  2. correciones:
    - reescritura en algunas funciones.
    - se elimino algunas dependencia que no usadas en el proyecto
  3. cambios:
    - se cambio de multibarra a una barra por resultado
    - se cambio la condicion switch por el uso de funciones hash.
    - renovamos los recomendados de nonolive
- version 1.1.6:
  1. agregados:
    - modulo stack-analyze mode.
  2. correciones:
    - resescritura de codigo.
  3. cambios:
    - renovamos jsdocs en algunas funciones y variables
    - eliminacion de los recomendados de nonolive
- version 1.1.7:
  1. agregados:
   - nueva herramienta twitch info.
   - cambio de CJS a ESM.
  2. correciones:
    - cambios el token para variable process.env no disponible en github y gitlab.
    - migracion de CJS a ESM.
    reescritura del modulo excepto los de testing
  3. cambios:
    - excepto algunas de hardware information y github info se utliza models para console-table-printer
    - ahora se usa ESM en about.js como un unico archivo
    - reescritura de todas las funciones de testeo.
