import React,{useState} from 'react'
import useToggle from './useToggle'

 function Toggler() {
     const [isHappy, toggleIsHappy] = useToggle(true)
     const [isHeartbroken, toggleIsHeartbroken] = useToggle(false)
    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? 'SMILE' : 'FROWN'}</h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? 'DOWN' : 'UP'}</h1>
        </div>
    )
}

export default Toggler