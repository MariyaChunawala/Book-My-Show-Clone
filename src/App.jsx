import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import temp from "./components/temp";
function App() {
  return (
    <>
      <DefaultHOC exact path="/" component={temp}/>
    </>
  );
}

export default App;
