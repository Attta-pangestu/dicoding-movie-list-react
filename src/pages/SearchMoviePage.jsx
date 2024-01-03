import React from "react";
import { searchMovies } from "../utils/data";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

function SearchMoviePageWrapper() {
  const [urlSearchParams, setSearchParams] = useSearchParams();
  
  // Sync from query to url
  function changeSearchParams(keyword) {
    setSearchParams(() =>({
      judul : keyword,
    }))
  }
  const judul = urlSearchParams.get('judul');
  return <SearchMoviePage  onURL={judul || ''} onSearch={changeSearchParams} /> ;
}

class SearchMoviePage extends React.Component {
    constructor(props) {
      super(props);
      const judul = this.props.onURL;
      console.log("Ini judulnya ya", judul);
      this.state = {
        judul : judul, 
        searchMovieList : searchMovies(judul),
      }
      console.log(this.state.searchMovieList);
      this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(keyword) {
      // change url params
      this.props.onSearch(keyword);
      this.setState({
        searchMovieList : searchMovies(keyword),
      });
    }
  
    render(){
      return (
        <section>
          <h2>Search Movie</h2>
          <SearchBar judul={this.state.judul} searchHandler={this.onSearchHandler} /> 
          <MovieList movieList={this.state.searchMovieList}/>
        </section>
      );
    }
  }

export default SearchMoviePageWrapper;