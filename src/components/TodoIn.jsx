import React, { useState } from "react";
import Styles from "./Todo.module.css";
const TodoIn = ({ getaddTodo }) => {
      const [value, setValue] = useState("");
      return (
            <div>
                  <input
                        className={Styles.input0}
                        value={value}
                        type="text"
                        placeholder="Enter to add into list...."
                        onChange={(e) => {
                              setValue(e.target.value);
                        }}
                  />
                  <button
                        className={Styles.buttonAdd}
                        disabled={!value}
                        onClick={() => {
                              getaddTodo(value);
                              setValue("");
                        }}
                  >
                        ADD
                  </button>
            </div>
      );
};

export default TodoIn;
