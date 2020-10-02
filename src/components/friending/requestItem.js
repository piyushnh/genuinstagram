import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import { ListItemSecondaryAction } from '@material-ui/core'
import Button from '@material-ui/core/Button'

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

function RequestItem({ request }) {
  const classes = useStyles()

  const acceptRequest = request => {}
  const rejectRequest = request => {}

  const handleOnClick = request => {}

  return (
    <ListItem alignItems="flex-start" onClick={handleOnClick}>
      <ListItemAvatar>
        <Avatar
          alt={request.from_user.firstname}
          src={request.from_user.profile_picture}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.primary}>
            <Typography variant="h6" gutterBottom>
              {`${request.from_user.firstname} ${request.from_user.lastname}`}
            </Typography>

            <Typography variant="caption" display="block" gutterBottom>
              <ReactTimeAgo date={request.created} />
            </Typography>
          </div>
        }
      />
      <ListItemSecondaryAction className={classes.actions}>
        <Button
          variant="contained"
          color="primary"
          onClick={acceptRequest(request)}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={rejectRequest(request)}
        >
          Reject
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

// const mapStateToProps = state => ({
//   list: state.Friend.FriendRequestsList,
// })

export default connect()(RequestItem)
