## 📝과제 - 리액트 리덕스 예제 실습

> 1. 수업 시간에 공부한 리덕스 예제(App02.js)를 실습합니다.
> 2. 실습한 내용을 블로그에 정리 및 게시합니다.
> 3. 리덕스란 무엇인가, 그리고 리덕스의 구성 요소에 대한 정리를 포함해서 정리해주세요.

### 리덕스(Redux)란

>  [Redux - 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너!](https://ko.redux.js.org/)

리덕스는 자바스크립트 애플리케이션을 위한 상태 관리 라이브러리이다. 전역 상태를 관리할 수 있도록 도우면서 리덕스에서 제공하는 패턴과 도구를 사용하면 상태가 언제, 어디서, 왜, 어떻게 업데이트 되는지 동작을 쉽게 이해할 수 있게 한다. 또 애플리케이션이 예상대로 작동할지 예측 가능하게 만들어 준다.

### 리덕스의 3가지 원칙

#### 1. 진실은 하나의 근원으로부터

애플리케이션의 모든 상태는 하나의 **저장소(Store)** 안에 하나의 객체 트리 구조로 저장된다.

#### 2. 상태는 읽기 전용이다.

상태를 변화시키는 유일한 방법은 무슨 일이 벌어지는 지를 묘사하는 **액션(Action)** 객체를 전달하는 방법뿐이다.

#### 3. 변화는 순수 함수로 작성되어야 한다.

액션에 의해 상태 트리가 어떻게 변화하는 지를 지정하기 위해 프로그래머는 순수 **리듀서(Reducer)**를 작성해야한다.

### Store, Action, Reducer

#### Store

스토어는 애플리케이션의 상태 트리를 가지고 있는 객체이다. 리덕스 애플리케이션에는 단 하나의 저장소만 있어야 한다.

#### Action

액션은 상태를 변화시키려는 의도를 표현한 객체이다. 저장소에 데이터를 넣는 유일한 방법이며 모든 데이터는 액션으로써 보내진다. 액션이 어떻게 행해질지 `type`을 지정해야한다.

#### Reducer

리듀서는 상태와 액션을 받아 새로운 상태를 반환하는 함수이다. 주어진 이전 상태와 액션에서 새로운 상태를 계산한다. 반드시 같은 입력이 있으면 같은 출력을 반환하는 순수 함수여야한다.

### 리액트로 시작하기

React와 Redux로 새 애플리케이션을 만들 때 공식 Redux 템플릿을 사용할 수 있다.

```
npx create-react-app my-app --template redux
```

혹은 이미 생성된 리액트 애플리케이션에서 Redux 라이브러리와 react-redux 라이브러리를 npm에서 패키지로 받아올 수 있다.

```
npm install redux react-redux
```

### 예제

```jsx
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// 초기 상태를 설정한다.
const initialState = {
  isSignIn: false,
};

// state와 action을 파라미터로 받는 리듀서 함수를 만든다.
const reducer = (state = initialState, action) => {
    // state의 초깃값을 initialState로 설정한다.
  switch (action.type) {
    case "SignIn":
      return { ...state, isSignIn: true, username: action.username };
    default:
      return state;
  }
};

// createStore로 store를 생성한다.
const store = createStore(reducer);

const Form = () => {
    // useDispatch로 dispatch를 가져온다.
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SignIn", username: e.target.username.value });
      // "SignIn" action을 reducer로 전달해준다.
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input name="username" placeholder="사용자 이름을 입력하세요" />
      <button type="submit">Sign In</button>
    </form>
  );
};

const Service = () => {
    // store의 state에 접근한다. state에서 username을 가져온다.
  const username = useSelector((state) => state.username);
  console.log(username);

  return (
    <>
      {username ? (
        <p>{username}님 환영합니다.</p>
      ) : (
        <p>로그인 후 이용하실 수 있습니다.</p>
      )}
    </>
  );
};

const App = () => {
  return (
    <div>
      <h1>리덕스 예제</h1>
      <div>
        <Provider store={store}>
          <Form />
          <Service />
        </Provider>
      </div>
    </div>
  );
};

export default App;

```



