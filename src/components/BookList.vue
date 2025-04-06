<script setup>
  import BookCard from './BookCard.vue';
  import { loadBook, listOfBooks} from "../store/manageBook";
  import { onMounted } from 'vue';

  onMounted(loadBook);

</script>

<template>
    <div class="book-container">
    <!-- Lista de libros -->
        <div v-if="listOfBooks.length" class="book-list">
            <BookCard v-for="book in listOfBooks" :key="book.id" :book="book"/>
        </div>

        <p v-else>No hay libros disponibles.</p>
    </div>
</template>
    
<style scoped>

.book-container {
  margin-right: 250px; /* Reducir el margen derecho */
  margin-left: 20px;
  margin-top: 80px;
}

.book-list {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Hasta 4 en pantallas grandes */
  gap: 10px; /* Espaciado entre tarjetas */
}

/* Media query para pantallas medianas */
@media (max-width: 990px) {
  .book-list, .book-container {
    grid-template-columns: repeat(2, 1fr); /* Hasta 2 en pantallas medias */
    margin-right: 0px;
    margin-left: 60px;
    justify-content: center;
    margin-top: 200px;
  }
}

/* Media query para pantallas pequeñas */
@media (max-width: 700px) {
  .book-list, .book-container {
    grid-template-columns: repeat(1, 1fr); /* Una tarjeta por fila */
    margin-right: 0px;
    margin-left: 40px;
  }
}

</style>


  