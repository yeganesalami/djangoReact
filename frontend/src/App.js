import React, { Component } from 'react';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        setting up {this.props.name}
      </div>
    );
  }
}
export default class App extends Component {
    render() {
        return (
            <HelloMessage name="django with reactjs" />
        )
    }
}
