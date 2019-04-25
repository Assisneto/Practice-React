import React, { Component } from "react";
import api from "./../services/api";
import CustomInput from "./customInput";
import CustomInputForm from "./customInputForm";

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
          <BooksForm />
          <BooksTable list={this.state.list} />
        </div>
      </div>
    );
  }
}
class BooksForm extends Component {
  constructor() {
    super();
    this.state = { title: "", price: "", author: "" };
  }
  sendForm = async e => {
    e.preventDefault();
    const data = await api.post("/book", {
      title: this.state.title,
      price: this.state.price,
      author: this.state.author
    });
    this.setState({ list: data.data, title: "", price: "", author: "" });
    // data ? PubSub.publish("newList", data.data) : console.log(data);
  };
  setTitle = e => {
    this.setState({ title: e.target.value });
  };

  setPrice = e => {
    this.setState({ price: e.target.value });
  };

  setAuthor = e => {
    this.setState({ author: e.target.value });
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
            id="title"
            type="text"
            name="title"
            label="title"
            value={this.state.title}
            onChange={this.setTitle}
          />
          <CustomInput
            id="price"
            type="number"
            name="price"
            label="price"
            value={this.state.price}
            onChange={this.setPrice}
          />

          <CustomInput
            id="author"
            type="text"
            name="author"
            label="author"
            onChange={this.setAuthor}
            value={this.state.author}
          />
          <CustomInputForm label="Gravar" />
        </form>
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
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(book => {
              return (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.price}</td>
                  <td>{book.Author.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
