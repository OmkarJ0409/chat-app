import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [name, setName] = useState('');
  
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <h1>Interactive Greeting App</h1>
      <label htmlFor="nameInput">Enter your name:</label>
      <input 
        type="text" 
        id="nameInput" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Your Name" 
      />
      <div className="greeting">
        {name && <p>Hello, {name}! Welcome to our open source project!</p>}
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


