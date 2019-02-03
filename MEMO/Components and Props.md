
# Components and Props
- 리액트는 컴포넌트에 기반하고 있음
- 프로젝트 설계
    - 3개의 컴포넌트
        - 무비리스트
        - 무비카드
        - 무비커버
## JSX
- **리액트로 html을 쓰는 방법**
- **리액트 컴포넌트를 만들때 사용하는 언어**

## App.js 컴포넌트 기본형
- 이 곳에 영화내용, 정보등을 삽입할 것
```js
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
            
            </div>
        );
    }
}
export default App;
```

- 컴포넌트 들은 각기 다른 functions와 methods들을 가지고 있음
- **모든 컴포넌트는 render function를 가지고 있음**
    - render 기능은 뭔가를 보여주는, 출력하는 기능

## react와 reactDom
- 리액트 
    - UI라이브러리
- 리액트Dom(Document Object Model) 
    - 리액트를 웹사이트에 출력(render)하는 걸 도와주는 모델
    - **리액트를 사용해서 웹사이트에 올려놓고 싶을때는 리액트Dom을 사용**
    - 예시
        ```js
        ReactDOM.render(<App />,document.getElementById('root'));
        ```
        - 리액트Dom은 1개의 컴포넌트를 출력(render) 
        - 그 Document안에 ID가 root인 엘리먼트가 존재
        - render하면 모든 컴포넌트들이 index.html에서 출력
- 리액트를 사용해서 모바일앱에 올려놓고 싶을때는 리액트Native을 사용

## 컴포넌트 작성 예시
- movie.js 생성
```js
import React, {Component} from "react"
class Movie extends Component{
    render(){
        return(
            <h1> This is movie</h1>
        )
    }
}
export default Movie
```
- App.js에 Movie컴포넌트 삽입
```js
import React, { Component } from 'react';
import Movie from './movie';

class App extends Component {
    render() {
        return (
        <div className="App">
            <Movie/>
        </div>
        );
    }
}
export default App;
```
- **import React -> Create Component(class) -> render -> return(JSX형식) -> html -> browser**

- Movie 컴포넌트에 이미지(영화정보를) 삽입
  - 큰 컴포넌트안에 작은 컴포넌트를 집어 넣는 방식으로 작업
```js
import React, {Component} from "react"
import "./movie.css"

class Movie extends Component{
    render(){
        return(
            <div>
            <MoviePoater/>
            <h1> This is movie</h1>
            </div>
        )
    }
}

class MoviePoater extends Component{
    render(){
        return(
            <img src="http://image.cine21.com/resize/cine21/poster/2015/1124/18_18_34__56542b6a6febf[X230,330].jpg"/>
        )
    }
}
export default Movie
```

## 리액트 주요 컨셉
1. props
2. state

## Dataflow with Props
- 데이터는 어디선가 와야하며 소스가 있어야 함
- 메인 컴포넌트 App은 모든 영화들을 가져올 것
    - 그 영화들은 카드형태로 보여질 것
    - 메인컴포넌트는 무비 리스트가 있다는 뜻
    - 무비리스트 안에 영화카드에는 각각 해당 영화의 정보가 담김
- **즉, 부모 컴포넌트는 자식 컴포넌트에게 각각 정보를 줌**
- **부모가 자식에게 props를 통해서 정보를 줌**

## Props 활용 예시
- 부모 컴포넌트인 App.js에는 movieTitles, movieImages 데이터가 존재
- **메인 컴포넌트가 데이터를 모두 가지고 있으며 각 컴퍼넌트는 props를 이용해 전달받은 정보를 출력**
- 이 데이터를 자식 컴포넌트인 Movie에게 title과 poster요소로 넘겨줌
```js

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
```
- Movie 컴포넌트는 각 데이터를 this.props.title과 this.props.poster란 이름으로 엑세스
- Movie 컴포넌트는 poster데이터를 다시 MoviePoater컴포넌트에게 넘겨줌
- MoviePoater컴포넌트는 poster데이터에 this.props.poster란 이름으로 엑세스하여 출력
```js
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
```
- ```<h1>{this.props.title}</h1>``` <- JSX의 경우 실행시키려면 {}가 필요