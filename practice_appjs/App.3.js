import React, { Component } from 'react';
import './App.css';
import Movie from '../src/movie';

class App extends Component {

  state = { 
  }

  componentDidMount(){
    setTimeout(() =>{
        this.setState({
          movies: [
            {
              title: "Matrix",
              poster: "http://ojsfile.ohmynews.com/down/images/1/ctzxp_249945_1[363282].jpg"
            },
            {
              title: "Full Metal Jacket",
              poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
            },
            {
              title: "Oldboy",
              poster: "https://i.ebayimg.com/images/g/cE4AAOSwdW9Z77tX/s-l300.jpg"
            },
            {
              title: "Star Wars",
              poster: "https://imgc.allpostersimages.com/img/print/u-g-F69FKX0.jpg?w=300&h=450"
            }
          ]
        })
      }
    ,2000)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie,index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading"}
      </div>
    );
  }
}

export default App;


