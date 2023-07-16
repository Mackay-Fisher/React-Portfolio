import React from "react"
import Bar from "/Bar"
import Card from "/Card"
import Data from "/data"
export default function App(){
    const cards = Data.map(dat =>
    <Card 
    title = {dat.title}
    location = {dat.location}
    gmaps = {dat.googleMapsUrl}
    start = {dat.startDate}
    end = {dat.endDate}
    description = {dat.description}
    img = {dat.imageUrl}
    />)
    return(
        <div>
            <Bar/>
            {cards}
        </div>
    )
}