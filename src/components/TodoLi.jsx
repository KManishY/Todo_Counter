import React from "react";
import Styles from "./Todo.module.css";
const TodoLi = ({ children }) => {
      return (
            <div>
                  <h2>Your Todo</h2>
                  <div>
                        <ul>{children}</ul>
                  </div>
            </div>
      );
};

export default TodoLi;
