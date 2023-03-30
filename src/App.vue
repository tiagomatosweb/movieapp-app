<template>
  <v-app theme="dark">
    <v-navigation-drawer
      v-model="isFavoriteOpen"
      temporary
      location="right"
    >
      <div class="pa-4">
        <MyFavorite />
      </div>
    </v-navigation-drawer>

    <v-app-bar title="Filmes" class="text-center">
      <v-btn icon="mdi-heart" @click="isFavoriteOpen = !isFavoriteOpen" />
    </v-app-bar>

    <v-main class="mt-4">
      <v-container>
        <v-row>
          <v-col
            v-for="movie in movies.data"
            :key="movie.id"
            cols="12"
            md="6"
            lg="3"
          >
            <MovieCard :movie="movie" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import axios from 'axios';
  import { useAsyncState } from '@vueuse/core'
  import { ref } from 'vue';
  import MyFavorite from '@/components/MyFavorite.vue';
  import { useMovie } from '@/composables/useMovie';
  import MovieCard from '@/components/MovieCard.vue';

  const { favorite, add: addMovieToFavorite } = useMovie()


  const isFavoriteOpen = ref(false)

  const { state: movies, isReady, isLoading } = useAsyncState(
    axios
      .get('http://localhost:8000/api/movies').then(r => r.data),
    {},
  )












</script>
