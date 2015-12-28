import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as counterActions from '../actions/counterActions'

class App extends Component {
  render() {
  	debugger
    const { counterReducer, actions, store } = this.props
    return (
      <div>
        <Counter store={store} counterReducer = {counterReducer}/>
      </div>
    )
  }
}

App.propTypes = {
  
  actions: PropTypes.object.isRequired
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
    actions: bindActionCreators(counterActions, dispatch)
  }
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
