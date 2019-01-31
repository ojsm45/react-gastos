import React, { Component } from 'react'

export default class Gasto extends Component {
  render() {
    const {cantGasto, nombreGasto} = this.props.gasto;
    return (
      <li>
        <p>
          {nombreGasto}
          <span className="gasto">$ {cantGasto}</span>
        </p>
      </li>
    )
  }
}
