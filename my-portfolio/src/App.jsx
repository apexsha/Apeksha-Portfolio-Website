import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Router>
        <header className="p-4 flex justify-between items-center bg-blue-500 dark:bg-gray-800">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 border rounded bg-gray-200 dark:bg-gray-600"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="p-4 text-center bg-blue-500 dark:bg-gray-800">
          <p>&copy; 2025 Apeksha's Portfolio. All rights reserved.</p>
        </footer>
      </Router>
    </div>
    
  );
};

export default App;