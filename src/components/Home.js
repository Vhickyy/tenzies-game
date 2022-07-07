import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Game from './Game';
import Instruction from './Instruction'
import {useTenziesContext} from './TenziesContext'


const Home = () => {
 const {setGame}
 =useTenziesContext(); 


  return (
    <div className='btn-container'>
     
      <button onClick={()=>{
        setGame({play:true,instruction:false,score:false,newt:true})}}>New Game</button>
      <button onClick={()=>{setGame({instruction:true,newt:false,play:true,score:false})}}>Instruction</button>
      <button onClick={()=>{setGame({score:true,newt:false,play:true,instruction:false})}}>Score</button>
      
    </div>
  )
}

export default Home