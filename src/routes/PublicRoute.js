import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


export class PublicRoute extends Component {

  render () {
    const {authed, path, component: Component} = this.props
    return (
    <Route path={path}     render={() => {
      return authed ?
        <Redirect to='/' />
        :
        (
					<Component />
        )
				
    }} />
    )
  }
}

const mapStateToProps = (state, nexProps) => {

  return {
    authed: state.Authentication.details.authed
  }
}

export default connect(mapStateToProps)(PublicRoute)
