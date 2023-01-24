import React, { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tasks from "./components/Overview";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      todo: todo,
    };
    setList([...list, newTodo]);

    setInput("");
  };
  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <button onClick={() => console.log(list)}></button>
      <Tasks tasks={list} />
    </div>
  );
}

// class App extends Component{
//   constructor(){
//     super()
//     tasks =
//   }
//   render(){
//     return(
//       <div className="App">
//         <input />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       tasks: ["Brush", "Shower", "Buy"],
//     };
//   }
//   render() {
//     return (
//       <div>
//         <Tasks allTasks={this.state} />
//         <input></input>
//         <button>Add Task</button>
//       </div>
//     );
//   }
// }

export default App;
