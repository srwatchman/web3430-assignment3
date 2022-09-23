import React from "react"
import Movie from "./Movie"

export default function Top10Movies(props) {
    let movies = props.movies
    return (
        <div className="row mt-3 row-cols-3 g-3">
            {
                movies.map(m => <Movie key={ m.id } movie={ m }/>)
            }
        </div>
    )
}