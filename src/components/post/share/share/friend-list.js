import React, { Component } from 'react'
// import './flist.scss'
import MaterialIcon from '../../../others/icons/material-icon'
// import ShareButton from './share-button'

let CONTACTS = [
  {
    id: 1,
    name: 'Naite',
    phoneNumber: 'naitemach@gmail.com',
    image: 'http://accounts-cdn.9gag.com/media/avatar/14368888_100_1.jpg',
  },
  {
    id: 2,
    name: 'piyush',
    phoneNumber: 'piyush@rotato.com',
    image:
      'http://forums.animeboston.com/download/file.php?avatar=11355_1455595397.png',
  },
  {
    id: 3,
    name: 'Dv',
    phoneNumber: 'dv@nepal.com',
    image: 'http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg',
  },
  {
    id: 4,
    name: 'Shivu',
    phoneNumber: 'shiv@kailash.com',
    image:
      'https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg',
  },
  {
    id: 5,
    name: 'elon musk',
    phoneNumber: 'musk@musk.com',
    image:
      'https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg',
  },
]

class Contact extends Component {
  render() {
    return (
      <li className="holder">
        <img src={this.props.image} alt="img" />
        <MaterialIcon style={{ float: 'right' }} icon="send" />
        {/* <ShareButton style={{ float: 'right' }} /> */}
        <span> {this.props.name} </span>{' '}
        <span className="phone"> {this.props.phone} </span>{' '}
      </li>
    )
  }
}

export default class ContactList extends Component {
  state = {
    displayedContacts: CONTACTS,
  }

  searchHandler = event => {
    let searcjQery = event.target.value.toLowerCase(),
      displayedContacts = CONTACTS.filter(el => {
        let searchValue = el.name.toLowerCase()
        return searchValue.indexOf(searcjQery) !== -1
      })
    this.setState({
      displayedContacts: displayedContacts,
    })
  }
  render() {
    let contacts = this.state.displayedContacts
    return (
      <div className="holder">
        <li className="all">
          {' '}
          <MaterialIcon style={{ float: 'right' }} icon="send" />
          {/* <ShareButton style={{ float: 'right' }} /> */}
          <span> Recommend to all followers </span>
        </li>
        <li>
          {' '}
          <MaterialIcon style={{ float: 'right' }} icon="send" />
          <span> Recommend to all friends </span>
        </li>
        <input type="text" className="search" onChange={this.searchHandler} />
        <ul>
          {' '}
          {contacts.map(el => {
            return (
              <Contact
                key={el.id}
                name={el.name}
                image={el.image}
                phone={el.phoneNumber}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
