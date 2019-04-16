import React, { Component } from "react";
import api from "./services/api";
import "./css/pure-min.css";
import "./css/side-menu.css";

class App extends Component {
  constructor() {
    super();
    this.state = { list: [], name: "", email: "", password: "" };
  }
  componentDidMount = async () => {
    const author = await api.get("/author");
    this.setState({ list: author.data });
  };
  sendForm = async e => {
    e.preventDefault();
    await api.post("/author", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });
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
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span />
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">
              Company
            </a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Home
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Autor
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Livro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form
                className="pure-form pure-form-aligned"
                onSubmit={this.sendForm}
                method="post"
              >
                <div className="pure-control-group">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    onChange={this.setName}
                    value={this.state.name}
                  />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={this.setEmail}
                    value={this.state.email}
                  />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="senha">Senha</label>
                  <input
                    id="senha"
                    type="password"
                    name="senha"
                    onChange={this.setPassoword}
                    value={this.state.password}
                  />
                </div>
                <div className="pure-control-group">
                  <label />
                  <button
                    type="submit"
                    className="pure-button pure-button-primary"
                  >
                    Gravar
                  </button>
                </div>
              </form>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
