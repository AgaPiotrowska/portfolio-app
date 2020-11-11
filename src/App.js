import React from 'react';
import AboutMe from "./pages/AboutMe";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Contact from "./pages/ContactMe";
import Portfolio from "./pages/MyProjects";
import {Switch, Route, useLocation} from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import {AnimatePresence} from "framer-motion";

function App() {

  const location = useLocation();

  return (
    <div className="App">
        <GlobalStyle/>
        <Nav/>
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact><AboutMe/></Route>
                <Route path="/portfolio" exact><Portfolio/></Route>
                <Route path="/portfolio/:id"><ProjectDetail/></Route>
                <Route path="/contact"><Contact/></Route>
            </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
