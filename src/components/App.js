import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleGreet = () => {
    setGreeting(`Hello ${name}!`);
  };

  return (
    <div>
      <h1>Your App Title</h1>

      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      
      <button onClick={handleGreet}>Greet</button>

      <div>{greeting}</div>

      {/* Additional components and content can be added here */}
    </div>
  );
}

export default App;
