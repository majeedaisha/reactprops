import React from 'react'
import Navbar from "./components/Navbar"
import Todo from "./components/Todo"

function App() {
  let title="My first react app";

  return (
    <div>
    <Navbar title ={title} />
    <main>
    <Todo title="Learning react" datetime="23rd March 2022"/>
    <Todo title="Premest training "datetime="2nd January 2022"/>
    <Todo title="Pratical stress" datetime="2rd March 2022"/>
    <Todo title="Problems from coding" datetime="23rd June 2022"/>
    <Todo title="Teachers being fast" datetime="23rd May 2022"/>
    </main>
    </div>
  )
}

export default App