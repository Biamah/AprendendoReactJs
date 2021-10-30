import React, { Component } from "react";
import CardNota from "../cardNota/cardNota";
import "./lista-de-notas.css";

export default class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    console.log(this.state.notas);
    return (
      <ul className="lista-notas">
        {this.state.notas.map((note, index) => {
          return (
            <li key={index}>
              <CardNota
                indice={index}
                eraseNote={this.props.eraseNote}
                title={note.titulo}
                text={note.texto}
                categoria={note.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
