// import { useState } from "react";
import React, { useState } from "react";
import TodoIn from "./TodoIn"; //? input
import TodoIt from "./TodoIt"; //? items
import TodoLi from "./TodoLi"; //? list
import { v4 as uuidv4, v4 } from "uuid";
import Styles from "./Todo.module.css";

const Todo = () => {
      const [todos, setTodos] = useState([]);

      const addTodoValue = (todo) => {
            setTodos([...todos, { value0: todo, id: v4() }]);
      };

      const deleteTodo = (value) => {
            setTodos(todos.filter((todos) => todos.id != value));
      };

      return (
            <div>
                  <h1 className={Styles.heading}> ADD YOUR TODO LIST</h1>
                  <TodoIn getaddTodo={addTodoValue} />
                  <TodoLi>
                        <ul>
                              {todos.map((el) => {
                                    return (
                                          <TodoIt
                                                key={el.id}
                                                keyValue={el.id}
                                                value={el.value0}
                                                deleteTodo={deleteTodo}
                                          />
                                    );
                              })}
                        </ul>
                  </TodoLi>
            </div>
      );
};

export default Todo;
