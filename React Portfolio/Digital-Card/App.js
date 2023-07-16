import React from "react"
import Bio from "./components/Bio"
import Butt from "./components/Buttons"
import Info from "./components/Info"
import Icon from "./components/iconbar"

export default function App(){
    return(
        <div>
            <Bio />
            <Butt />
            <Info />
            <Icon />
        </div>
    )
}