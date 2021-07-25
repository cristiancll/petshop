import React from 'react'
import './assets/css/base/base.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import Header from "./components/Header";
import Post from "./pages/Post";
import Category from "./pages/Category";

function App() {

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/category/:id">
                    <Category/>
                </Route>
                <Route path="/post/:id">
                    <Post/>
                </Route>
                <Route>
                    <Page404/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App
