import React, { Component } from 'react';
import './../css/App.css';

import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto'
import {validarPresupuesto} from './../helper';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Ingrese presupuesto');
    
    if(validarPresupuesto(presupuesto))
      this.setState({
        presupuesto,
        restante: presupuesto
      })
    else
      this.obtenerPresupuesto();
  }

  // Agregar nuevo gasto al state
  agregarGasto = gasto => {
    // Tomar copia del state actual
    const gastos = {...this.state.gastos}

    // Agregar gasto al objeto del state
    gastos[`gasto${Date.now()}`] = gasto;

    // Restar gasto al presupuesto
    this.restarPresupuesto(gasto.cantGasto);

    // Ponerlo en state
    this.setState({
      gastos 
    })
  } 

  // Restar gasto del presupuesto
  restarPresupuesto = cantidad => {
    // Leer gasto 
    let restar = Number(cantidad);
    // Tomar copia del state actual
    let restante = this.state.restante;
    // Restar
    restante -= restar;

    this.setState({
      restante
    })
  }

  render() {
    return (
      <div className="App container">
        <Header
          title="Gasto semanal"
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto
                agregarGasto = {this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos={this.state.gastos}
              />
              <ControlPresupuesto 
                presupuesto = {this.state.presupuesto}
                restante = {this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
