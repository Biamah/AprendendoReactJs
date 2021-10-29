import React, { Component } from "react";
import "./card-nota.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

export default class CardNota extends Component {
  delete() {
    const indice = this.props.indice;
    this.props.eraseNote(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <div className="cabecalho">
          <h3 className="title-card">{this.props.title}</h3>
          <DeleteSVG onClick={this.delete.bind(this)} />
        </div>
        <p className="text-card">{this.props.text}</p>
      </section>
    );
  }
}
