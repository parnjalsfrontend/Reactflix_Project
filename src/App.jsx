import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import "./components/Header";
import Header from "./components/Header";
import Homebanner from "./components/Homebanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Homebanner />
              </React.Fragment>
            }
          />
          
          
          <Route path="/login" element={
            <React.Fragment>
              <Header/>
              <Login page/>
            </React.Fragment>
          }/>
           <Route path="/register" element={
            <React.Fragment>
              <Header/>
              <Login/>
            </React.Fragment>
          }/>
          <Route
            path="/dashboard"
            element={<React.Fragment>
              <Header/>
              <Banner/>
              <List title="Netflix Orginal"/>
              <List title="Trending Now"/>
              <List title="Top Rated"/>
              <List title="Favourite"/> 
              
            </React.Fragment>}
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
