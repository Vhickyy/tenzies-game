import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Button from './Button'
import Complete from './Complete'
import { useTenziesContext } from './TenziesContext'

const Playing = () => {
    const {diceType,dice,setDice,getNumDice, getDotDice,num, rollDot, rollNum, tenzies, setTenzies, setFailed,setChooseDice,setDiceType,count,setCount,ranNum,setNum,getCount} = useTenziesContext()
    const [counting, setCounting] = useState(true)
    const {numType,dotType} = diceType
     useEffect(()=>{
        
        const timer= setInterval(()=>{
        if(counting){
                let num = count-1;
        if(num < 0){
            setFailed(true)
            setTenzies(true)
        }
        setCount(num)
        }
        },1000)
        return ()=> clearInterval(timer)
    },[count])
    useEffect(()=>{
        if(numType){
            setDice(getNumDice(num))
        }else{
            // setDice(getDotDice(num))
            setDice(getDotDice(num))
        }
    },[])
  
     useEffect(()=>{
        if(dice.length){
            const arr = dice.every(die => die.isHeld);
            const first = dice[0].random
            const second = dice[0].random.length
            const diceface = dice.every(die=>{
                if(numType){
                   return  die.random === first
                }else{
                   return  die.random.length === second
                }
            } )
            if(arr && diceface){
                setCounting(false)
                setTimeout(()=>{
                    setTenzies(true)
                    
                    // setGame({...Game,newt:false})
                },100)
            }
        }
    },[dice])




    const change =()=>{
     setNum(ranNum())
    setCount(getCount())
    setChooseDice(true)
    setDiceType({numType: false,dotType:false})
    setDice([])
  }
  
  return (
    <>
        {!tenzies && (<>
            <h2 className='title'>Lorem ipsum dolor sit amet.</h2>
            <p>Time: <span style={count>5?{color:'green'}:{color:'red'}}>00:{count < 10 ? `0${count}` : count}</span></p>
            <div className='grid'>
            {dice.map((die)=>{
                const {id, random} = die;
                return (
                 
                 <div key={id}>
                {
                <Button die={die}/>
                }</div>
                
                )
            })}
            </div>
            <button className='play' onClick={numType?rollNum:rollDot}>Roll</button>
             <button className='play home' onClick={change}>back</button>
             
        </>)}
        {tenzies && <Complete />}

    </>
  )
}

export default Playing