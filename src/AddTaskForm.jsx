import React from 'react'

class AddTaskForm extends React.PureComponent {
  state = {
    inputText: '',
  }

  onInputChange = ({ target: { value } }) => {
    this.setState({ inputText: value })
  }

  onAddTask = () => {
    this.props.addTask(this.state.inputText)
    this.setState({ inputText: '' })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={this.onInputChange} />
        <button onClick={this.onAddTask}>Add</button>
      </div>
    )
  }
}

export default AddTaskForm
