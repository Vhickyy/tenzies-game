import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useTenziesContext } from './TenziesContext'

const Score = () => {
  const {scores,setScores} = useTenziesContext();
 
  
const clear =()=>{
  setScores([])
  localStorage.removeItem('scoring')
}

  return (
    <>
    {!scores.length ? 
      <h2 className='top'>No Score</h2> 
    : 
    <>
    <div className='scoring'>
    <div className='score'>
      <h2>dice length</h2>
    <h2>time taken</h2>
    </div>
      {scores.map((score,index)=>{
        let {num,time} = score;
        return (<div key={index}>
          <div className='score'>
            <h3 className='left'>{num}</h3>
            <h3 className='right'>00:{time<10 ? `0${time}`: time}</h3>
          </div>
        </div>)
      })}
      </div>
      <button onClick={clear}>clear</button>
    </>}
    </>
  )
}

export default Score