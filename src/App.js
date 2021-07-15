import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Topics from "./components/Topics"

import './App.css';
 
class App extends React.Component {
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route  path="/topics" component={Topics} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
 
}
export default App;