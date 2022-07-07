import React from 'react'
import Game from './Game'
import { useTenziesContext } from './TenziesContext'

const Select = () => {
    const {setChooseDice,diceType, setDiceType } = useTenziesContext()
  return (
    <div className='main'>
      <h2>select</h2>
      <div className="game-container">
          <div className='select-1'>
            <div className='select-die'>
              <div className='ran three'>
                <div className='dots'></div>
                <div className='dots'></div>
                <div className='dots'></div>
              </div>
            </div>
            <button onClick={()=>{setChooseDice(false)
             setDiceType({...diceType,dotType:true})
              
            }}>dot</button>
         </div>
         <div className='select-1'>
            <div className='select-die'>
              <div className='ran num high'>
                <div>3</div>
              </div>
            </div>
            <button onClick={()=>{setChooseDice(false)
             setDiceType({...diceType,numType:true})
            }}>Num</button>
          </div>
      </div>
    </div>
  )
}

export default Select