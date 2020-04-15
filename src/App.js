import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Utilities from "./components/utilities";
import Home from "./routes/home";

function App() {
  return (
    <Router>
      <Utilities>
        <Home />
      </Utilities>
    </Router>
  );
}

export default App;
