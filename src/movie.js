import React, {Component} from "react"
import "./movie.css"

class Movie extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
            <MoviePoater poster = {this.props.poster}/>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoater extends Component{
    render(){
        return(
            <img src={this.props.poster} alt="poster"/>
        )
    }
}

export default Movie