import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';
import Formulario from './components/Formulario';

export default class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    M.AutoInit();

    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=9b70f60654f84854ae9af81db929fe7f`;

    const res = await fetch(url);
    const noticias = await res.json();

    this.setState({
      noticias: noticias.articles
    });
  }

  render() {
    return (
      <div className="App">
        <Header titulo="Noticias" />

        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />

          <ListadoNoticias noticias={this.state.noticias} />
        </div>
      </div>
    )
  }
}

