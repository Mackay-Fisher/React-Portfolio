import React from "react"
import {nanoid} from "nanoid"
import Dice from "./components/Dice"
import Button from "./components/Button"

/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */

export default function App() {    
    const [dice,setDice] = React.useState(newDice())
    const [tenzies,settenzies] = React.useState(false)
    
    React.useEffect(()=>{
        const tenziesval = dice[0].value
        const allHeld = dice.every(die => die.isHeld === true)
        const alltenzi = dice.every(die => die.value === tenziesval)
        if(allHeld && alltenzi){
            settenzies(true)
            console.log("You Won")
        }
    },[dice])
    
    function holdDice(id){
        setDice(oldDice => oldDice.map(dice =>{
        return dice.id === id ? {...dice, isHeld: !dice.isHeld} : {...dice}
        }))
    }
    
    function newDice(){
        const dieval = []
        for(let i=0; i< 10; i++){
            dieval.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return dieval
    }
    
    function rollDice(){
        if(tenzies){
            setDice(newDice())
            settenzies(false)
        }else{
        setDice(oldDice => oldDice.map(dice =>{
            return dice.isHeld ? {...dice} : {...dice, value: Math.ceil(Math.random() * 6)}
        }))
        }
    }
    
    const diceElements = dice.map(die=> 
    <Dice key={die.id} value= {die.value} isHeld= {die.isHeld} handleclick={holdDice} id={die.id}/> )
    
    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className= "dieHolder">
            {diceElements}
            </div>
            <Button
            handleclick = {rollDice}
            check = {tenzies}
            />
        </main>
    )
}