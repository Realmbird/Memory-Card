import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './components/cardlist'


function App() {
  const [score, setScore] = useState(0)
  const [high, setHigh] = useState(0)
  function handleClick (){
    let newscore = score + 1
    setScore(newscore)
    if(newscore > high) {
      setHigh(newscore)
    }
  }
  return (
    <div className='Memory-App'>
      <div id="header">
        <div id="info">
          <div id="header-title">
            <h1>Bird Memory Game</h1>
          </div>
          <span>Get points by clicking on an image but do not click on any more than once!</span>
          </div>
          <div id="scores">
            <span class="score">Score: 0</span>
            <span class="high">High: 0</span></div></div>
     <CardList />
    </div>
  )
}

export default App
