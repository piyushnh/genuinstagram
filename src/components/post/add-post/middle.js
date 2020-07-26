import React from 'react'
import { connect } from 'react-redux'
import FileInput from '../../others/input/file'
import TextArea from '../../others/input/textArea'
import { CPP } from '../../../store/actions/post'

const PostItMiddle = ({ postIt, session, dispatch, activeStep }) => {
  let { fileChanged, desc, previewImg, filter, fileInput } = postIt

  let dp = (...args) => dispatch(CPP(...args))

  let fileChange = e => {
    e.preventDefault()
    dp('fileChanged', true)
    dp('fileInput', e.target.value)

    let reader = new FileReader(),
      file = e.target.files[0]
    dp('targetFile', file)

    reader.onload = e => dp('previewImg', e.target.result)
    reader.readAsDataURL(file)
  }

  let valueChange = e => dp('desc', e.target.value)

  return (
    <div className="middle" style={{ height: 296 }}>
      {
      activeStep === 0 ? ( fileChanged ? 
      (<div className="post_image">
            <img src={previewImg} className={filter} />
          </div>) : 
        (<form
          className="post_img_form"
          method="post"
          encType="multipart/formdata"
        >
          <FileInput
            value={fileInput}
            fileChange={fileChange}
            label="Choose an image"
            labelClass="pri_btn"
          />
        </form>)
        
        
      ) : ( activeStep === 1 ? (
        <div>
          <div className="i_p_ta">
            <TextArea
              placeholder={`Enter text here`}
              value={desc}
              valueChange={valueChange}
              className="t_p_ta"
            />
          </div>
          <div className="post_image">
            <img src={previewImg} className={filter} />
          </div>
        </div>
        
      ) : (<div> </div>)

       ) }
    </div>
  )
}

const mapStateToProps = state => ({
  postIt: state.Post.postIt,
})

export default connect(mapStateToProps)(PostItMiddle)
export { PostItMiddle as PurePostItMiddle }
