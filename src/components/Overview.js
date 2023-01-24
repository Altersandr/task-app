import React, { Component } from "react";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.TaskList = this.TaskList.bind(this);
  }

  TaskList() {
    const tasks = this.props.tasks.map((task) => (
      <li key={task.id}>{task.todo}</li>
    ));
    return <ul>{tasks}</ul>;
  }

  render() {
    return (
      <div>
        <this.TaskList />
      </div>
    );
  }
}

export default Tasks;
