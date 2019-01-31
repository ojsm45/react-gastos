import React, { Component } from 'react'
 
export default class FormularioGasto extends Component{

  // Refs para campos del form
  nombreGastoRef = React.createRef();
  cantGastoRef = React.createRef();

  crearGasto = (e) => {
    // Prevenir Default
    e.preventDefault();
    // Crear objeto con los datos
    const gasto = {
      nombreGasto: this.nombreGastoRef.current.value,
      cantGasto: this.cantGastoRef.current.value
    }

    // Agregarlo y enviarlo por props
    this.props.agregarGasto(gasto)

    // Limpiar el form
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aquí</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input ref={this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. transporte"/>
        </div>
        <div className="campo">
          <label>Cantidad</label>
          <input ref={this.cantGastoRef} className="u-full-width" type="text" placeholder="Ej. 300"/>
        </div>
        <input className="button-primary u-full-width" type="submit" value="Agregar"/>
      </form>
    )
  }
}
