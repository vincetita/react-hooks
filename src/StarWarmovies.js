import React,{ useEffect, useState } from "react";
import axios from 'axios'


export default function StarWarmovies() {
    const [number, setNumber] = useState(1)
    const [movie, setMovie] = useState('')

    useEffect(() => {
        async function getData(){
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`)
            setMovie(response.data)
           // console.log(response.data.title)
        }
        getData()
    }, [number])

    return (
        <div>
            <h1>Pick a movie</h1>
            <h4>{movie.title}</h4>
            <select value={number} onChange ={e =>setNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </select>
        </div>
    )
}
