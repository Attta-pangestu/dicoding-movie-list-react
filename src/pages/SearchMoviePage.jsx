import React from "react";
import SearchBar from "../components/SearchBar";
import { searchMovies } from "../utils/data";
import MovieList from "../components/MovieList";

class SearchMoviePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchMovieList : [],
      }
      this.onSearchHandler = this.onSearchHandler.bind(this);
    }
  
    onSearchHandler(keyword) {
      this.setState({
        searchMovieList : searchMovies(keyword),
      });
    }
  
    render(){
      return (
        <section>
          <h2>Search Movie</h2>
          <SearchBar searchHandler={this.onSearchHandler} /> 
          <MovieList movieList={this.state.searchMovieList}/>
        </section>
      );
    }
  }

export default SearchMoviePage;