import "./App.css";
import Navbar from "./components/Navbar.js";
import React from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App =()=> {
  const pageSize=6
  const apiKey=process.env.REACT_APP_NEWS_APIKEY

    return (
      <div>

        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" apiKey={apiKey} pageSize={pageSize} category="general" country="in" />} />
            <Route path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} category="business" country="in" />} />
            <Route path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} category="entertainment" country="in" />} />
            <Route path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} category="health" country="in" />} />
            <Route path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} category="science" country="in" />} />
            <Route path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} category="sports" country="in" />} />
            <Route path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} category="technology" country="in" />} />
          </Routes>
          </Router>
        
      </div>
    );
  }



export default App;
