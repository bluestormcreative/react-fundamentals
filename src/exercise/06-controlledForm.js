// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState();

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setUsername(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={username}
        />
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
