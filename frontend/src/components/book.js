import React, { Component } from "react";
import api from "./../services/api";
// import { Container } from './styles';

export default class BooksBox extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }
  componentDidMount = async () => {
    const books = await api.get("/book");
    this.setState({ list: books.data });
  };
  render() {
    return (
      <div id="main">
        <div className="header">
          <h1>Books</h1>
        </div>
        <div className="content" id="content">
          <BooksTable list={this.state.list} />
        </div>
      </div>
    );
  }
}

class BooksTable extends Component {
  render() {
    return (
      <div>
        <table className="pure-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(book => {
              return (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
