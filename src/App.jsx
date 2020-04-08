import React from 'react'
import { v4 } from 'uuid'

import AddTaskForm from './AddTaskForm'
import EditTaskForm from './EditTaskForm'

class App extends React.Component {
  state = {
    tasks: [],
  }

  addTask = (taskName) => {
    this.setState({
      tasks: [...this.state.tasks, { taskId: v4(), taskName, done: false, isEditing: false }],
    })
  }

  onToggleEdit = (taskId) => {
    const [taskFound] = this.state.tasks.filter((t) => t.taskId === taskId)

    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks.filter((t) => t.taskId !== taskId),
        { ...taskFound, isEditing: !taskFound.isEditing },
      ],
    }))
  }

  editTaskName = (taskId, newTaskName) => {
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks.filter((t) => t.taskId !== taskId),
        {
          ...prevState.tasks.filter((t) => t.taskId === taskId)[0],
          taskName: newTaskName,
          isEditing: false,
        },
      ],
    }))
  }

  onChangeTaskStatus = (taskId) => {
    const [taskFound] = this.state.tasks.filter((t) => t.taskId === taskId)

    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks.filter((t) => t.taskId !== taskId),
        { ...taskFound, done: !taskFound.done },
      ],
    }))
  }

  removeTask = (taskId) => {
    this.setState((prevState) => ({ tasks: prevState.tasks.filter((t) => t.taskId !== taskId) }))
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div>
        <p>Tasks</p>
        <AddTaskForm addTask={this.addTask} />
        <div>
          {this.state.tasks.map((t) => (
            <div key={t.taskId}>
              <button onClick={() => this.removeTask(t.taskId)}> - </button>
              <button onClick={() => this.onChangeTaskStatus(t.taskId)}>
                {t.done ? 'o' : 'x'}
              </button>
              <button onClick={() => this.onToggleEdit(t.taskId)}>Edit</button>
              {t.isEditing ? (
                <EditTaskForm task={t} editTaskName={this.editTaskName} />
              ) : (
                <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
                  {t.taskName}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
