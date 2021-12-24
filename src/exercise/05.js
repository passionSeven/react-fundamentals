// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Try to make a custom <Box /> component that renders a div, accepts all the props and merges the given style and className props with the shared values.

// I should be able to use it like so:

// The box className and fontStyle: 'italic' style should be applied in addition to the values that come from props.

const Box = ({className, style, children}) => {
  return (
    <div className={'box ' + className} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'orange'}}>
        medium orange box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'goldenrod'}}>
        large goldenrod box
      </Box>
    </div>
  )
}

export default App
