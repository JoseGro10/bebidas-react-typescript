# Buscador de Bebidas - React + TypeScript + Vite

Este proyecto es una aplicación web para buscar recetas de bebidas utilizando la [API de TheCocktailDB](https://www.thecocktaildb.com/). Permite buscar por nombre o ingrediente, filtrar por categoría, ver detalles de cada bebida y guardar recetas favoritas. Está construido con React, TypeScript, Zustand para el manejo de estado, Tailwind CSS para estilos y Zod para validaciones.

## Características principales

- **Búsqueda de recetas:** Filtra bebidas por nombre, ingrediente y categoría.
- **Vista de detalles:** Muestra ingredientes, cantidades e instrucciones de preparación.
- **Favoritos:** Permite agregar y eliminar recetas favoritas, que se guardan en el almacenamiento local.
- **Notificaciones:** Muestra mensajes de éxito o error al usuario.
- **Diseño responsivo:** Interfaz adaptada a dispositivos móviles y escritorio.

## Estructura de ramas en Git

- **main:** Rama principal, contiene la versión estable y lista para producción.
- **develop:** Rama de desarrollo, donde se integran nuevas funcionalidades antes de pasar a main.
- **feature/\***: Ramas para nuevas características o mejoras (por ejemplo, `feature/agregar-busqueda-avanzada`).
- **fix/\***: Ramas para corrección de errores (por ejemplo, `fix/arreglar-modal`).

> **Nota:** Las ramas `feature/*` y `fix/*` se deben fusionar primero en `develop` y luego, tras pruebas, en `main`.

## Instalación y uso

1. Clona el repositorio:
   ```sh
   git clone <url-del-repositorio>
   cd bebidas-react-typescript
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Zustand
- Tailwind CSS
- Zod
- Axios

---

¡Contribuciones y sugerencias son bienvenidas!