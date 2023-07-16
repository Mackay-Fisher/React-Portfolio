import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const[dark,setmode]=React.useState(true)
    
    function flip(){
        setmode(prevdark => !prevdark)
    }
    
    return (
        <div className="container">
            <Navbar 
            darkMode={dark}
            handleclick ={flip}
            />
            <Main 
            darkMode={dark}
            />
        </div>
    )
}