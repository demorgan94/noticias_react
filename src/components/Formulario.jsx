import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Formulario extends Component {

   state = {
      categoria: 'general'
   }

   handleChange = e => {
      this.setState({
         categoria: e.target.value
      }, () => {
         this.props.consultarNoticias(this.state.categoria);
      });
   }

   render() {
      return (
         <div className="buscador row">
            <div className="col s12 m8 offset-m2">
               <form action="">
                  <h2>Encuentra Notícias por Categoría</h2>

                  <div className="input-field col s12 m8 offset-m2">
                     <select onChange={this.handleChange}>
                        <option value="general">General</option>
                        <option value="business">Negocios</option>
                        <option value="entertainment">Entretenimiento</option>
                        <option value="health">Salúd</option>
                        <option value="science">Ciencia</option>
                        <option value="sport">Depórtes</option>
                        <option value="technology">Tecnología</option>
                     </select>
                  </div>
               </form>
            </div>
         </div>
      )
   }
}

Formulario.propTypes = {
   consultarNoticias: PropTypes.func.isRequired
}
