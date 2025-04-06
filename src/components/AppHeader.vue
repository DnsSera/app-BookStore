<script setup>
import { genreFilter ,getUniqueGenres, maxPages, selectedPages, getAvailableBooks} from "../store/manageBook";
import { toggleSidebar } from "../store/manageReadList";
</script>

<template>
  <header class="header-container">
    <div class="grid-container">
      <!-- Valor entero fijo -->
      <div class="total-books-container">
        <h1 class="total-books">Libros disponibles: {{ getAvailableBooks }}</h1>
      </div>

      <!-- Filtro por género -->
      <div class="genre-filter">
        <label for="genre-select" class="form-label">Filtro por género:</label>
        <select class="form-select" v-model="genreFilter">
          <option v-for="genre in getUniqueGenres" :key="genre.genre"> {{ genre }}</option>
        </select>
      </div>

      <!-- Filtro por cantidad de páginas -->
      <div class="pages-filter">
        <label for="page-slider" class="form-label">Filtro por páginas:</label>
        <input
          type="range"
          id="page-slider"
          class="form-range"
          min="1"
          step="1"
          :max="maxPages"
          v-model="selectedPages"
        />
        <span class="pages-count">{{ selectedPages }} páginas</span>
      </div>

    </div>

    <!-- Botón para mostrar/ocultar sidebar en pantallas pequeñas -->
    <button class="toggle-readList-btn" @click="toggleSidebar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"></path>
      </svg>
      </button>

  </header>
</template>

<style scoped>
/* Contenedor principal del header */
.header-container {
  position: fixed; /* Fijo en la parte superior */
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(58, 56, 56); /* Fondo gris claro */
  color: white;
  border-bottom: 2px solid #dee2e6; /* Línea inferior */
  z-index: 1000; /* Asegurar que esté encima de otros elementos */
  padding: 15px 20px; /* Espaciado interno */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  color: #ffffff; /* Texto blanco en todas las pantallas */
}

/* Configuración de grid */
.grid-container {
  display: grid; /* Activar el modelo de diseño Grid */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Crear columnas dinámicas */
  gap: 20px; /* Espaciado entre filas y columnas */
  align-items: center; /* Centrar verticalmente los elementos */
  width: 100%;
}

/* Contenedor del total de libros */
.total-books-container {
  text-align: center; /* Centrar contenido */
}

.total-books {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

/* Filtros */
.genre-filter,
.pages-filter {
  margin: 5px 10px; /* Margen para separación */
}

.form-label {
  font-weight: bold;
}

.pages-count {
  font-size: 0.9rem;
  font-weight: bold;
}

.toggle-readList-btn {
  display: none;
}

.reading-list-readList {
  transition: transform 0.3s ease;
  /* Ocultar el sidebar por defecto */
  transform: translateX(100%);
}

.reading-list-readList.active {
    /* Mostrar el sidebar cuando esté activo */
  transform: translateX(0);
}

/* Responsividad */
@media (max-width: 990px) {
  .grid-container {
    grid-template-columns: 1fr; /* Cambiar a una columna en pantallas medianas y pequeñas */
    text-align: center; /* Centrar contenido */
  }

  .total-books-container,
  .genre-filter,
  .pages-filter {
    justify-self: center; /* Centrar contenido */
  }

  /* Ajustar espaciado superior del contenido */
  .page-content {
    margin-top: 120px; /* Asegurar que el contenido no quede cubierto por el header */
  }

  .header-container {
    padding: 20px 10px; /* Ajustar el padding para mayor comodidad en pantallas pequeñas */
  }

  .toggle-readList-btn {
    display: block;
    margin-right: 10px;
  }
}

@media (max-width: 990px) {
  .grid-container {
    text-align: left; /* Centrar contenido */
  }

  .total-books-container,
  .genre-filter,
  .pages-filter {
    justify-self: left; /* Centrar contenido */
  }

  .toggle-readList-btn {
    margin-right: 0px;
  }
}


/* Estilos para pantallas grandes */
@media (min-width: 990px) {
  .header-container {
    height: 40px; /* Altura del header en pantallas grandes */
  }
}

.toggle-readList-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: white;
  color: rgb(58, 56, 56);
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 1001;
}

.toggle-readList-btn:hover {
  background-color: white;
}
</style>
