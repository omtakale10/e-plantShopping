import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="landing-page">
        
        {/* REQUIRED TEXT */}
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Discover a wide variety of plants to decorate your home and
          create a healthy environment.
        </p>

        {/* REQUIRED BUTTON */}
        <button className="get-started-btn">
          Get Started
        </button>

      </div>
    </div>
  );
}

export default App;
