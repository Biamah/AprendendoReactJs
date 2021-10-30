import React, { Component } from 'react'

export default class Categorias extends Component {
  constructor(){
    super();
    this.categorias = [];
  }

  adicionarCategoria(novaCategoria){
    console.log(this.categorias);
    this.categorias.push(novaCategoria);
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
