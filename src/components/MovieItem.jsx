import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function MovieItem( {id,overview,posterPath, releaseDate, title}){
    return(
      <article>
        <img src={posterPath} alt={title} />
        <h3><Link to={`/movies/${id}`}>{title}</Link></h3>
        <small>{releaseDate}</small>
        <p>{overview}</p>
      </article>
    );
}

MovieItem.propTypes = {
  overview : PropTypes.string.isRequired,
  posterPath : PropTypes.string.isRequired,
  releaseDate : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
  

}

export default MovieItem;