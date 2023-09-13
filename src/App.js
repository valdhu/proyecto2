import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from './componentes/Menu';
import InicioPagina from './paginas/InicioPagina';
import ContactoPagina from './paginas/ContactoPagina';
import JugadoresPagina from './paginas/JugadoresPagina';
import SobreNosotros from './paginas/SobreNosotros';
import Otros from './paginas/Otros';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container pt-5 mt-5">
            <Routes>
              <Route
                path="/"
                element={<InicioPagina />}
              />
              <Route
                path="/contacto"
                element={<ContactoPagina />}
              />
              <Route
                path="/jugadores"
                element={<JugadoresPagina />}
              />
              <Route
                path="/nosotros"
                element={<SobreNosotros />}
              />
              <Route
                path="/otros"
                element={<Otros />}
             />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
