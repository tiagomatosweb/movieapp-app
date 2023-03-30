<template>
  <v-card class="border">
    <v-card-text>
      <h2>{{ localMovie.name }}</h2>
      <p>{{ localMovie.description }}</p>
      <div>{{ localMovie.duration }}</div>
    </v-card-text>

    <v-card-actions v-if="!hideHeart">
      <v-spacer />
      <v-btn
        :color="localMovie.is_favorite ? 'red' : 'white'"
        icon="mdi-heart"
        size="small"
        @click="addOrRemove(localMovie)"
      />
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useMovie } from '@/composables/useMovie';
import { ref } from 'vue';

const props = defineProps({
  movie: Object,
  hideHeart: Boolean
})

const localMovie = ref(props.movie)

const { addOrRemove } = useMovie()
</script>











