/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import End from '../others/end'
import Post from '../post/post/post'
import MapPosts from '../post/map-posts/map-posts'
import Nothing from '../others/nothing'
import { Instagram } from 'react-content-loader'
import InfiniteScroll from 'react-infinite-scroll-component';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { getTimeline } from '../../store/actions/post'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '2em',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const Feed = ({ feed, hasMore, dispatch }) => {
  let feed_length = feed.length
  let map_feed = feed.map(f => <Post key={f.post_id} {...f} when="feed" />)

  let loadingMssg =
    "Please wait, we're fetching your feed!"

  let fetchPosts =  async () => {
      await dispatch(getTimeline())
     
  }

  const classes = useStyles()

  let refresh = () => {
    console.log('refreshed')
  }
  
  const loader = (<div className={classes.root}>
      {'Loading Posts'}
      <LinearProgress />
    </div>)
  return (
    <Fragment>

    {feed_length == 0 ? (
        <Fragment>
        <Nothing mssg={loadingMssg} />
        <div style={{ marginTop: 20 }}>
                  <Instagram />
                  <Instagram />
                  <Instagram />
        </div>
        </Fragment>
      ) : (

        <InfiniteScroll
          
          dataLength={feed_length} //This is important field to render the next data
          next={fetchPosts}
          hasMore={hasMore}
          loader={loader}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>No more posts to show</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={refresh}
          pullDownToRefresh 
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
          }
          >

        <div className="posts_div" style={{ marginTop: feed_length == 0 ? 10 : 0 }}>
        <MapPosts posts={map_feed}  />
      </div>
        </InfiniteScroll>

      
      )}

      {feed_length == 0 && <End />}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  feed: state.Post.feed.list,
  hasMore: state.Post.feed.hasMore,
})

export default connect(mapStateToProps)(Feed)
