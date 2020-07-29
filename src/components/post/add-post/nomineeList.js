import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function NomineeList(props) {
  const classes = useStyles();
  // const [chipData, setChipData] = React.useState(props.NomineeList);
  // let chipData = props.nomineeList
  // console.log(props.nomineeList)
  const handleDelete = (user) => () => {


    props.onDelete(user)

  };

  return (
    <Paper component="ul" className={classes.root}>
      {props.postIt.nomineeList.map((user) => {


        return (
          <li key={user.username}>
            <Chip
              label={user.username}
              onDelete={handleDelete(user)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}

const mapStateToProps = state => ({
  postIt: state.Post.postIt
})


export default connect(mapStateToProps)(NomineeList)