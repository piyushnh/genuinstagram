import React, { Component } from 'react'

import MaterialIcon from '../../../others/icons/material-icon'
export default class ShareButton extends Component {
  state = {
    black: true,
  }

  // share = () => {
  //   this.setState({ didIShare: false })
  // }

  // unShare = () => {
  //   this.setState({
  //     didIShare: true,
  //   })
  // }

  changeColor() {
    this.setState({
      black: !this.state.black,
    })
  }

  render() {
    // let { didIShare } = this.state
    let btn_class = this.state.black ? 'send' : 'check'

    // return (
    //   <div>
    //     {didIShare ? (
    //       <MaterialIcon icon="send" onClick={this.share} />
    //     ) : (
    //       <MaterialIcon icon="check" onClick={this.unshare} />
    //     )}
    //   </div>
    // )

    return (
      <MaterialIcon
        icon={btn_class}
        onClick={() => {
          this.changeColor.bind(this)
        }}
      />
    )
  }
}
