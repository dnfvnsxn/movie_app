# State
- **리액트 컴포넌트 안에 있는 오브젝트**
- 규칙
    - state가 바뀔 떄 마다 컴포넌트는 다시 render
- state를 바꿀때는 setState를 설정
- 예시: App.js
```js
class App extends Component {

    state = {
        greeting: "Hello"
    }

    componentDidMount(){
        setTimeout(() =>{
        this.setState({
            greeting: "Helloagin"
        })
        },2000)
    }

    render() {
        return (
        <div className="App">
            {this.state.greeting}
            {movies.map((movie,index) => {
            return <Movie title = {movie.title} poster = {movie.poster} key={index}/>
            })}
        </div>
        );
    }
}
```
1. Hello 출력
2. componentDidMount에서 2초 뒤 state의 greeting의 값을 Helloagin으로 변경
3. state 값이 변경되어 자동으로 render 작동

## state에 값 추가
- App.js
```js
class App extends Component {
    state = {
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
        
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                movies: [
                    ...this.state.movies,
                    {
                    title: "Trainspotting",
                    poster: "https://images-eu.ssl-images-amazon.com/images/I/51GolvcFJTL._AC_SS350_.jpg"
                    }
                ]
            })
        }
        ,2000)
    }

    render() {
        return (
        <div className="App">
            {this.state.movies.map((movie,index) => {
            return <Movie title = {movie.title} poster = {movie.poster} key={index}/>
            })}
        </div>
        );
    }
}
```
- 컴포넌트가 mount하면, 레이지 로드 후 2초 후 새로운 영화가 페이지 가장 아래에 보임
- `...this.state.movies`: 이전 영화 리스트는 그대로 두고 한개의 영화 추가
    - 삭제하면 영화리스트 전체를 대체, 한개의 영화목록이 됨
- **state를 활용한 효과 예시**
    - infinite scroll
        - 페이지 로딩시 스크롤을 아래로 내릴 수록 더 많은 영화가 로딩되는 효과
        - 페이스북, 인스타그램의 로딩 방식
- 아래와 같이 변경하면 새로 추가되는 영화가 제일 위로 올라옴
```js
this.setState({
    movies: [
        {
        title: "Trainspotting",
        poster: "https://images-eu.ssl-images-amazon.com/images/I/51GolvcFJTL._AC_SS350_.jpg"
        },
        ...this.state.movies
    ]
})
```
## Loading State
- 필요한 데이터가 항상 바로 존재하지는 않을 것
- 데이터 없이 컴포넌트가 로딩을 하고, 데이터를 API로 불러서, API가 데이터를 주면, 컴포넌트의 state를 업데이트 
- API콜을 타임아웃 기능으로 유사하게 구현
- `this.state.movies.map` 에서 처음 render시 this.state.movies가 존재하지 않아 에러가 발생
- loading state가 필요
- App.js
```js
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

    render() {
        return (
        <div className="App">
            {this.state.movies.map((movie,index) => {
            return <Movie title = {movie.title} poster = {movie.poster} key={index}/>
            })}
        </div>
        );
    }
}
```
## loading state
- 영화리스트를 불러오는 function 생성
```js
_renderMovies = () =>{
    const movies = this.state.movies.map((movie,index) => {
        return <Movie title = {movie.title} poster = {movie.poster} key={index}/>
    })
    return movies
}
```
- state에 영화가 없을 떄 마다 로딩을 띄우거나, 영화리스트를 보이도록 함
```js
render() {
    return (
        <div className="App">
            {this.state.movies ? this._renderMovies() : "loading"}
        </div>
    );
}
```
## Stateless Functional Components
- 모든 컴포넌트가 state가 있는 것은 아님
- state가 없는 stateless functional 컴포넌트도 존재
- **Smart vs Dumb Components**
    - Smart Components: state가 존재
    - Dumb Components: state 없음, props만 존재
- state가 없고 props만 존재할 떄는 class component를 사용하는 대신에 functional component를 사용
- 어떤 컴포넌트는 단지 return을 위해 존재 
    - willMount, DidMount, updateState등이 필요 없음
- 아래의 코드를 변경
```js
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

```
- functional component로 변경
```js
function Movie({title,poster}){
    return(
        <div>
            <MoviePoster poster = {poster}/>
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="poster"/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
``