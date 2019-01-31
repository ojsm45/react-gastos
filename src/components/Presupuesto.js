import React, { Component } from 'react'

export default class Presupuesto extends Component {
  render() {
    return (
      <div className="alert alert-primary">
        Presupuesto: $ {this.props.presupuesto}
      </div>
    )
  }
}
