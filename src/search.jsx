import React, { useState, useEffect, useRef } from 'react'

const words = [
    'hello',
    'expansiate',
    'saturate',
    'commensurate',
    'masculine',
    'feminine'
]

export default function Search(){

    const [text, setText] = useState('')
    const display = useRef(null)
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const Find = (e) => {
        e = new RegExp(e)
        return words.filter((x)=>x.match(e))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(()=>{
        // This useEffect does all the function of the hot loading n search
        display.current.innerHTML = Find(text)
    }, [text])
    
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Input text:</label>
                <input value={text} placeholder='Start typing' onChange={handleChange} type="text" name="text" id="text" />
                <button type="submit">Search</button>
            </form>
            <div className="display" ref={display} style={{margin: 20+'px'}}>
                Hello Search
            </div>
        </React.Fragment>
    )
}