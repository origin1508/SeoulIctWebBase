import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = {
  isSignIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SignIn":
      return { ...state, isSignIn: true, username: action.username };
    default:
      return state;
  }
};

const store = createStore(reducer);

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SignIn", username: e.target.username.value });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input name="username" placeholder="사용자 이름을 입력하세요" />
      <button type="submit">Sign In</button>
    </form>
  );
};

const Service = () => {
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
