import "./App.css";

import Counter from "./components/Counter";
import Todo from "./components/Todo";

import { useState } from "react";

function App() {
      const [toggle, setToggle] = useState(false);
      return (
            <div className="App">
                  <Counter />
                  <Todo />
            </div>
      );
}

export default App;
