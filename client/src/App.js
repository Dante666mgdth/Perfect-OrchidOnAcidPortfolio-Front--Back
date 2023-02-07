import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import React, { useState } from 'react'
import Contact from "./components/contact";
import Main from './components/Main';


function App() {
  console.log(process.env.REACT_APP_SERVER_URL)
  console.log(process.env.REACT_APP_OTHER_VALUE)
  return (
    <div className="App">
      <Layout>
        
        <Home />
        <Main />
        <Contact />
      </Layout>
      
    </div>
  );
}

export default App;

