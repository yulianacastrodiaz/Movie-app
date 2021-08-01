import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

  componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id) 
  }

  render() {
    return (
      <div className="movie-detail">
        <h3>{this.props.movie.Title}</h3>
        <p>{this.props.movie.Plot}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: idMovie => dispatch(getMovieDetail(idMovie))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);