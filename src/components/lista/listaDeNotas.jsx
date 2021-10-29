import React, { Component } from "react";
import CardNota from "../cardNota/cardNota";
import "./lista-de-notas.css";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map((note, index) => {
          return (
            <li key={index}>
              <CardNota
                indice={index}
                eraseNote={this.props.eraseNote}
                title={note.title}
                text={note.text}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
