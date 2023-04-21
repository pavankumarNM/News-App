import "./App.css";
import Navbar from "./components/Navbar.js";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_APIKEY;
  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" apiKey={this.apiKey} pageSize={6} category="general" country="in" />} />
            <Route path="/business" element={<News key="business" apiKey={this.apiKey} pageSize={6} category="business" country="in" />} />
            <Route path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} pageSize={6} category="entertainment" country="in" />} />
            <Route path="/health" element={<News key="health" apiKey={this.apiKey} pageSize={6} category="health" country="in" />} />
            <Route path="/science" element={<News key="science" apiKey={this.apiKey} pageSize={6} category="science" country="in" />} />
            <Route path="/sports" element={<News key="sports" apiKey={this.apiKey} pageSize={6} category="sports" country="in" />} />
            <Route path="/technology" element={<News key="technology" apiKey={this.apiKey} pageSize={6} category="technology" country="in" />} />
          </Routes>
          </Router>
        
      </div>
    );
  }
}

