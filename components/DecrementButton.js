import React, { Component, PropTypes } from 'react'

class DecrementButton extends Component {
  
  render() {

  	const {store, counterReducer} = this.props

    return (
    <div>
          <input type="button" onClick={this.props.actions.dec} value="Dec" />
    </div>
    )
  }
}

export default DecrementButton