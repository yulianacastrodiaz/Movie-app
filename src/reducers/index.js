const initialState = {
	moviesFavorites: [],
	moviesLoaded: [],
	movieDetail: {}
};


export default function rootReducer(state = initialState, action) {
	if(action.type === "GET_MOVIES"){
		return{
			...state,
			moviesLoaded: action.movies
		}
	}

	if(action.type === "GET_MOVIE_DETAIL"){
		return{
			...state,
			movieDetail: action.movie
		}
	}

	if(action.type === "ADD_MOVIE_FAVORITE"){
		return{
			...state,
			moviesFavorites: [...state.moviesFavorites, action.movie]															
		}
	}

	if(action.type === "REMOVE_MOVIE_FAVORITE"){
		return{
			...state,																						
			moviesFavorites: state.moviesFavorites.filter(movie => (action.idMovie !== movie.id))
		}
	}

	return state;
} 

