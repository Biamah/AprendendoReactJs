import React, { Component } from 'react';
import "./lista-categoria.css";

export default class ListaCategorias extends Component {
  constructor(){
    super();
    this.state = {categorias:[]}
  }
  
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
  }

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
          {this.state.categorias.map((categoria, index)=>{
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
