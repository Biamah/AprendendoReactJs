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
          categorias={this.categorias.categorias}
          createNote={this.notas.criarNotas} 
        />
        <main>
          <ListaCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            eraseNote={this.notas.apagarNotas}
            notes={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}
export default App;
