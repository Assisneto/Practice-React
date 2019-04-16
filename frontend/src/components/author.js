import React, { Component } from "react";
import api from "./../services/api";
import CustomInput from "./customInput";
import CustomInputForm from "./customInputForm";

// import { Container } from './styles';

export class AuthorForm extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };
  }
  sendForm = async e => {
    e.preventDefault();
    const data = await api.post("/author", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
    data
      ? this.setState({ list: data.data, name: "", email: "", password: "" })
      : console.log(data);
  };
  setName = e => {
    this.setState({ name: e.target.value });
  };

  setEmail = e => {
    this.setState({ email: e.target.value });
  };

  setPassoword = e => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form
          className="pure-form pure-form-aligned"
          onSubmit={this.sendForm}
          method="post"
        >
          <CustomInput
            id="name"
            type="text"
            name="name"
            label="name"
            value={this.state.name}
            onChange={this.setName}
          />
          <CustomInput
            id="email"
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            onChange={this.setEmail}
          />

          <CustomInput
            id="senha"
            type="password"
            name="senha"
            label="password"
            onChange={this.setPassoword}
            value={this.state.password}
          />
          <CustomInputForm label="Gravar" />
        </form>
      </div>
    );
  }
}

export class AuthorTable extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }
  componentDidMount = async () => {
    const author = await api.get("/author");
    this.setState({ list: author.data });
  };
  render() {
    return (
      <div>
        <table className="pure-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(autor => {
              return (
                <tr key={autor._id}>
                  <td>{autor.name}</td>
                  <td>{autor.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
