import React, { useState } from "react";
import { IncompleteTodo } from "./components/incompleteTodo";
import { InputTodo } from "./components/inputTodo";
import { CompleteTodo } from "./components/completeTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      onClickAdd();
    }
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        disabled={incompleteTodos.length >= 5}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        onPressEnter={onPressEnter}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          表示できるタスクは5個までです。消化しろ～！
        </p>
      )}
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
