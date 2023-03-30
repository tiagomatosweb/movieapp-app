<template>
  <h3>Meus favoritos</h3>

  <MovieCard
    v-for="movie in movies"
    :key="movie.id"
    :movie="movie"
  />
<!---->
  <div v-if="!movies.length">
    Você não tem nenhum filme favorito.
  </div>
</template>

<script setup>
import { useMovie } from '@/composables/useMovie';
import MovieCard from '@/components/MovieCard.vue';

defineProps({
  movies: Array
})
</script>
