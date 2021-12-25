// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function FormErrorMessage({isValid}) {
  return isValid ? null : (
    <p style={{color: 'red'}}>Username must be lower case</p>
  )
}

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const isValid = username === username.toLowerCase()
  const handleSumbit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleUsernameChange}
          value={username}
        />
      </div>
      <FormErrorMessage isValid={isValid} />
      <button disabled={!isValid} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
