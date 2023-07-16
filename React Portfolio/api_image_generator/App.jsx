import React from "react"
import Header from "../components/header"
import Ima from "../components/images"
import {nanoid} from "nanoid"

/**
 * React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
 */

export default function App() {
  const[allimages,setallimages] = React.useState([])
  const[image,setimage] = React.useState([])
  
  React.useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
       .then(res=>res.json())
       .then(data => setallimages(data.data.memes))
  }, [])
  
  function addimage(){
      const imagearray = allimages
      const random = Math.floor(Math.random()*allimages.length)
      const nname = allimages[random].name
      const nurl = allimages[random].url
      const newimage = {
            id: nanoid(),
            name: nname,
            randomImage: nurl
        }
        setimage(previmage => [newimage, ...previmage])
  }
  
  
    
  return (
    <div>
    <Header/>
    <button className = "imageadd" onClick={addimage}>Add image</button>
    <div className = "imageholder">
    {image.map(im => <Ima key={im.id} url = {im.randomImage} name={im.name}/>)}
    </div>
    </div>
  )
}