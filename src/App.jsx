import React from "react";
import DefaultHOC from "./HOC/Default.HOC";

// Pages
import HomePage from "./pages/Home.page";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC exact path="/" component={HomePage} />
    </>
  );
}

export default App;
