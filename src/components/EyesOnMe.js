import React from 'react'

function EyesOnMe() {

  function handleBlur(){
    console.log("Hey! Eyes on me!")
  }

  function handleFocus(){
    console.log("Good!")
  }

  return (
    <div>EyesOnMe
        <button onFocus={handleFocus} onBlur={handleBlur}> Eyes on me</button>
    </div>
  )
}

export default EyesOnMe;
