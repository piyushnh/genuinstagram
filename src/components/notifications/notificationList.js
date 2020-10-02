import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import NotificationItem from './notifItem'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

function NotificationList(props) {
  const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <List className={classes.root}>
        {props.notifications.map(notif => (
          <NotificationItem notif={notif} />
        ))}

        <Divider variant="inset" component="li" />
      </List>
    </Container>
  )
}

const mapStateToProps = state => ({
  notifications: state.Notification.notifications,
})

export default connect(mapStateToProps)(NotificationList)
