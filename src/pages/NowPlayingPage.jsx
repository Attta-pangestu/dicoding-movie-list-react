import React from "react";
import { getNowPlayingMovies } from "../utils/data";
import MovieList from "../components/MovieList";

class NowPlayingPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nowPlayingMovieList : getNowPlayingMovies(),
      }
    }
    render(){
      return (
        <section>
          <h2>Now Playing</h2>
          <MovieList movieList={this.state.nowPlayingMovieList}/>
        </section>
      );
    }
  }

export default NowPlayingPage;