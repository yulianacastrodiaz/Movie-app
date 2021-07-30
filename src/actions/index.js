export function getMovies(title) {
	// debe pedir un request a la API y traer todas las peliculas del title
	return function (dispatch) {
		return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + title)
			.then(r => r.json())
			.then(data => {
				dispatch({
					type: "GET_MOVIES",
					movies: data.Search
				})
			})
	}
}

export function getMovieDetail(idMovie) {
	return function (dispatch) {
		// debe pedir a la API los detalles de una película
		return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${idMovie}`)
			.then(r => r.json())
			.then(data => {
				dispatch({
					type: "GET_MOVIE_DETAIL",
					movie: data
				})
			})
	}
}

export function addMovieFavorite(movie) {  // recibo la movie que voy a agregar
	return {
		//agrega una película a favoritos
		type: "ADD_MOVIE_FAVORITE",
		movie
	}
}

export function removeMovieFavorite(idMovie) {
	//recibo la movie que voy a eliminar
	return {
		//quita una película de favoritos
		type: "REMOVE_MOVIE_FAVORITE",
		idMovie
	}
}
