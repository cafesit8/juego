import { useState } from 'react'
import './App.css'
import { Questions } from './components/Questions'

function App() {
  return (
    <div className="m-auto w-full h-screen flex justify-center">
      <Questions />
    </div>
  )
}

export default App
