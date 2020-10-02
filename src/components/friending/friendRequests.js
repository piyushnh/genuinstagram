import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

import RequestItem from './requestItem'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  primary: {
    display: 'flex',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

function FriendRequestsList({ list }) {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      {list.length == 0 ? (
        <div>{'Nothing to show'}</div>
      ) : (
        <List className={classes.root}>
          {list.map(request => (
            <div>
              <RequestItem request={request} />
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  list: state.Friend.friendRequestsList,
})

export default connect(mapStateToProps)(FriendRequestsList)
