import React, { Component } from "react";
import "./formulario.css";

export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";
    this.categoria = "Sem categoria";
  }

  _handleTitle(event) {
    this.title = event.target.value;
  }

  _handleText(event) {
    this.text = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.text, this.categoria);
  }

  _handleCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._createNote.bind(this)}>
        <select onChange={this._handleCategoria.bind(this)}>
          <option>Sem categoria</option>
          {this.props.categorias.map((categoria) => {
            return <option>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          onChange={this._handleTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          onChange={this._handleText.bind(this)}
        />
        <button>Criar nota</button>
      </form>
    );
  }
}
