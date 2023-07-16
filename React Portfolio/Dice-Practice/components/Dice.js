import React from "react"

export default function Dice(props){
    const Styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return(
        <div className= "die-face" style={Styles} onClick= {()=>{props.handleclick(props.id)}}>
            <h2 className="dice-num" >{props.value}</h2>
        </div>
    )
}