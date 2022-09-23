import React from "react";

function MovieRating({rating}) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <span>
            {
                arr.map(r => (
                    r <= rating ? <span key={r} style={{color: "red"}}>*</span> : <span key={r}>*</span>
                ))
            }
        </span>
    )
}

function MovieAttribute({movie}) {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <strong>Rated: </strong>
                <span>{movie.rated}</span>
            </li>
            <li className="list-group-item">
                <strong>Genre: </strong>
                <span>{movie.genre}</span>
            </li>
            <li className="list-group-item">
                <strong>Rating: </strong>
                <MovieRating rating={movie.rating} />
            </li>
        </ul>
    )
}

export default class Movie extends React.Component {
    render() {
        return (
            <div className="col">
                <div className="card">
                    <img src={this.props.movie.poster} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.movie.title}</h5>
                        <p className="card-text">{this.props.movie.plot}</p>
                    </div>
                    <MovieAttribute {...this.props}/>
                </div>
            </div>
        )
    }
}