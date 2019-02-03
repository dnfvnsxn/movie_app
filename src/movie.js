import React, {Component} from "react";
import PropTypes from "prop-types";
import "./movie.css";
  
class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
            <MoviePoater poster = {this.props.poster}/>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoater extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster} alt="poster"/>
        )
    }
}

export default Movie