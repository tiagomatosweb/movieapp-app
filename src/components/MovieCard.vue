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
        :color="inFavorite(movie.id) ? 'red' : 'white'"
        icon="mdi-heart"
        size="small"
        @click="addOrRemove(movie)"
      />
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useMovie } from '@/composables/useMovie';

const props = defineProps({
  movie: Object,
  hideHeart: Boolean
})

const { add, remove, inFavorite, addOrRemove } = useMovie()
</script>











