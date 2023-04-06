

import { defineStore } from 'pinia';
import axios from 'axios';

export const useMovie = defineStore('movie', {
  state: () => ({
    movies: []
  }),

  actions: {
    async getMovies() {
      const url = 'http://localhost:8000/api/movies';
      this.movies = await axios.get(url).then(r => r.data)
    },
    addOrRemove(movie) {
      const url = `http://localhost:8000/api/movies/${movie.id}/favorite`
      axios.put(url).then((response) => {
          movie.is_favorite = response.data.data.is_favorite
        })
    },
  },

  getters: {
    // É o mesmo que computed do componente
    // Vai se recomputar com qualquer alteração
    // das suas dependências
    favorites(state) {
      if (!state.movies?.data) {
        return []
      }

      return state.movies?.data?.filter(movie => movie.is_favorite);
    }
  },















})
