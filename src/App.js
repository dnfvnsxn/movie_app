import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

const Movietitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "http://ojsfile.ohmynews.com/down/images/1/ctzxp_249945_1[363282].jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
  "https://i.ebayimg.com/images/g/cE4AAOSwdW9Z77tX/s-l300.jpg",
  "https://imgc.allpostersimages.com/img/print/u-g-F69FKX0.jpg?w=300&h=450"

]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title = {Movietitles[0]} poster = {movieImages[0]}/>
        <Movie title = {Movietitles[1]} poster = {movieImages[1]}/>
        <Movie title = {Movietitles[2]} poster = {movieImages[2]}/>
        <Movie title = {Movietitles[3]} poster = {movieImages[3]}/>
      </div>
    );
  }
}

export default App;
