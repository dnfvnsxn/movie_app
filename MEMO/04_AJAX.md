# AJAX
- Asynchronous JavaScript and XML
- url을 자바스크립트로 Asynchronous(비동기화) 방법으로 불러옴
- JSON(JavaScript Object Notation): 오브젝트를 자바스크립트로 작성하는 기법
- Ajax를 사용하는 이유는 뭔가를 불러올때마다 페이지 새로고침을 하고 싶지 않기 때문
- Ajax를 리액트에 적용하는 방법 - FETCH

# Fetch Request
- http requset
    - get
    - post
- fetch를 이용해 url에서 데이터를 get하는 방법을 사용
- url은 yts.am의 API를 사용
- 리액트와 ajax의 연결
```js
componentDidMount(){
    fetch           ('https://yts.am/api/v2/list_movies.json?sort_by=rating')
}
```
## promise
- 새로운 자바스크립트 컨셉
- Asynchronous programming
- 동기적 프로그래밍은 JavaScript + AJAX 작업시 좋지 않음
- promise는 asynchronous
- promise는 시나리오를 잡는 방법을 만들어줌
    - 좋은 혹은 나쁜 시나리오를 관리
- 예시
```js
componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => console.log(response))
    .catch(err => console.log(err))
}
```
- then 함수
    - 작업이 완료되면 then 함수를 실행
    - 1개의 attribute(fetch의 결과물, 오브젝트)만 줌
- catch 함수
    - 만약 에러 발생시 catch함수는 에러를 잡아냄
- 사용예시
```js
fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))
```
- response로 체크하고, 제이슨으로 변환하고, 콘솔로 확인
- promise는 성공적으로 수행할 수 있고, 그렇지 않을 경우 결과물을 catch, then으로 받아볼 수 있음

## Async Await in React
- then, catch로 이루어진 라인들을 좀더 분명하게 작성해주는 도구
- then, catch로 state에 데이터를 올림
```js
fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => {
        this.setState({
            movies: json.data.movies
        })
    })
    .catch(err => console.log(err))
```
- 어플리케이션이 클경우 then이 이어지면서 call back hell에 빠짐
- 이러한 한계 극복을 위하여 async await를 사용
```js
_getMovies = async() =>{
    const movies = await this._callApi()
    this.setState({
        movies
    })
    }

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
    }
```
- setState는 _callApi 작업이 완료되기 전까지 실행되지 않음