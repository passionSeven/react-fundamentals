// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef('')
  const handleSumbit = event => {
    event.preventDefault()
    const username = usernameRef.current.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={usernameRef} id="username" type="text" />
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
