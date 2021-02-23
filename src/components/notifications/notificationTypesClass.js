import { push } from 'connected-react-router'
import { store } from '../../store/store'

var dispatch = store.dispatch

class Notification {
  constructor(notif) {
    this.activities = notif.activities
    this.user = this.activities[0].user
    this.created_at = notif.created_at
    this.is_seen = notif.is_seen
    this.is_read = notif.is_read
  }

  getPrimaryText() {
    if (this.activities.length > 1) {
      return `${this.user.firstname} ${this.user.surname} & others`
    } else {
      return `${this.user.firstname} ${this.user.surname}`
    }
  }

  getPrimaryContent() {
    return ''
  }

  getSecondaryContent() {
    return ''
  }

  handleOnClick() {
    return null
  }
}

export class FriendRequestSentNotif extends Notification {
  constructor(activities) {
    super(activities)
  }

  getPrimaryContent() {
    return `${this.getPrimaryText()} sent you a friend request`
  }

  handleOnClick() {
    dispatch(push(`/friendRequests/`))
  }
}

export class FollowingNotif extends Notification {
  constructor(activities) {
    super(activities)
  }

  getPrimaryContent() {
    return `${this.getPrimaryText()} started following you`
  }

  handleOnClick() {
    dispatch(push(`/friendRequests/`))
  }
}

export class CommentedNotif extends Notification {
  constructor(activities) {
    super(activities)
  }

  getPrimaryContent() {
    return `${this.getPrimaryText()} commented on your post `
  }

  handleOnClick() {
    dispatch(push(`/friendRequests/`))
  }
}

export class CommentedOnTaggedNotif extends Notification {
  constructor(activities) {
    super(activities)
  }

  getPrimaryContent() {
    return `${this.getPrimaryText()} commented on a post you're tagged in: `
  }

  handleOnClick() {
    const post = this.activities[0].item.post

    dispatch(push(`/post/${post.post_id}`))
  }
}

export class NominatedNotif extends Notification {
  constructor(activities) {
    super(activities)
  }

  getPrimaryContent() {
    return `${this.getPrimaryText()} nominated you to execute a pep`
  }

  handleOnClick() {
    dispatch(push(`/friendRequests/`))
  }
}

export class TaggedNotif extends Notification {
  constructor(activities) {
    super(activities)
  }

  getPrimaryContent() {
    return `${this.getPrimaryText()} tagged you in a post`
  }

  handleOnClick() {
    dispatch(push(`/friendRequests/`))
  }
}

export class RecommendedPostNotif extends Notification {
  constructor(activities) {
    super(activities)
  }

  getPrimaryContent() {
    return `${this.getPrimaryText()} tagged you in a post`
  }

  handleOnClick() {
    dispatch(push(`/friendRequests/`))
  }
}

export class RecommendedPepNotif extends Notification {
  constructor(activities) {
    super(activities)
  }

  getPrimaryContent() {
    return `${this.getPrimaryText()} tagged you in a post`
  }

  handleOnClick() {
    dispatch(push(`/friendRequests/`))
  }
}
