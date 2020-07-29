import React, { Component } from 'react'
// import './flist.scss'
import Checkbox from '@material-ui/core/Checkbox';

export default function Contact({user, addUser, removeUser, checked}) {
  // const [checked, setChecked] = React.useState(() => {
  //       return nomineeList.indexOf(user) !== -1

  // });

  const handleChange = (event) => {
    if(event.target.checked === true){
      addUser(user)
      // setChecked(true)
    }
    else if (event.target.checked === false){
      removeUser(user)
      // setChecked(false)
    }
  };
 return (
      <li className="holder">
        <img src={user.image} alt="img" />
      
        {/* <ShareButton style={{ float: 'right' }} /> */}
        <span> {user.first_name}{user.list_name} </span>
        <span className="phone"> {user.username} </span>
        <Checkbox
        checked={checked}
        onClick={handleChange}
        style={{ float: 'right' }}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </li>
    )


  
}