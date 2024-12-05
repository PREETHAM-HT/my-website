import React from 'react';
import './index.css';
import Footer from './Footer';  // Import the Footer component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Website</h1>
        <p>This is a simple website built with React!</p>
      </header>
      <Footer />  {/* Include the Footer component */}
    </div>
  );
}

export default App;
