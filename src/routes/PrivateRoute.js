import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";
import RouteWithLayout from "./RouteWithLayout";


export class PrivateRoute extends Component{

  render () {
    const {authed, path, component: Component, layout: Layout} = this.props
    return (
    <Route  path={path} 
    
    render={() => (
				<Layout>
					<Component />
				</Layout>
			)}
    />

    )
  }
}

const mapStateToProps = (state, nexProps) => {

  return {
    authed: true
  }
}

export default connect(mapStateToProps)(PrivateRoute )
