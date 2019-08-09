import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types'

const ListadoNoticias = (props) => {
   return (
      <div className="row">
         {props.noticias.map(noticia => (
            <Noticia key={noticia.url} noticia={noticia} />
         ))}
      </div>
   );
};

ListadoNoticias.propTypes = {
   noticias: PropTypes.array.isRequired
}

export default ListadoNoticias;