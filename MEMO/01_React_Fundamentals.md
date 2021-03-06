# ReactJS Fundamentals
##React의 특징
1. **JavaScript 기반**이기 때문에 별도의 프레임워크를 배울 필요가 없음
2. **Composition**
    - 리액트 구조는 요소별, 컴포넌트별로 나누어 작업할 수 있음
    - 그룹별로 쪼개서 작업할 수 있음
3. **Unidirectional(단방향) 데이터플로우**
    - 데이터는 항상 일정한 장소에 위치해있고, 그 장소에서만 변경이 가능
    - Angular의 경우 데이터는 view나 model로 변함
    - React는 상태가 변했을 경우, 데이터는 그대로 있고, UI가 업데이느 되는 것
    - 데이터가 UI를 변경시키는 것이, UI는 절대로 데이터를 변경시키지 않음
    - 데이터 -> 데이터 변경 -> UI 변경
4. 방대한 커뮤니티, 거대한 라이브러리, 오픈소스, 질문과 답
5. 프레임워크가 아니라 **UI라이브러리**
    - MVC모델에서 view이기 때문에 파이썬, 루비 등 나머지는 원하는대로 사용이 가능

## 웹 팩
- 트랜스파일러의 일종
- 리액트 코드, 최신 자바스크립트를 브라우저가 이해할 수 있는 자바스크립트로 바꿔주기 위해 사용
- 리액트로 작업하려면 웹팩과 같은 모듈번들러가 필요

## create-react-app
- **웹팩과 같은 툴을 사용할 필요없어 손쉽게 리액트 앱을 만들어주는 툴**
```!
npm isntall -g create-react-app
create-react-app movie-app
```
- configuration을 할 필요가 없음
- 빠르게 개발서버를 생성