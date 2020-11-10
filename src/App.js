import React from 'react';
import AboutMe from "./pages/AboutMe";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Contact from "./pages/ContactMe";
import Portfolio from "./pages/MyProjects";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav/>
        <Switch>
            <Route path="/" exact>
                <AboutMe/>
            </Route>
            <Route path="/portfolio">
                <Portfolio/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
