import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export class PrivateRoute extends Component {
  render() {
    const { authed, path, component: Component, layout: Layout } = this.props
    return (
      <Route
        path={path}
        exact
        render={() => {
          return authed ? (
            <Layout>
              <Component />
            </Layout>
          ) : (
            <Redirect to="/react-login" />
          )
        }}
      />
    )
  }
}

const mapStateToProps = (state, nexProps) => {
  return {
    authed: state.Authentication.details.authed,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
