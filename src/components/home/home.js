import React, { Component } from 'react'
import { FadeIn } from 'animate-components'
import { withRouter } from 'react-router-dom'
import Title from '../others/title'
import { getUnreadNotifications } from '../../store/actions/notification'
import { connect } from 'react-redux'
import { getTimeline } from '../../store/actions/post'

import Suggested from '../others/suggested/suggested'
import CreateGroup from '../group/create-group/create-group'
import PostItTeaser from '../post/post-it/post-it-teaser'
import { getUnreadMessages } from '../../store/actions/message'
import PopularHashtags from '../hashtag/popular-hashtags'
import Feed from './feed'
import { Grid } from '@material-ui/core'
class Home extends Component {
  state = {
    // loading: this.props.feed.length === 0,
  }

  componentDidMount = () => {
    let { dispatch } = this.props

    

    // dispatch(getUnreadNotifications())
    // dispatch(getUnreadMessages())

    if (this.props.feed.list.length !== 0) {
      this.setState({ loading: false })
    } else {
      dispatch(getTimeline())
    }
  }



  render() {
    // let { loading } = this.state && (this.props.feed.length !== 0)
    let loading = !(this.props.feed.length !== 0)

    return (
      <div>
        <Title value="Home" />

        <FadeIn duration="300ms">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            {/* <div className="senapati home_senapati"> */}
            {/* <div className="prajkumar"> */}
            {/*<PostItTeaser type="user" disabled={loading} />*/}

            <Grid item>
              <PostItTeaser type="user" />
              <Feed />
            </Grid>
            {/* </div> */}

            {/* <div className="srajkumar">
              <Suggested when="home" />
              <PopularHashtags />
              {!loading && <CreateGroup />}
            </div> */}
            {/* </div> */}
          </Grid>
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
