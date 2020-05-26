import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { Main as MainLayout, Minimal as MinimalLayout } from "../components/layouts";
import RouteWithLayout from "./RouteWithLayout";


export class PrivateRoute extends Component{

  render () {
    const {authed, path, component: Component, layout: Layout} = this.props
    return (
    <Route  path={path} exact
    
    render={() => {
      return authed ?
				(<Layout>
					<Component />
				</Layout>)
        :
        <Redirect to='/react-login' />
    }}
    />

    )
  }
}

const mapStateToProps = (state, nexProps) => {

  return {
    authed: state.Authentication.details.authed
  }
}

export default connect(mapStateToProps)(PrivateRoute )
