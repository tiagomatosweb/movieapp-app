import axios from 'axios'

export const useMovie = () => {
  function addOrRemove(movie) {
    axios.put(`http://localhost:8000/api/movies/${movie.id}/favorite`)
      .then((response) => {
        movie.is_favorite = response.data.data.is_favorite
      })
  }

  return {
    addOrRemove,
  }
}













