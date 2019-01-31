import React, { Component } from 'react'

import Gasto from './Gasto'

export default class Listado extends Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {Object.keys(this.props.gastos).map(key => {
          return (<Gasto 
            key = {key}
            gasto = {this.props.gastos[key]}
          />)
        })}
        {console.log(this.props.gastos)}
      </div>
    )
  }
}
