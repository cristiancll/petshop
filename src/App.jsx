import React from 'react'
import './assets/css/base/base.css'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import About from "./paginas/About";
import Home from "./paginas/Home";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App
