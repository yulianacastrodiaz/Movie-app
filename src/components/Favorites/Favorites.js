import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList  extends Component {
  
  render() {
    console.log(this.props.moviesFavorites)
    return ( 
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.moviesFavorites.map(movie => {
              return (
                <div key={movie.id}>
                  <li>{movie.title} <button onClick={() => this.props.removeMovieFavorite(movie.id) }> X</button> </li>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
function mapStateToProps(state) {
  return {
    moviesFavorites: state.moviesFavorites
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: idMovie => dispatch(removeMovieFavorite(idMovie)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
