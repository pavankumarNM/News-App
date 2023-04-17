import "./App.css";
import Navbar from "./components/Navbar.js";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={6} category="general" country="in" />} />
            <Route path="/business" element={<News key="business" pageSize={6} category="business" country="in" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} category="entertainment" country="in" />} />
            <Route path="/health" element={<News key="health" pageSize={6} category="health" country="in" />} />
            <Route path="/science" element={<News key="science" pageSize={6} category="science" country="in" />} />
            <Route path="/sports" element={<News key="sports" pageSize={6} category="sports" country="in" />} />
            <Route path="/technology" element={<News key="technology" pageSize={6} category="technology" country="in" />} />
          </Routes>
          </Router>
        
      </div>
    );
  }
}

