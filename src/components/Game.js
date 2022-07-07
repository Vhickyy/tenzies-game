import React from 'react'

import Playing from './Playing'
import Select from './Select'
import { useTenziesContext } from './TenziesContext'

const Game = () => {
  const {chooseDice, diceType,goBack} = useTenziesContext()
 
  return (
    <>
      {chooseDice && <Select/>}
      {(diceType.numType || diceType.dotType) && <Playing/> }
       {chooseDice && <button onClick={goBack}>Home</button>}
    </>
  )
}

export default Game