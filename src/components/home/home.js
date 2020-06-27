import React, { Component } from 'react'
import { FadeIn } from 'animate-components'
import {withRouter} from 'react-router-dom'
import Title from '../others/title'
import { getUnreadNotifications } from '../../store/actions/notification'
import { connect } from 'react-redux'
import { getTimeline } from '../../store/actions/post'
import { getCurrentProfile } from '../../store/actions/user'
import Suggested from '../others/suggested/suggested'
import CreateGroup from '../group/create-group/create-group'
import PostItTeaser from '../post/post-it/post-it-teaser'
import { getUnreadMessages } from '../../store/actions/message'
import PopularHashtags from '../hashtag/popular-hashtags'
import Feed from './feed'

class Home extends Component {
  state = {
    // loading: this.props.feed.length === 0,
  }

  componentDidMount = () => {
    let { dispatch } = this.props


    dispatch(getCurrentProfile())

    // dispatch(getUnreadNotifications())
    // dispatch(getUnreadMessages())

    if (this.props.feed.length !== 0)
      {
        this.setState({ loading: false })
      }
    else{
     dispatch(getTimeline())
      
    }
  }

  // componentWillReceiveProps = () => this.setState({ loading: false })

  // componentDidUpdate(prevProps)
  // {
  //   if (this.props.feed.length !== 0)
  //     {
  //       this.setState({ loading: false })
  //     }

  // }

  render() {
    // let { loading } = this.state && (this.props.feed.length !== 0)
    let loading = !(this.props.feed.length !== 0)

    return (
      <div>
        <Title value="Home" />

        <FadeIn duration="300ms">
          <div className="senapati home_senapati">
            <div className="prajkumar">
              {/*<PostItTeaser type="user" disabled={loading} />*/}
              <PostItTeaser type="user" />

            

              <Feed />
            </div>

            <div className="srajkumar">
              <Suggested when="home" />
              <PopularHashtags />
              {!loading && <CreateGroup />}
            </div>
          </div>
        </FadeIn>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  feed: state.Post.feed,
})

export default connect(mapStateToProps)(Home)
export { Home as PureHome }
