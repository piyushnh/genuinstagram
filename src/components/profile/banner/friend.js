import React, {useState, Fragment} from 'react'
import { Me } from '../../../utils/utils'
import {isCurrentUser} from '../../../store/actions/user'
import {unfriendUser} from '../../../store/actions/friend'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Check';
import { IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CircularProgress from '@material-ui/core/CircularProgress';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BannerFriend = ({ ud,  dispatch }) => {
  let { username,id, friendshipStatus } = ud
  let user = id ? id : 0

  let [loading, setLoading] =useState(false)
  const [open, setOpen] = React.useState(false);
  
  let [dialogData, setDialogData] = useState({
    dialogText:'',
    agreeFunction: null,

  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let agreeFunction = null;

  const loadAction = async (action) => {
    setOpen(false)
    setLoading(true)
    await dispatch(action(username))
    setLoading(false)
  }
  const deleteFriendRequest = () => {
    
  }
  const sendFriendRequest = () => {
    setOpen(true)
    setDialogData({
      dialogText: `Don't add friends like it's Facebook:) Is this a person you'd like to share
       the real you with?`,
      agreeFunction: () => {loadAction(friendUser)}
    })
  }
  const acceptFriendRequest = () => {}
  const deleteFriendship = () => {
    setOpen(true)
    setDialogData({
      dialogText: `Are you sure you want to unfriend @${username}?`,
      agreeFunction: () => {loadAction(unfriendUser)}
    })
  
  }
    let unfriend = <IconButton aria-label="delete">
                    <DeleteIcon />
                 </IconButton>
  // const project = () => {
  let label, action,startIcon = null, endIcon = null, dialogText;

      switch(friendshipStatus) {

        case "NONE":   label='Add Friend'
                       action = sendFriendRequest
                       startIcon = <PersonAddIcon />
                       break;
        case "REQUEST_SENT":   label='Request Sent'
                       action = deleteFriendRequest
                       startIcon = <PersonAddDisabledIcon />
                       break;
        case "REQUEST_RECEIVED": label='Accept Request'
                       action = acceptFriendRequest
                       startIcon = <PersonAddIcon />
                       break;
        case "ARE_FRIENDS":  label='Friends'
                       action = deleteFriendship
                       startIcon = <CheckIcon />
                       break;

        // default:      return <h1>No project match</h1>
      }
    // } 

  

  return (
    <div className="pro_ff">
      {dispatch(isCurrentUser(username)) ? ( <div></div> ) : (
        <Fragment>
        <Button
        variant="contained"
        color="primary"
        style={{margin: '0.5em'}}
        className={null}
        onClick={action}
        startIcon={startIcon}
        endIcon = {endIcon}
      >
        {loading ? <CircularProgress size={'1em'} /> : label}
       </Button>

        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Hey there!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogData.dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={dialogData.agreeFunction} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      </Fragment>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  ud: state.User.user_details,
  // isFollowing: state.Follow.isFollowing,
})

export default connect(mapStateToProps)(BannerFriend)
