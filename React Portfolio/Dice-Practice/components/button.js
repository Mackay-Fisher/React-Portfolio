import React from "react"

export default function Button(props){
    return(
        <div className="button-cs">
        <button className="but" onClick = {props.handleclick}>{props.check === true ? "Rest Dice" : "Roll"}</button>
        </div>
    )
}