import React from "react"
export default function Card(props){
    return(
        <div className = "Card">
        <img className="Card--img" src= {props.img}/>
                <div className="topline">
                <i className="material-icons">place</i>
                <h1 className="Card--name">{props.location}</h1>
                <a className = "Link" href = {props.gmaps}> See on Google Maps</a>
                </div>
        <div className="card--info">
        <h1 className ="location">{props.title}</h1>
        <h1 className="start">{props.start} - {props.end}</h1>
        <p className="Card--description">{props.description}</p>
        </div>
        <hr className="brek-line"/>
        </div>
        
    )
}