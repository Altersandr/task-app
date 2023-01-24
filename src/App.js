import React, { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Overview from "./components/Overview";

// function App() {
//   const [list, setList] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = (todo) => {
//     const newTodo = {
//       id: uuidv4(),
//       todo: todo,
//     };
//     setList([...list, newTodo]);

//     setInput("");
//   };
//   return (
//     <div>
//       <h1>ToDo List</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={() => addTodo(input)}>Add</button>
//       <Tasks tasks={list} />
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "", id: uuidv4() },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: { text: e.target.value, id: uuidv4() },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: { text: "", id: uuidv4() },
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
