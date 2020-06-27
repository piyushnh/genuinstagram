import React from 'react'
import ToolTip from 'react-tooltip'
import BannerStats from './stats/stats'
import IsOnline from './isOnline'
import BannerAvatar from './avatar'
import BannerInfo from './info'
import BannerTags from './tags/tags'
import BannerFollow from './follow'
import BannerFriend from './friend'
import BannerTopOptions from './top-options/top-options'

const Banner = () => (
  <div className="pro_banner">
    <div className="pro_top">
      <BannerTopOptions />
      <BannerFollow />
      <BannerFriend />
    </div>

    <BannerAvatar />
    <BannerInfo />
    {/*<BannerTags />*/}

    <hr />

    <IsOnline />
    <BannerStats />

    <ToolTip />
  </div>
)

export default Banner
