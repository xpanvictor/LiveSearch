import React, { useState, useEffect, useRef } from 'react'

const words = [
    'hello',
    'expansiate',
    'saturate',
    'commensurate',
    'masculine',
    'feminine'
]

// Setting up the reader object
var reader = new FileReader();

export default function Search(){

    const [text, setText] = useState('')
    const display = useRef(null)
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const Find = async(e) => {
        // e = new RegExp(e)
        // return words.filter((x)=>x.match(e))
        await fetch(`https://api.wordreference.com/2012/autocomplete/autocomplete.aspx?dict=enes&query=${e}`)
        .then(res => res.text())
        .then(data => {
            sank(data)
            return data
        })
        .catch(e => console.log(e))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(()=>{
        // This useEffect does all the function of the hot loading n search
        Find(text)
    }, [text])

    const sank = (data) => {
        // let li = data.map((e, i) => <li key={i}>{e}</li>)
        let lines = data.split('\n', 3)
        let dataToArray = []
        let i = 0
        while(i < 10){
            dataToArray.push(lines[i])
        }
        console.log(dataToArray)
        display.current.innerHTML = data[0]
    }
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Input text:</label>
                <input value={text} placeholder='Start typing' onChange={handleChange} type="text" name="text" id="text" />
                <button className='btn' type="submit">Search</button>
            </form>
            <div className="display container m-4 bg-secondary" ref={display}>
                Hello Search
            </div>
            <div className="home">
                <div className="card text-center">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
        </div>
    )
}