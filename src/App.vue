<script setup>
import AppHeader from './components/AppHeader.vue';
import BookList from './components/BookList.vue';
import ReadList from './components/ReadList.vue';
</script>

<template>
  <AppHeader />
  <div>
    <BookList />
    <ReadList />
  </div>  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
