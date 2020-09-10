import React, { Component } from 'react'; 

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
        isClicked: true
      })
      console.log(this.state.isClicked);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    )
  }
}

export default TodoApp;