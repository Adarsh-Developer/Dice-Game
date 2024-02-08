import { useState } from 'react'
import HomePage from './components/HomePage'
import GamePlay from './components/GamePlay'

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false)
  
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  
  return (
    <div className="">
      {
        isGameStarted ? <GamePlay /> : <HomePage onClick={toggleGamePlay} />
      }
    </div>
  )
}

export default App