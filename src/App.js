import { useState } from 'react';
import Home from './components/Home';
import './index.css'
import Game from './components/Game';
import Instruction from './components/Instruction';
import Score from './components/Score';
import {useTenziesContext} from './components/TenziesContext'


function App() {

  const {game,goBack } = useTenziesContext();
  return <main className='container'>
        <div className='container2'>
          <div className='header'>
          <h1>Tenzies</h1>
          <div className='ran five'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
          </div>
          </div>
        {!game.play && <Home />}
        {game.instruction && <Instruction/>}
        {game.score && <Score/>}
        {game.newt && <Game/>}
        {(game.instruction || game.score) && <button onClick={goBack} className='home'>back</button>}
        </div>
  </main>
  
}

export default App;
