import React from "react";
import { Routes, Route} from 'react-router-dom';


// import pages
import Home from "./pages/HomePage";
import NowPlayingPage from "./pages/NowPlayingPage";
import UpcomingPage from "./pages/UpcomingPage";
import SearchMoviePage from "./pages/SearchMoviePage";


// import components
import Navigation from "./components/Navigation";
import DetailPageWrapper from "./pages/DetailPage";

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Movie Catalogue</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/search" element={<SearchMoviePage />} />
          <Route path="/movies/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}


export default App;

