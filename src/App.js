// import react from "react";
import { Component } from "react";
import FormularioCadastro from "./components/formulário/formularioCadastro";
import ListaDeNotas from "./components/lista/listaDeNotas";
import ListaCategorias from "./components/lista-categorias/listaCategorias";
import "./app.css"
import Categorias from "./dados/categorias";
import ArrayNotas from "./dados/notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="app">
        <FormularioCadastro 
          categorias={this.categorias}
          createNote={this.notas.adicionarNota.bind(this.notas)} 
        />
        <main>
          <ListaCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas}
            eraseNote={this.notas.apagarNotas.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}
export default App;
