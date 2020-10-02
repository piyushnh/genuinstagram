export const addFriendRequest = (friendRequestsList, newRequest) => {
  for (let index = 0; index < friendRequestsList.length; index++) {
    if (newRequest.id === friendRequestsList[index].id) {
      return friendRequestsList
    }
  }

  friendRequestsList.unshift(newRequest)
  return friendRequestsList
}
