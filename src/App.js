import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    //Initialize Materialze JS
    M.AutoInit();
  });
  return <div className="App">My app</div>;
}

export default App;
