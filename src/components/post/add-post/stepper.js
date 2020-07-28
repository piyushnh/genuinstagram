import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Select Image', 'Add caption', 'Nominate Others', 'Choose privacy'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Remember, it's not about showing off here`;
    case 1:
      return 'Talk about why this moment is so meaningful to you, tell your story';
    case 2:
      return `Nominate others to do the pep`;
    case 3:
      return `Who do you want to post it to?`;
    default:
      return 'Unknown step';
  }
}

function getButtonLabel(privacyType) {
  switch (privacyType) {
    case 'FRIENDS':
      return `Post to Friends`;
    case 'FOLLOWERS':
      return 'Post to Followers';
    case 'TO_JOURNAL':
      return `Post to Journal`;
    default:
      return 'Unknown step';
  }
}

export default function AddPostStepper(props) {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const activeStep = props.activeStep

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };



  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={props.handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>What do you want to do with the post?</Typography>
          <Button onClick={props.saveAsDraft}
          variant="contained"
            color="primary"
           className={classes.button}>
              {props.draftLoading ? <CircularProgress size={'2em'} color='secondary'/> :  'Save as draft'}

          </Button>
          <Button onClick={props.addPost} 
          variant="contained"
          color="primary"
          className={classes.button}>
          {props.postLoading ? <CircularProgress size={'2em'} color='secondary' /> :   getButtonLabel(props.privacyType)}
          </Button>
        </Paper>
      )}
    </div>
  );
}
