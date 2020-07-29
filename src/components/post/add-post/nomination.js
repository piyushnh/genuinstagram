import React, { Component } from 'react'
// import './flist.scss'
import {connect} from 'react-redux';
import { CPP, addPost  } from '../../../store/actions/post'
import NomineeList from './nomineeList'
import Contact from './contact'



class Nomination extends Component {
  constructor(props){
    super(props)
    this.state = {
    displayedContacts: this.props.friendsList,
  }
  }
  
  

  searchHandler = event => {
    let searcjQery = event.target.value.toLowerCase(),
      displayedContacts = this.props.friendsList.filter(el => {
        let first_name = el.first_name.toLowerCase()
        let last_name = el.last_name.toLowerCase()
        let username = el.username.toLowerCase()
        let searchValue = first_name+last_name+username
        return searchValue.indexOf(searcjQery) !== -1
      })
    this.setState({
      displayedContacts: displayedContacts,
    })
  }

  dp = (...args) => this.props.dispatch(CPP(...args))

  addNominee = (user) => {
      let nomineeList = this.props.postIt.nomineeList

      nomineeList.push(user)

      this.dp('nomineeList', nomineeList)
      
  }

  removeNominee = (user) => {
      let nomineeList = this.props.postIt.nomineeList
     
      nomineeList = nomineeList.filter(function(item) {
          return item !== user
      })

      this.dp('nomineeList', nomineeList)



  }

  render() {
    // let contacts = this.state.displayedContacts
    let nomineeList = this.props.postIt.nomineeList
    return (
      <div className="holder">
        <input type="text" className="search" onChange={this.searchHandler} />
        <ul>
          {' '}
          {this.state.displayedContacts.map(friend => {
            return (
              <Contact
                key={friend.username}
                user={friend}
                addUser={this.addNominee}
                removeUser={this.removeNominee}
                checked={nomineeList.indexOf(friend) !== -1}
              />
            )
          })}
        </ul>

        <NomineeList onDelete={this.removeNominee} />

        <span>{'Press Next to skip this step'}</span>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  friendsList: state.Friend.friendsList,
  postIt: state.Post.postIt
})

export default connect(mapStateToProps)(Nomination);
