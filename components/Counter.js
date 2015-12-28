import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'
import * as Actions from '../actions/counterActions'


class Counter extends Component {
  
  // handleInc() {
  //   console.log('Not calling')
  //   this.store.dispatch(this.props.actions.inc())
  // }

  render() {

    const {store, counterReducer} = this.props
    debugger
    return (
      <div>
          <IncrementButton  store= {this.props.store} actions = {this.props.actions}/>
          <DecrementButton  store= {this.props.store} actions = {this.props.actions}/>
          <p id="counter-display"> count is{this.props.counterReducer.count}</p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  debugger
  return {
    counterReducer: state.counterReducer
  }
}

function mapDispatchToProps(dispatch) {
  debugger
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// export default Counter