import React, { Component } from 'react';
import "./lista-categoria.css";

export default class ListaCategorias extends Component {
  _handleEventInput(e){
    if(e.key == "Enter"){
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria)
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul>
          {this.props.categorias.map((categoria, index)=>{
            return <li key={index}>{categoria}</li>
          })}
          
        </ul>
        <input 
          type="text" 
          placeholder="Adicionar categoria" 
          onKeyUp={this._handleEventInput.bind(this)}
        />
      </section>
    )
  }
}
