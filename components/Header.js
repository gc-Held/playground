import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.actions.addTodo(text)
    }
  }

handleClear() {
      this.props.actions.clearAll()
  }

  handleContentChange(){
    this.props.actions.changeContent()
  }

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <button onClick={this.handleClear.bind(this)}>Clear All</button>
          <button onClick={this.handleContentChange.bind(this)}>Change All</button>
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Header
