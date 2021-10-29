import react from "react";
import { Component } from "react";
import FormularioCadastro from "./components/formulário/formularioCadastro";
import ListaDeNotas from "./components/lista/listaDeNotas";
import ListaCategorias from "./components/lista-categorias/listaCategorias";
import "./app.css"

class App extends Component {
  constructor() {
    super();
    this.notes = [];
    this.state = {
      notes: [],
      categorias: []
    };
  }

  createNote(title, text) {
    const newNote = { title, text };
    const newArrayNotes = [...this.state.notes, newNote]
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState)
  }

  adicionarCategoria(nameCategoria) {
    const newArrayCategorias = [...this.state.categorias, nameCategoria]
    const newState = { ...this.state, categorias:newArrayCategorias }
    this.setState(newState)
  }

  deleteNote(index) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index, 1);

    this.setState({ note: arrayNotes });
  }

  render() {
    return (
      <section className="app">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <main>
          <ListaCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            eraseNote={this.deleteNote.bind(this)}
            notes={this.state.notes}
          />
        </main>
      </section>
    );
  }
}
export default App;
