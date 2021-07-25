import React from 'react'
import './assets/css/base/base.css'
import Home from "./paginas/Home";
import About from "./paginas/About";

function App() {
  
  const Router = () => {
    const location = window.location.pathname;
    if(location === '/about') return <About/>
    return <Home/>
  };
  return (
  <>
    {Router()}
  </>
  )
}

export default App
