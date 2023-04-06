<template>
  <v-card class="border">
    <v-card-text>
      <h2>{{ movie.name }}</h2>
      <p>{{ movie.description }}</p>
      <div>{{ movie.duration }}</div>
    </v-card-text>

    <v-card-actions v-if="!hideHeart">
      <v-spacer />
      <v-btn
        :color="movie.is_favorite ? 'red' : 'white'"
        icon="mdi-heart"
        size="small"
        @click="storeMovie.addOrRemove(movie)"
      />
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useMovie } from '@/store/useMovie';

const props = defineProps({
  movie: Object,
  hideHeart: Boolean
})

const storeMovie = useMovie()
</script>











