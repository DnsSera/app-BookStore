<script setup lang="js">
import { isSidebarActive } from "../store/manageReadList";
import { readingList, removeBookFromReadingList , loadBook} from "../store/manageBook";
import { onMounted } from "vue";

// Función para eliminar un libro de la lista de lectura
const removeBook = (bookId) => {
  removeBookFromReadingList(bookId);
};

onMounted(loadBook);
</script>

<template>
  <!-- Sidebar -->
  <div class="readList" :class="{ active : isSidebarActive }">
    <h2>Lista de Lectura ({{ readingList.length }})</h2>
    <div class="books-container">
      <div v-for="book in readingList" :key="book.id" class="book-item">
        <img :src="book.frontPage" alt="Front Page" class="book-image" />
        <button class="remove-btn" @click="removeBook(book.id)">X</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.readList {
  width: 300px; /* Ajustar el ancho para pantallas grandes */
  position: fixed;
  top: 70px;
  right: 0; /* Posicionar en el lado derecho */
  height: 100%;
  border-left: 2px solid #020e4a;
  background-color: #918b8b; /* Fondo claro */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2); /* Sombra */
  padding: 20px;
  overflow-y: auto; /* Desplazamiento si hay muchos libros */
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.readList.active {
  transform: translateX(0); /* Mostrar el sidebar cuando esté activo */
}

h2 {
  font-size: 20px;
  margin: 20px 0;
}

.books-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas en pantallas grandes */
  gap: 10px;
}

.book-item {
  position: relative;
}

.book-image {
  width: 100%; /* Imagen ocupa todo el espacio disponible */
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.remove-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(255, 0, 0, 0.6); /* Rojo semi-transparente */
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 16px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.remove-btn:hover {
  background-color: rgba(255, 0, 0, 0.8); /* Cambio de color al pasar el mouse */
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  .readList {
    width: 250px; /* Ancho reducido en pantallas pequeñas */
  }

  .books-container {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
  }

  .book-image {
    width: 80%; /* Reducir tamaño de la imagen en pantallas pequeñas */
    margin: 0 auto; /* Centrar la imagen */
  }
}

@media (max-width: 1280px) {
  .readList {
    margin-top: 100px;
    transform: translateX(100%);
  }
}
</style>
