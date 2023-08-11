import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 32px 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const TodoList = styled.ul`
  margin-top: 15px;
  padding: 0 30px;
  width: 100%;
  list-style: none;
  overflow: auto;
`;

export const TodoItem = styled.li`
  display: flex;
  width: 100%;
  min-height: 50px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: black;
  background-color: rgba(255, 255, 255, 0.7);
  overflow: hidden;
`;

export const TodoCheckbox = styled.input`
  flex-shrink: 0;
  width: 18px;
  margin-left: 10px;
  cursor: pointer;
`;

export const TodoText = styled.p`
  ${({ completed }) => completed && `text-decoration: line-through;`}
  margin-left: 10px;
`;

export const TodoDelete = styled.button`
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

export const TodoSubmit = styled.button`
  flex-shrink: 0;
  width: 60px;
  height: 40px;
  margin-left: auto;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: rgba(0, 204, 102, 0.6);
  cursor: pointer;
  position: absolute;
  right: 40px;
`;

export const TodoForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  position: relative;
`;

export const TodoInput = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 15px;
  padding-right: 80px;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  outline: none;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.7);
  }

  &::placeholder {
    color: white;
  }
`;

export const FlexBox = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
`;

export const TodoHeader = styled.div`
  width: 100%;
  padding: 0 30px;
`;

export const TodoTitle = styled.h1`
  text-align: left;
`;

export const TodoDate = styled.div`
  width: 100%;
`;
