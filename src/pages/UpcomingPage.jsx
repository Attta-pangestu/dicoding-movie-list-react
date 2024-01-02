import React from "react";
import { getUpcomingMovies } from "../utils/data";
import MovieList from "../components/MovieList";

class UpcomingPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        upcomingMovieList : getUpcomingMovies(),
      }
    }
    render(){
      return (
        <section>
          <h2>Upcoming Movie</h2>
          <MovieList movieList={this.state.upcomingMovieList}/>
        </section>
      );
    }
  }

export default UpcomingPage;