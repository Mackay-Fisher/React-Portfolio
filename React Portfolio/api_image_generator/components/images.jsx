import React from "react"

export default function Ima(props){
    console.log(props.url)
    return(
        <div className="imagestyle">
        <h1 className="name">Meme-name: {props.name}</h1>
        <img className = "imgsize" src={props.url}/>
        </div>
    )
    
}