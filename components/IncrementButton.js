import React, { Component, PropTypes } from 'react'

class IncrementButton extends Component {
  
  handleInc() {
    console.log('calling Inc')
    this.props.store.dispatch(this.props.actions.inc())
  }

  render() {

  	const {store, counterReducer} = this.props

    return (
    <div>
          <input type="button" onClick={this.handleInc.bind(this)} value="click me" />
    </div>
    )
  }
}

export default IncrementButton