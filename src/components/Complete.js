import React from 'react'
import { useTenziesContext } from './TenziesContext'
import { useEffect } from 'react'

const Complete = () => {
   const { rePlay,goHome,tenzies,dice,count,failed,scores,setScores,num}= useTenziesContext()
   let {random} = dice[0];
       let dotStyle;
    if(random.length == 2){
      dotStyle='two'
    }else if(random.length == 3){
      dotStyle='three'
    }else if(random.length == 4){
      dotStyle='four'
    }else if(random.length == 5){
      dotStyle='five'
    }else if(random.length == 6){
      dotStyle='six'
    }else dotStyle = 'one'
  return (
    <>
      {failed ? <h2>You failed!</h2> : 
      <>
      <h2>You won!</h2>
      <div className={`${dotStyle} ran dots`}>{dice[0].random}</div>
      </>
      }
      <div className='complete'>
      <button onClick={rePlay}>{failed ?'try again':'play again'}</button>
      <button onClick={goHome} >home</button>
      </div>
    </>
  )
}

export default Complete