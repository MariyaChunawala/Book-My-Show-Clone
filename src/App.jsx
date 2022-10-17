import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlaysPage from "./pages/Plays.page";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC exact path="/" component={HomePage} />
      <MovieHOC exact path="/movie/:id" component={MoviePage} />
      <DefaultHOC exact path="/plays" component={PlaysPage} />
    </>
  );
}

export default App;
