/* eslint-disable no-case-declarations */
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import * as notifClasses from './notificationTypesClass'
import Button from '@material-ui/core/Button'

import Typography from '@material-ui/core/Typography'
import { dispatchHelper } from '../../utils/utils'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

function NotificationItem({ notif, dispatch }) {
  const classes = useStyles()

  useEffect(() => {
    // Update the document title using the browser API
    // switch (notif.category) {
    //   case 'FRIEND_REQUEST_SENT':
    //     console.log('hiiiiiiiiii')
    //     console.log(activities[0].item)
    //     dispatch({ type: 'ADD_FRIEND_REQUEST', payload: activities[0].item })
    //     break
    //   default:
    //     break
    // }
  })

  const getNotifObject = () => {
    switch (notif.category) {
      case 'FRIEND_REQUEST_SENT':
        return new notifClasses.FriendRequestSentNotif(notif)
      case 'FOLLOWING':
        return new notifClasses.FollowingNotif(notif)
      case 'COMMENTED':
        return new notifClasses.CommentedNotif(notif)
      case 'COMMENTED_ON_TAGGED':
        return new notifClasses.CommentedOnTaggedNotif(notif)
      case 'NOMINATED':
        return new notifClasses.NominatedNotif(notif)
      case 'TAGGED':
        return new notifClasses.TaggedNotif(notif)
      case 'RECOMMENDED_POST':
        return new notifClasses.RecommendedPostNotif(notif)
      case 'RECOMMENDED_PEP':
        return new notifClasses.RecommendedPepNotif(notif)
      default:
        return ''
    }
  }

  let notifObject = getNotifObject()

  return (
    <ListItem alignItems="flex-start" onClick={notifObject.handleOnClick}>
      <ListItemAvatar>
        <Avatar
          alt={notifObject.user.firstname}
          src={notifObject.user.profile_picture}
        />
      </ListItemAvatar>
      <ListItemText
        primary={notifObject.getPrimaryContent()}
        secondary={notifObject.getSecondaryContent()}
      />
    </ListItem>
  )
}

export default connect(null, null)(NotificationItem)
// <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
