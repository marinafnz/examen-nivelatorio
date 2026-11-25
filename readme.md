# Lotería JS

# **Prueba de Nivel - JavaScript**

## **Objetivo de la Prueba**

Este ejercicio tiene como objetivo evaluar tus conocimientos en JavaScript moderno (ES6+), incluyendo manipulación del DOM, estructuras de control, funciones, manipulación de arrays, objetos, generación de números aleatorios y testing.

Los ejercicios están diseñados para medir la comprensión y aplicación de estos conceptos sin depender de la memorización.

### **Instrucciones**

- Lee atentamente cada pregunta/escenario antes de responder.
- Usa JavaScript siguiendo las buenas prácticas de JavaScript moderno (ES6+).
- Organiza el código de forma clara y legible.
- Avanza paso a paso. Primero consigue que funcione la lógica principal y después implementa el resto de funcionalidades.
- Puedes consultar documentación oficial y buscadores.
- No está permitido utilizar herramientas de Inteligencia Artificial para generar código ni copiar soluciones completas de terceros.
- Se valorará especialmente la capacidad de razonamiento, organización y resolución de problemas.

---

### Recomendación de trabajo

Se recomienda abordar el ejercicio en dos fases:

- **Paso 1**: Implementa una solución funcional que cumpla los requisitos y criterios de aceptación.
- **Paso 2**: Una vez la aplicación funcione correctamente, mejora la organización del código separando la lógica de negocio de la manipulación del DOM, siguiendo la arquitectura recomendada abajo.

### **Descripción**

#### **Lotería**

Implementarás una aplicación web que permita al usuario participar en un pequeño juego de lotería.

En cada jugada, el usuario deberá introducir un número del 1 al 10. El sistema generará aleatoriamente otro número dentro del mismo rango y ambos números se compararán para determinar si el usuario ha ganado o perdido.

- El usuario **DEBE** poder introducir un número mediante un formulario.
- El usuario **PUEDE** realizar una jugada pulsando un botón.
- El usuario **DEBE** saber si ha ganado o perdido.
- El usuario **PUEDE** acceder a una sección de historial donde aparezcan todas las jugadas realizadas.

---

### **Funcionalidades**

- Crear una página HTML con:
    - Un campo de entrada para introducir un número.
    - Un botón para realizar la jugada.
    - Una sección donde mostrar mensajes al usuario.
    - Una sección donde mostrar el historial de jugadas.
- Validar que el usuario introduzca un número entre 1 y 10.
- Generar un número aleatorio entre 1 y 10 para cada jugada.
- Comparar el número introducido por el usuario con el número generado.
- Mostrar un mensaje indicando si el usuario ha ganado o perdido.
- Mostrar el número generado por el sistema después de cada jugada.
- Añadir cada jugada al historial.
- El historial deberá mostrar el número introducido por el usuario, el número generado y el resultado de la jugada.

---

### **Criterios de Aceptación**

#### Funcional

Una jugada será considerada **ganadora** cuando el número introducido por el usuario coincida con el número generado aleatoriamente por el sistema.

Además:

- Si el usuario introduce un número válido del 1 al 10 y coincide con el número generado, se mostrará **"Ganaste"**.
- Si el usuario introduce un número válido del 1 al 10 y no coincide con el número generado, se mostrará **"Perdiste"**.
- El número generado por el sistema deberá mostrarse después de realizar la jugada.
- Si el usuario introduce un valor no numérico, se mostrará un mensaje de error.
- Si el usuario introduce un número fuera del rango permitido, se mostrará un mensaje indicando que el número debe estar entre 1 y 10.
- Cada jugada válida se añadirá al historial.
- El historial mostrará todas las jugadas realizadas, una debajo de otra.

---

### Técnico

- La lógica de la lotería deberá implementarse en funciones independientes del DOM.
- Las funciones encargadas de generar números, validar datos o procesar una jugada no deberán acceder directamente al DOM.
- Cada jugada deberá almacenarse como un objeto.
- Mantener un historial con todas las jugadas realizadas.
- Utilizar funciones con una única responsabilidad siempre que sea posible.
- Utilizar `Math.random()` para generar el número aleatorio.
- Organizar el código de forma clara y mantenible.

Ejemplo de estructura esperada:

```
const history = [
  {
    userNumber: 4,
    randomNumber: 7,
    result: "Perdiste"
  }
];
```

Una posible función de la lógica podría recibir el número introducido por el usuario y devolver la información necesaria para representar el resultado de la jugada.

No es necesario seguir exactamente esta estructura, pero la información de cada jugada debe quedar correctamente organizada y ser reutilizable para mostrar el historial.

---

### Como empezar el proyecto

- Crea la carpeta donde quieras desarrollar el ejercicio
- Abre la carpeta en Visual Studio Code
- En la terminal ejecuta el siguiente comando:

```jsx
npm install -D vitest
```

- En el archivo package.json, si un no existe, crea el script que te permite ejecutar los tests:

```json
"scripts": {
    "test": "vitest"
  }
```

- Añade el archivo .gitignore con:

```jsx
node_modules/
```

- Crea un repositorio en **GitHub** y vincula tu proyecto.

---

### **Casos de prueba (formato Gherkin)**

#### Feature: Juego de Lotería

#### Scenario: Usuario introduce un número válido y gana

```
Given el usuario introduce el número 7
When el sistema genera el número aleatorio 7
Then se muestra "Ganaste"
```

#### Scenario: Usuario introduce un número válido y pierde

```
Given el usuario introduce el número 4
When el sistema genera el número aleatorio 8
Then se muestra "Perdiste"
```

#### Scenario: Entrada no numérica

```
Given el usuario introduce "Hola"
When el usuario pulsa "Jugar"
Then se muestra un mensaje de error
```

#### Scenario: Número fuera de rango

```
Given el usuario introduce el número 20
When el usuario pulsa "Jugar"
Then se muestra un mensaje indicando que el número debe estar entre 1 y 10
```

#### Scenario: Historial de jugadas

```
Given el usuario realiza las jugadas con los números 3 y 8
When ambas jugadas terminan
Then el historial muestra ambas jugadas con el número introducido, el número generado y el resultado correspondient
```

---

### Tests

- Implementar al menos un test unitario utilizando Vitest.
- El test debe validar uno de los escenarios definidos en los casos de prueba.
- El test debe ejecutarse correctamente mediante `npm test`.
- Se recomienda probar la lógica de negocio de la lotería de forma aislada, sin interactuar con el DOM.
- Se recomienda evitar depender directamente de `Math.random()` en los tests, buscando una forma de controlar o simular el número generado para poder comprobar diferentes escenarios.

### Antes de empezar

- Desinstala o mutea Copilot (es importante para construir tu propio pensamiento)

### Entrega

- Mediante Moodle, entrega el enlace al repositorio de GitHub con la solución.

¡Buena suerte! 🚀