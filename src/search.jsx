import React from 'react'
import { useState, useEffect } from "react"

const words = [
    'hello',
    'expansiate',
    'saturate',
    'commensurate',
    'masculine',
    'feminine'
]

export default function Search(){

    const [text, setText] = useState('hey')
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(()=>{
        // This useEffect does all the function of the hot loading n search
        
    }, [text])
    
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Input text:</label>
                <input value={text} onChange={handleChange} type="text" name="text" id="text" />
                <button type="submit">Search</button>
            </form>
            <div className="display">
                Hello Search
            </div>
        </React.Fragment>
    )
}