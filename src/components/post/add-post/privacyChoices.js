import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from 'react-redux'
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import { CPP } from '../../../store/actions/post'



function PrivacyChoices({dispatch, postIt}) {
  // const [value, setValue] = React.useState('Friends');

  const {privacyType} = postIt

  const dp = (...args) => dispatch(CPP(...args))


  const handleChange = (event) => {
        dp('privacyType', event.target.value)

  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Who do you want to post this to?</FormLabel>
      <RadioGroup aria-label="privacy" name="privacy" value={privacyType} onChange={handleChange}>
        <div>
        <FormControlLabel value="FRIENDS" control={<Radio />} label="Friends" />
        <Tooltip title="Visible to all friends" enterTouchDelay={50}	placement="right">
              <HelpIcon />
        </Tooltip>
        </div>
        <div>
        <FormControlLabel value="FOLLOWERS" control={<Radio />} label="Followers" />
        <Tooltip title="Visible to anyone who follows you or lands on your profile" leaveTouchDelay={3000} enterTouchDelay={50} placement="right">
              <HelpIcon />
        </Tooltip>
        </div>
        <div>
        <FormControlLabel value="TO_JOURNAL" control={<Radio />} label="Save to Jornal" />
        <Tooltip title="Saves post to your journal" enterTouchDelay={50} leaveTouchDelay={3000} placement="right">
              <HelpIcon />
        </Tooltip>
        </div>
      </RadioGroup>
    </FormControl>
  );
}

const mapStateToProps = state => ({
  postIt: state.Post.postIt,
})

export default connect(mapStateToProps)(PrivacyChoices)
