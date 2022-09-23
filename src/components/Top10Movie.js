import { getTime } from "date-fns"
import React from "react"
import { useState } from "react"
import Movie from "./Movie"

export default function Top10Movies(props) {
    let [ movies, setMovies ] = useState(props.movies)
    let [ active, setActive ] = useState('rating')

    const search = (e) => {
        let term = e.target.value.toLowerCase()
        
        setMovies(props.movies.filter( m => m.title && m.plot.toLowerCase().indexOf(term) !== -1))
    }

    const sortByRating = (e) => {
        let sortedMovies = movies.sort((a, b) => b.rating - a.rating)
        setActive('rating')
        setMovies([...sortedMovies])
    }

    const sortByTitle = (e) => {
        let sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title))
        setActive('title')
        setMovies([...sortedMovies])
    }
    
    const sortByYear = (e) => {
        let sortedMovies = movies.sort((a, b) => a.year - b.year)
        setActive('year')
        setMovies([...sortedMovies])
    }

    const sortByReleaseDate = (e) => {
        let sortedMovies = movies.sort((a, b) => b.releaseDate.getTime() - a.releaseDate.getTime())
        setActive('releaseDate')
        setMovies([...sortedMovies])
    }

    return (
        <>
            <div className="d-flex justify-content-between">
                <div><input type="seach" className="form-control" placeholder="Search" onChange={search}/></div>
                <div>
                    <strong>Sort by:</strong>
                    <div className="btn-group">
                        <button className={`btn btn-primary ${active === 'rating' ? 'active' : ''}`} onClick={ sortByRating}>Rating</button>
                        <button className={`btn btn-primary ${active === 'title' ? 'active' : ''}`} onClick={ sortByTitle }>Title</button>
                        <button className={`btn btn-primary ${active === 'year' ? 'active' : ''}`} onClick={ sortByYear }>Year</button>
                        <button className={`btn btn-primary ${active === 'releaseDate' ? 'active' : ''}`} onClick={ sortByReleaseDate }>Release Date</button>
                    </div>
                </div>
            </div>
            <div className="row mt-3 row-cols-3 g-3">
                {
                    movies.map(m => <Movie key={m.id} movie={m} />)
                }
            </div>
        </>
    )
}