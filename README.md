# Operation Web

## Descripción
Operation Web es una aplicación Fron End desarrollada con Angular que interactúa con el servicio [Max Integer Solver](https://github.com/jhonatanjimenezh/max-integer-solver). Esta interfaz de usuario permite resolver a los usuarios el problema de encontrar el máximo entero no negativo `k` tal que `0 ≤ k ≤ n` y `k mod x = y`. Este proyecto implementa una solución algorítmica para el problema descrito en [Codeforces - Problem 1374A](https://codeforces.com/problemset/problem/1374/A)

## Características
- **Angular 12+**: Utilizado para la creación de una SPA (Single Page Application) robusta y moderna.
- **TypeScript**: Lenguaje de programación principal, favoreciendo un desarrollo más seguro y mantenible.
- **Material Design**: Librería de componentes de Angular Material para una interfaz de usuario elegante y coherente.
- **RxJS**: Para la gestión de estados y la programación reactiva.
- **Compodoc**: Para la generación de documentación del código fuente.

## Principios y Metodologías de Desarrollo
- **Componentes Reutilizables**: Diseño modular para promover la reutilización y la coherencia en la UI.
- **Programación Reactiva**: Uso extensivo de Observables para gestionar eventos y datos asincrónicos.
- **Pruebas Unitarias con Karma y Jasmine**: Asegurando que cada unidad de código funcione correctamente.
- **Desarrollo Ágil**: Adaptación y respuesta rápida a los cambios durante el ciclo de desarrollo.

## Requisitos
- Node.js (versión recomendada 14 o superior)
- Angular CLI (última versión)
- Git (para la clonación y gestión del repositorio)

## Configuración y Ejecución
### Configuración Local
1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta el servidor de desarrollo con `ng serve`. Navega a `http://localhost:4200/`.

### Construcción para Producción
Para construir el proyecto y optimizarlo para producción, ejecuta `ng build --prod`. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Uso de la Aplicación
La aplicación permite a los usuarios introducir los valores de `x`, `y` y `n` y, mediante la interacción con la API del backend, calcula y muestra el valor de `k`.

## Pruebas
1. Para ejecutar las pruebas unitarias, utiliza el comando:
    ```shell
    ng test

## Manejo de Errores
El proyecto maneja errores de manera efectiva, mostrando modales de error amigables para informar al usuario sobre cualquier problema durante la operación de la aplicación.

## Documentación
La documentación del código está generada con Compodoc y disponible en línea para su consulta:
- [Documentación del Proyecto](https://jhonatanjimenezh.github.io/operation-web/)

Este proyecto es parte del ecosistema de servicios que incluye [Max Integer Solver](https://github.com/jhonatanjimenezh/max-integer-solver), el cual proporciona la lógica de negocio para esta interfaz web.

