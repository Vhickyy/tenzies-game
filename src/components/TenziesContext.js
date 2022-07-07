import { createContext, useContext,useState,useEffect} from "react";

const TenziesContext = createContext();

export const TenziesProvider = ({children}) =>{
    const [game, setGame] = useState({score:false,instruction:false,play:false,newt:false})
    const [tenzies,setTenzies] = useState(false)
    const [failed,setFailed] = useState(false)
    const [dice,setDice] = useState([])
    const [num,setNum] = useState(ranNum())
    const [chooseDice, setChooseDice] = useState(true)
    const [diceType, setDiceType] = useState({numType: false,dotType:false})
    const [scores,setScores]=useState(JSON.parse(localStorage.getItem('scoring'))||[])
    const [count,setCount]= useState(getCount())
   function getCount(){
    return 59;
   }
    useEffect(()=>{
        let item = scores.map(score=>{
            return score.num
        })
        item.push(num);
        let item2 = [...new Set(item.map(i=>{
            return i
        }))]
       
        if(tenzies && !failed){
            let time = getCount() - count
            let result = {num,time}
            if(item.length ===item2.length){
                let history = [...scores,result]
                // console.log(history);
                setScores(history)
                 localStorage.setItem('scoring',JSON.stringify(history))
            }else{
               
               let history = scores.map(score =>{
                if(score.num === result.num){
                    if(score.time > result.time){
                        return {...score,time:result.time}
                    }return score
                }else{
                    return score
                }
               })
               setScores(history)
               localStorage.setItem('scoring',JSON.stringify(history))
               
            }
        }
    },[num,tenzies])


    function ranNum(){
        return (Math.ceil(Math.random()*3)+1)*5;
    }

    const getNumDice = (num) =>{
    const diceArr = [];
    let id = 0
    for(let i=0;i<num;i++){
        const random = Math.ceil(Math.random()*6)
        id += 1
        diceArr.push({id,random,isHeld:false})
    }
    return diceArr
    }
   
    
    
    const getDotDice =(num)=>{
        const dice = getNumDice(num);
       const dotface = dice.map(die=>{
     let arr = []
   
        for(let i=0;i<die.random;i++){
            
            arr.push(<div key={i} className={`dots ${die.random}`}></div>)
        }
            const dotsdice = {...die,random:arr}
            return dotsdice
        })
        return dotface
    }
  

    const rollDot=()=>{
        const newDot = dice.map(die=>{
            return die.isHeld? die:{...die,random:Math.ceil(Math.random()*6)}
        })
        const dotDice = newDot.map(item=>{
            if(item.isHeld){
                return item
            }else{
                let arr = []
                for(let i = 0;i<item.random;i++){
                    arr.push(<div key={i} className="dots"></div>)
                }
                // console.log(arr);
                return {...item,random:arr}
            }
        })
        setDice(dotDice)
    }


    const rollNum =()=>{
    setDice(old=>old.map((die)=>{
    return die.isHeld ? die : {...die,random:Math.ceil(Math.random()*6)}
    }))
    }


    const hold =(id)=>{
    setDice(old=>old.map((die)=>{
        return die.id === id ? {...die, isHeld:!die.isHeld} : die
    }))
    }
    function here(){
    let num =''
    for(let i =0;i<5;i++){
        const random = Math.ceil(Math.random()*6)
        console.log(random);
    }
    return num
    }
      const rePlay = ()=>{
    setDiceType({numType: false,dotType:false})
    setTenzies(false)
    setDice([])
    setChooseDice(true)
    setFailed(false)
    setCount(getCount())
    setNum(ranNum())
    setGame({play:true,instruction:false,score:false,newt:true});
   }
   const goHome =()=>{
    rePlay();
    setGame({score:false,instruction:false,play:false,newt:false})
   }
   const goBack=()=>{
    setCount(getCount())
    setGame({score:false,instruction:false,play:false,newt:false})
   }

  
    return (
        <TenziesContext.Provider value={{game, setGame,dice,setDice,setChooseDice ,chooseDice, diceType, setDiceType, getNumDice, getDotDice,num,hold,rollDot, rollNum, tenzies, setTenzies, failed,setFailed, here, rePlay,goHome,goBack,scores,setScores,count,setCount,ranNum,setNum, getCount}}>
            {children}
        </TenziesContext.Provider>
    )
}

export const useTenziesContext = ()=>{
    return useContext(TenziesContext)
}