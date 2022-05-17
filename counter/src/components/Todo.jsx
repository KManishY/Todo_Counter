import React from "react";

import { useState } from "react";
const Todo = () => {
      let value = "";
      const [todos, setTodos] = useState([]);
      return (
            <>
                  <div>
                        Todo
                        <input value={value} onClick={(e) => setTodos()}>
                              1
                        </input>
                  </div>
            </>
      );
};
