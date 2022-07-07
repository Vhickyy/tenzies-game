import React, { useEffect } from 'react'
import { useTenziesContext } from './TenziesContext'

const Button = ({die}) => {
  const { hold,diceType}= useTenziesContext();
 const { dotType} = diceType;
    const {random,id,isHeld} = die;
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

        <div id={id} className={dotType?`${dotStyle} ran `: 'num ran'} style={isHeld? {backgroundColor:'green'} : null} onClick={()=>hold(id)}>{random}</div>
      
    </>
  )
}

export default Button