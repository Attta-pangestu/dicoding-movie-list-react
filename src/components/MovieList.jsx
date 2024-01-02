import MovieItem from "./MovieItem";
import PropTypes from 'prop-types';

function MovieList({movieList}){
    if (!movieList.length) {
      return <p>No Movies Found</p>;
    }
    return (
      <div>
        {movieList.map(movie => (<MovieItem key={movie.id} {...movie} />))}
      </div>
    );
}

MovieList.propTypes = {
    movieList : PropTypes.array.isRequired
}

export default MovieList;
