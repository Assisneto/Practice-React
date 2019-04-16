import React, { Component } from "react";

// import { Container } from './styles';

export default class InputForm extends Component {
  render() {
    return (
      <div className="pure-control-group">
        <label />
        <button type="submit" className="pure-button pure-button-primary">
          {this.props.label}
        </button>
      </div>
    );
  }
}
