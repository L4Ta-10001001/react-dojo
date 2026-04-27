# React Dojo

Proyecto academico desarrollado con React + Vite para la materia de Programacion Web.

Incluye tres modulos principales:

- Calculadora simple (`/simple`)
- Calculadora completa (`/completa`)
- Catalogo de personajes de Rick & Morty (`/catalogo` y `/catalogo/:id`)

---

## Tecnologias

- React 19
- Vite
- React Router DOM
- MUI (Material UI)
- Fetch API

---

## Rutas de la aplicacion

- `/` -> Home con accesos a cada modulo
- `/simple` -> Calculadora simple (suma de dos numeros)
- `/completa` -> Calculadora completa con teclado numerico y operadores
- `/catalogo` -> Lista de personajes con busqueda y resumen por estado
- `/catalogo/:id` -> Vista detalle del personaje seleccionado

---

## Funcionalidades

### 1) Home

- Titulo principal "React Dojo"
- Navegacion a cada modulo mediante botones

### 2) Calculadora simple

- Dos campos numericos (Numero 1 y Numero 2)
- Boton **Sumar**
- Boton **Limpiar** para reiniciar entradas y resultado
- Enlace de regreso al inicio

### 3) Calculadora completa

- Display con valor actual (inicia en `0`)
- Botones numericos y operadores
- Boton `C` para limpiar todo
- Boton `DEL` para borrar el ultimo caracter
- Boton `=` para evaluar la expresion
- Enlace de regreso al inicio

### 4) Catalogo Rick & Morty

- Consumo de API publica: `https://rickandmortyapi.com/api/character`
- Grid responsive de tarjetas
- Busqueda en tiempo real por nombre
- Badge de estado (`Alive`, `Dead`, `unknown`)
- Resumen por estado usando `reduce`
- Vista detalle por personaje con imagen y datos adicionales

---

## Estructura de carpetas

```txt
react-dojo/
|- public/
|- src/
|  |- components/
|  |  |- Home.jsx
|  |  |- CalculadoraSimple.jsx
|  |  |- CalculadoraCompleta.jsx
|  |  |- SearchBar.jsx
|  |  |- CharacterCard.jsx
|  |  |- CharacterDetail.jsx
|  |- pages/
|  |  |- CatalogPage.jsx
|  |  |- CharacterDetailPage.jsx
|  |- App.jsx
|  |- App.css
|  |- index.css
|  |- main.jsx
|  |- theme.js
|- package.json
|- vite.config.js
```

---

## Instalacion y ejecucion local

1. Clonar el repositorio:

```bash
git clone git@github.com:L4Ta-10001001/react-dojo.git
cd react-dojo
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en desarrollo:

```bash
npm run dev
```

4. Build de produccion:

```bash
npm run build
```

5. Previsualizar build:

```bash
npm run preview
```

---

## Flujo de ramas (Git Flow usado en el proyecto)

- `main`: rama principal (produccion / entrega final)
- `dev`: integracion de funcionalidades
- `qa`: rama de revision para el profesor
- `feat/*`: ramas de trabajo por modulo o sesion

Flujo aplicado:

1. Desarrollo en `feat/*`
2. Merge a `dev`
3. Merge de `dev` a `qa`
4. Revision y merge final de `qa` a `main`

---

## Nota para revision academica

Para evaluar la entrega, se recomienda revisar la rama `qa` y luego aprobar merge hacia `main`.

---

## Autor

- GitHub: [L4Ta-10001001](https://github.com/L4Ta-10001001)
