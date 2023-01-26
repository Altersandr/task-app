import React, { Component } from "react";
import DeleteTask from "./DeleteBtn";
// class Tasks extends Component {
//   constructor(props) {
//     super(props);
//     this.TaskList = this.TaskList.bind(this);
//   }

//   TaskList() {
//     const tasks = this.props.tasks.map((task) => (
//       <li key={task.id}>{task.todo}</li>
//     ));
//     return <ul>{tasks}</ul>;
//   }

//   render() {
//     return (
//       <div>
//         <this.TaskList />
//       </div>
//     );
//   }
// }

// export default Tasks;

const Overview = (props) => {
  const { tasks } = props;
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <DeleteTask id={task.id} del={props.del} />
        </li>
      ))}
    </ul>
  );
};

export default Overview;
