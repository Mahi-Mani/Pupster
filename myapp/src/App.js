import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Discover from "./pages/Discover";

function App() {

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/discover" component={Discover} />
      </div>
    </Router>
  )
}

export default App;