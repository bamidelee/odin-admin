import '../styles/header.css'
import { useEffect, useState } from 'react'

export default function Header ({mouseX}) {
    const [mousePos, setMousePos] = useState('')
    const eyeStyle ={
        transform: `translate(${mousePos * 0.01}px, 1rem)`
    }
    useEffect(() =>{
       setMousePos(mouseX)
    }, [mouseX])
    return(
        <div className="header">
            <div className='eyeContainer'>
                <div className="eyeFrame">
                    <div className='eyeLid' style={eyeStyle}></div>
                </div>
                <div className="eyeFrame">
                    <div className='eyeLid' style={eyeStyle}></div>
                </div>
            </div>
            <h1>
            <span>NAIJA</span>ODIN
            </h1>
        </div>
    )
}