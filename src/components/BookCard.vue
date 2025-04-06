<script setup>
import { defineProps } from 'vue';
import { addBookToReadingList } from '../store/manageBook';

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const addBook = () =>{
  addBookToReadingList(props.book);
}

</script>

<template>
  <div class="book-card">
    <img :src="book.frontPage" class="book-image" alt="Portada del libro" />
    <div class="inner-content">
      <!-- Contenedor para el título y el botón -->
      <div class="header">
        <h2>{{ props.book.title }}</h2>
        <div class="circle" @click="addBook" role="button" tabindex="0">
          <span class="plus-sign">+</span>
        </div>
      </div>
      <p>{{ book.author }}</p>
      <p>Género: {{ book.genre }}</p>
      <p>Publicado en: {{ book.year }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Clase para el contenedor principal */
.book-card {
  background-color: rgb(58, 56, 56); 
  color: white; 
  border: 2px solid white; 
  border-radius: 10px; 
  padding: 5px; 
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3); 
  max-width: 200px; /* Reducción en el ancho máximo */
  margin-bottom: 15px; /* Centrarlo horizontalmente */
}

/* Clase para la imagen */
.book-image {
  max-width: 100%;
  max-height: 180px;
  min-height: 140px;
  display: block;
  margin: 0 auto; /* Centrar la imagen */
  border-bottom: 1px solid white; /* Separación visual con el contenido */
}

/* Contenedor que contiene el título y el botón */
.header {
  display: flex;
  justify-content: space-between; /* Espaciado entre el título y el botón */
  align-items: center; /* Alineación vertical centrada */
  width: 100%;
  border-bottom: 1px solid white; /* Borde debajo del título y el botón */
  padding-bottom: 5px; /* Separación entre el borde y el contenido */
}

/* Estilo para el botón */
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid white; /* Borde blanco */
  border-radius: 50%; /* Hace que el div tenga forma circular */
  background-color: white; /* Fondo blanco */
  color: rgb(58, 56, 56); /* Color del símbolo + */
  font-size: 2rem; /* Tamaño del símbolo + */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Animación de clic y sombreado */
  width: 20px; /* Ajustar tamaño */
  height: 20px; /* Ajustar tamaño */
}

.circle:active {
  transform: scale(0.9); /* Efecto de clic (reduce ligeramente el tamaño) */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra negra momentánea al hacer clic */
}

.plus-sign {
  font-weight: bold;
}

/* Reducir separación inferior del div interno */
.inner-content {
  background-color: rgb(58, 56, 56); /* Fondo negro */
  color: white; /* Texto blanco */
  border: 2px solid white; /* Borde blanco */
  border-radius: 10px; /* Puntas redondeadas */
  padding: 5px; /* Espaciado interno */
  margin-bottom: 5px;
  margin-top: 5px;
}

.inner-content h2 {
  font-size: 0.9rem; /* Título ligeramente más pequeño */
  font-weight: bold;
  text-align: left; /* Alineamos el texto a la izquierda */
  margin: 5px 0; /* Espaciado reducido */  
}

.inner-content p {
  font-size: 0.7rem; /* Reducir tamaño del texto */
  margin: 3px 0; /* Espaciado menor entre párrafos */
}
</style>
