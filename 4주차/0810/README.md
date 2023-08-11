## 📝과제 - 리액트 할일 목록 만들기 프로젝트

> 1. 수업 시간에 공부한 리액트 할일 목록 프로젝트를 실습한다. (4일차 예제 App.js, styledComponents.js 참고하세요)
> 2. 네트리파이 서비스를 이용해 할일 목록 프로젝트를 배포한다.
> 3. 실습한 내용을 블로그에 정리 및 게시한다. 이때 게시 내용에는 상태 관리 세부 절차(CRUD), 로컬 스토리지 활용방법, 스타일 정의 방법, 배보 링크 등을 포함해야 한다.

### 프로젝트 생성하기

CRA를 이용해 todo-app 이름을 가진 리액트 프로젝트를 생성했다.

```
npx create-react-app todo-app
```

css-in-js를 사용하기 위해 styled-components를 설치했다.

```
npm i styled-components
```

css 다루는데 기본으로 설정된 스타일을 없애기 위해 index.css파일을 수정했다. 또한 폰트가 전체적인 디자인에 큰 영향을 주기 때문에 구글 폰트에서 Noto Sans 폰트를 추가하고 웹 사이트 전체에 폰트를 적용했다. 그리고 밋밋한 흰 배경 대신 백그라운드 이미지를 추가하였다. 이미지의 경로는 public 폴더 내 images폴더에 넣어두었다.

```css
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

* {
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
  margin: 0;
}

body {
  font-family: "Noto Sans KR", sans-serif;
  background-image: url("../public/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
ol {
  list-style-type: none;
}
```

### Todo Component

src 폴더에서 components 폴더를 만든 후 `Todo.js` 파일을 생성했다. 파일을 열어 `Todo` 컴포넌트를 만들었고 `App.js`에 import 해주었다.

![폴더](https://github.com/origin1508/nipa-ict-web/assets/108377283/af09fb83-ae76-489f-a08e-fec32b918515)

```jsx
import Todo from "./components/Todo";

const App = () => {
  return (
    <>
      <Todo />
    </>
  );
};

export default App;
```

사용자로부터 할일 목록을 입력 받을 form을 작성했다. input 요소를 통해 text를 입력 받고 submit 버튼을 눌렀을 때 submit 이벤트가 일어나도록 하였다.

```jsx
const Todo = () => {
    return (
        <>
        	<form onSubmit={handleSubmit}>
                <input type="text" placeholder="할일 입력" name="todo" />
                <button type="submit">추가</button>
        	<form>
    	</>
    )
}

export default Todo
```

이 때 할일 목록이 CRUD가 가능하도록 상태를 관리하기 위해 react hook인 `useState`를 사용했다. 할일 목록은 여러 개로 저장될 수 있도록 배열로 초기값을 가지도록 했다.

```jsx
const [todo, setTodo] = useState([]);
```

todo의 각 요소는 객체로 관리해서 수정하거나, 삭제할 때 이용할 todoId 값과 완료된 상태를 나타낼 todoDone 값을 저장하였다.

```jsx
[
  ...todo,
  {
    todoId: 0,
    todoText: 할일,
    todoDone: false,
  },
];
```

그리고 입력 받은 데이터를 `handleSubmit` 함수를 이용해 값을 저장했다.

이벤트 객체를 인자로 받아 form의 기본 동작을 막는 `preventDefault`메소드를 호출했다. 그리고 `e.target.todo.value`로 입력받은 데이터를 `todoText` 변수에 저장하고 `trim`메소드를 이용해 문자열 양 끝의 공백을 제거했다. 그리고 만약 입력 받은 값이 없다면 저장되지 않도록 조건문을 통해 return 시켰다. `todoId`는 상태로 관리해서 할일 목록이 추가 될 때마다 1 씩 값이 증가하도록 했다.

```jsx
const [todo, setTodo] = useState([])
const [todoId, setTodoId] = useState(0)

const handleSubmit = (e) => {
    e.preventDefault()
    const todoText = e.target.todo.value.trim()
    if(!todoText) return;

    setTodo((prev) => [...prev, {todoId: todoId, todoText: todoText, todoDone: false}])
    }
    e.target.todo.value = "";
	setTodoId((prev) => prev + 1)
}
```

이제 저장된 할일 목록을 화면에 뿌려주기 위해 `todo` 와 `map`메소드를 이용해 Component 배열 객체를 생성했다.

`map`메소드 콜백 함수에서 item을 인자로 `todoId`, `todoText`, `todoDone` 을 구조 분해 할당으로 가져왔다. React에서는 key값을 가지고 어떤 항목을 변경하거나 삭제할 지 식별하기 때문에 꼭 지정해줘야 한다. 고유한 값으로 주어야 식별 가능하기 때문에 `todoId`를 key로 사용하였다.

`todoDone`을 토글할 checkbox와 `todoText`를 보여줄 `<p>`요소 그리고 삭제를 위한 삭제 버튼을 만들었다. checkbox에는 defaultChecked 속성 값에 `todoDone`을 전달해 기본 값을 지정해주었고 onClick 이벤트에는 `handleToggle` 함수를 전달하였다. 삭제 버튼에는 onClick 이벤트에 `handleDelete` 함수를 전달했다.

```jsx
<ul>
  {todo.map((item) => {
    const { todoId, todoText, todoDone } = item;
    return (
      <li key={todoId}>
        <input
          type="checkbox"
          defaultChecked={todoDone}
          onClick={() => handleToggle(todoId)}
        />
        <p completed={todoDone}>{todoText}</p>
        <button type="button" onClick={() => handleDelete(todoId)}>
          삭제
        </button>
      </li>
    );
  })}
</ul>
```

`handleToggle` 함수는 할일이 완료되었는지 변경하는 이벤트 핸들러이다. `todoId`를 인자로 받아와 `map` 메소드를 사용해서 `todoId` 값이 같다면 spread 연산자를 사용해 `todoDone`값을 변경하고 다르다면 변경 없이 반환하게 했다.

`handleDelete` 함수는 할일을 제거하는 이벤트 핸들러이다. `todoId`를 인자로 받아와 `filter` 메소드를 사용해 전달받은 `todoId`와 값이 다른 할일들만 반환하도록 했다.

```jsx
const handleToggle = (todoId) => {
  setTodo((prev) => {
    return prev.map((item) =>
      item.todoId === todoId ? { ...item, todoDone: !item.todoDone } : item
    );
  });
};

const handleDelete = (todoId) => {
  setTodo((prev) => {
    return prev.filter((item) => item.todoId !== todoId);
  });
};
```

### 스타일 적용

styled-components를 이용해 스타일을 적용하였다. `Todo.style.js` 파일을 생성해서 따로 모듈형태로 관리해 유지 보수와 재사용이 편하게 만들었다. 작성된 파일을 `Todo.js`에 import 하였다.

```jsx
// Todo.js
import { useState, useEffect } from "react";
import {
  TodoContainer,
  TodoHeader,
  TodoTitle,
  TodoDate,
  TodoList,
  TodoForm,
  TodoInput,
  TodoSubmitBnt,
  FlexBox,
  TodoItem,
  TodoCheckbox,
  TodoText,
  TodoDeleteBnt,
} from "./Todo.style";
```

컴포넌트 명은 요소를 특정하기 쉽게 이름을 지었다. styled-components에서는 `&`를 사용해 자기 자신을 참조 할 수 있는데 이를 사용해 가상 선택자를 붙여 hover시 특정 스타일이 적용될 수 있도록 하였다.

```jsx
export const TodoDeleteBnt = styled.button`
  flex-shrink: 0;
  width: 60px;
  margin-left: auto;
  border: none;
  color: white;
  font-weight: 700;
  background-color: rgba(255, 51, 51, 0.6);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 51, 51, 0.9);
  }
`;
```

`TodoText` 컴포넌트에서는 `props`로 `completed`라는 불리언 값을 받아 할일이 완료 되었으면 취소선이 그어지도록 했다.

```jsx
export const TodoText = styled.p`
  ${({ completed }) => completed && `text-decoration: line-through;`}
  margin-left: 10px;
  word-break: break-all;
  word-wrap: break-word;
`;
```

`FlexBox`를 만들어서 사용했는데 `flex-shrink: 1`과 `flex-grow: 1` 속성을 주었다. `flex-container` 요소 내부에서 `flex-item`이 늘어나거나 축소되도록 하는 속성인데 `TodoList` 와 `TodoForm` 사이에 위치해서 할일 목록이 늘어나거 줄어들 때에도 `TodoForm` 이 하단에 있도록 만들었다.

```jsx
export const FlexBox = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
`;
```

![result](https://github.com/origin1508/nipa-ict-web/assets/108377283/ca939d89-013c-4fa8-8d13-1651a3fc21ae)

### localStorage

`useState`로 관리되는 상태는 브라우저가 새로고침되거나 꺼지게 되면 사라지게 된다. 상태를 유지하고 싶다면 web API인 localStorage를 이용하면 된다.

`todo`의 상태가 변화될 때 마다 localStorage에 저장하기 위해 `useEffect`를 사용하였다. `setItem`메소드를 이용하면 키 값과 저장될 값을 전달해서 localStorage에 저장할 수 있다. 이때 localStorage에는 문자열로 값이 저장되기 때문에 객체를 저장하기 위해서는 `JSON.stringify()`를 사용해서 문자열로 변경해야한다.

```jsx
useEffect(() => {
  localStorage.setItem("todo", JSON.stringify(todo));
}, [todo]);
```

todo-app에 접속했을 때 localStorage에 데이터가 있다면 이를 불러와 `todo` 에 저장하여야 한다. 이것도 마찬가지로 `useEffect`를 사용해서 구현하였다. `getItem` 메소드를 사용하면 키값을 전달하여 해당 값을 불러올 수 있다. 문자열로 이루어진 값을 불러와서 `JSON.parse()`를 사용해 다시 객체로 만들어 준다. 만약 값이 없다면 return으로 끝내주고 `defaultTodo`가 1개 이상 존재한다면 `todoId` 가 중복되지 않도록 `defaultTodo`에 마지막 요소의 `todoId`에 +1 한 값을 `todoId`에 저장해준다. 마지막으로 `setTodo`에 `defaultTodo`를 전달해 상태를 변경해준다.

```jsx
useEffect(() => {
  const defaultTodo = JSON.parse(localStorage.getItem("todo"));

  if (!defaultTodo) return;

  if (defaultTodo.length !== 0) {
    setTodoId(defaultTodo[defaultTodo.length - 1].todoId + 1);
  }
  setTodo(defaultTodo);
}, []);
```

### netlify로 배포하기

저번 과제실습으로 배포한 것 처럼 netlify로 배포했다. `npm run build` 명령어로 빌드 파일을 생성해서 netlify에 업로드하였다.

Site configuration 메뉴로 들어가 사이트의 이름을 변경했다. todo-app에 버그가 있어 수정했거나 기능을 추가하였다면 다시 빌드 파일을 생성해서 Deploy 메뉴에 접속해 업로드해주면 재배포가 가능하다.

### 배포 주소

[Todo List (todo-biglight.netlify.app)](https://todo-biglight.netlify.app/)

### 추가되면 좋을 기능들

기능을 추가한다면 작성한 할일을 수정하는 기능과 또 할일이 몇개 남았는지 표시가 되었으면 좋을 것 같다.
