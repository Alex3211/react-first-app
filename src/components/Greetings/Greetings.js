import React, { Component } from 'react';
import './Greetings.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Salut"
    };
  }
  render() {
    const { name } = this.props;
    const { message } = this.state;

    return (
      <div className="container">
        <div>
          {name}
        </div>
        <button value="click me" onClick={() => this.setState({ message: "Lusat" })}>{message}</button>
      </div>
    );
  }
}

export default App;