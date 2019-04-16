import React, { Component } from "react";

// import { Container } from './styles';
export default class CustomInput extends Component {
  render() {
    return (
      <div className="pure-control-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id}
          type={this.props.type}
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
