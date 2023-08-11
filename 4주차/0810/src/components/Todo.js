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

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [todoId, setTodoId] = useState(0);

  useEffect(() => {
    const defaultTodo = JSON.parse(localStorage.getItem("todo"));

    if (!defaultTodo) return;

    if (defaultTodo.length !== 0) {
      setTodoId(defaultTodo[defaultTodo.length - 1].todoId + 1);
    }
    setTodo(defaultTodo);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.todo.value.trim();
    if (!todoText) return;

    setTodo((prev) => [
      ...prev,
      { todoId: todoId, todoText: todoText, todoDone: false },
    ]);
    e.target.todo.value = "";

    setTodoId((prev) => prev + 1);
  };

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

  const getDate = () => {
    const now = new Date();
    const weekOfDay = ["일", "월", "화", "수", "목", "금", "토"];

    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = weekOfDay[now.getDay()];

    return `${month}월 ${date}일 ${day}요일`;
  };

  return (
    <TodoContainer>
      <TodoHeader>
        <TodoTitle>할일 목록</TodoTitle>
        <TodoDate>{getDate()}</TodoDate>
      </TodoHeader>
      <TodoList>
        {todo.map((item) => {
          const { todoId, todoText, todoDone } = item;
          return (
            <TodoItem key={todoId}>
              <TodoCheckbox
                type="checkbox"
                defaultChecked={todoDone}
                onClick={() => handleToggle(todoId)}
              />
              <TodoText completed={todoDone}>{todoText}</TodoText>
              <TodoDeleteBnt type="button" onClick={() => handleDelete(todoId)}>
                삭제
              </TodoDeleteBnt>
            </TodoItem>
          );
        })}
      </TodoList>
      <FlexBox />
      <TodoForm onSubmit={handleSubmit}>
        <TodoInput type="text" placeholder="할일 입력" name="todo" />
        <TodoSubmitBnt type="submit">추가</TodoSubmitBnt>
      </TodoForm>
    </TodoContainer>
  );
};

export default Todo;
