import React, { Component } from 'react'
import { FadeIn } from 'animate-components'
import { withRouter } from 'react-router-dom'
import Title from '../../others/title'
import { connect } from 'react-redux'
import AddPostStepper from './stepper'
import FileInput from '../../others/input/file'
import TextArea from '../../others/input/textArea'
import { CPP, addPost  } from '../../../store/actions/post'
import Notify from 'handy-notification'
import Container from '@material-ui/core/Container';
import PostItMiddle from './middle'
import PrivacyChoices from './privacyChoices'
import Nomination from './nomination'




class AddPost extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
    // loading: this.props.feed.length === 0,
    postLoading: false,
    draftLoading: false 

  }

  
  
  }
  
 dp = (...args) => this.props.dispatch(CPP(...args))


 postIt = async e => {
    e.preventDefault()
    

      let {
      desc,
      targetFile,
      filter,
      location,
      type,
      group,
      tags,
      privacyType,
      nomineeList
      // isDraft
      // group_name
    } =  this.props.postIt
// Object.assign({}, props.postIt, group_name)
  this.setState({postLoading: true})
    await this.props.dispatch(addPost({
      desc,
      targetFile,
      filter,
      location,
      type,
      group,
      tags,
      privacyType,
      nomineeList,
      isDraft: false
      
    }))
  this.setState({postLoading: false})

    
  }

 saveToDrafts = async e => {
    e.preventDefault()
      // this.dp('isDraft', true)

      let {
      desc,
      targetFile,
      filter,
      location,
      type,
      group,
      tags,
      nomineeList,
      privacyType,
    } =  this.props.postIt
// Object.assign({}, props.postIt, group_name)
  this.setState({draftLoading: true})

    await this.props.dispatch(addPost({
      desc,
      targetFile,
      filter,
      location,
      type,
      group,
      tags,
      privacyType,
      nomineeList,
      isDraft: true
      // group_name
    }))
  this.setState({draftLoading: false})

    
  }



 

  handleNext = () => {
    if (this.props.postIt.fileChanged)
    {
      this.dp('activeStep', this.props.postIt.activeStep + 1)
    }
    else{
      Notify({
      value: 'Please upload Image',
    })
    }
    
  };

  handleBack = () => {
    let {activeStep} = this.props.postIt
    if (activeStep !== 0){
     this.dp('activeStep', activeStep - 1)

    }
  };

  render() {
    // let { loading } = this.state && (this.props.feed.length !== 0)
    // let {  desc, previewImg, filter, fileInput } = this.props.postIt
    let {activeStep, privacyType} = this.props.postIt
    let {postLoading, draftLoading} = this.state
    return (
      <Container className="add_post">
        <Title value="Add Post" />
        {
          (activeStep === 0 || activeStep === 1) ? 
          <PostItMiddle activeStep={activeStep} /> : (
            activeStep === 2 ?   <Nomination />:
          <PrivacyChoices activeStep={activeStep} />

          )
        }


        <AddPostStepper handleNext={this.handleNext} handleBack={this.handleBack} 
            activeStep={activeStep} privacyType={privacyType} addPost={this.postIt} saveAsDraft={this.saveToDrafts}
            postLoading= {postLoading} draftLoading={draftLoading}/>
        
      </Container>
    )
  }
}

const mapStateToProps = state => ({
    postIt: state.Post.postIt,

})

export default connect(mapStateToProps)(AddPost)
export { AddPost as PureAddPost }
