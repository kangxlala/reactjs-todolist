import React from 'react'

class EditTaskForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inputText: this.props.task.taskName,
    }
  }

  onInputChange = ({ target: { value } }) => {
    this.setState({ inputText: value })
  }

  onEditTaskName = () => {
    this.props.editTaskName(this.props.task.taskId, this.state.inputText)
    this.setState({ inputText: '' })
  }

  render() {
    return (
      <span>
        <input type="text" value={this.state.inputText} onChange={this.onInputChange} />
        <button onClick={this.onEditTaskName}>Save</button>
      </span>
    )
  }
}

export default EditTaskForm
