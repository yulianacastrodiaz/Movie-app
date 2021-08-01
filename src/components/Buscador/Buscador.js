import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import s from './Buscador.module.css';
import {addMovieFavorite, getMovies} from "../../actions"



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getMovies(this.state.title)
  }

  toggleImage = () => {
    this.setState(state => ({ title: state.title }))
  }

  render() {
    const { title} = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className={s["form-container"]} onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className={s.label} htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <div className={s.movies}>
         {
          this.props.movies.map(movie => {
            console.log(movie)
            return (
              <div className={s.mov} key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
                  <p id={s.title} >{movie.Title}</p>
                </Link>
                  <img src={movie.Poster} alt="poster of movie" height="300px" width="230px"></img>
                  <img src="star.png" alt="icono-fav" width="30px" height="30px" 
                  onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>
                  </img>
              </div>
            )
          })
         }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //me traigo el estado moviesLoaded porque allí están todas las películas
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
