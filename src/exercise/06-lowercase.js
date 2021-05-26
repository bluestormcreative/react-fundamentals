// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = useState();

  const handleChange = (event) => {
    // Get the input value onChange.
    const value = event.target.value;
    // Check if the value is the same as its lowercase self.
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(event.target.elements.username.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
        />
        <span className="error-msg" role="alert">
          {error}
        </span>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
