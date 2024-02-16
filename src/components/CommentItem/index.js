// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetals, isLikeToggle, isDeleteUser} = props
  const {id, name, comment, isLiked, letterColor} = commentDetals

  const seen = formatDistanceToNow(new Date())
  const likeImg =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedImg =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const likedUrl = isLiked ? likedImg : likeImg
  const likedName = isLiked ? 'blueClass' : ''

  const likeToggle = () => {
    isLikeToggle(id)
  }
  const deleteUser = () => {
    isDeleteUser(id)
  }
  return (
    <li className="listEle">
      <div className="nameSection">
        <div>
          <p className={`letterStyle ${letterColor}`}>{name.slice(0, 1)}</p>
        </div>
        <div className="nameDetails">
          <div className="nameDate">
            <h2 className="nameStyel">{name}</h2>
            <p className="time">{seen}</p>
          </div>
          <div className="parawidth">
            <p className="comment">{comment}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="buttonsDiv">
          <button type="button" className="likeBtn" onClick={likeToggle}>
            <img alt="like" className="likeImage" src={likedUrl} />
            <span className={`${likedName} LikeClass`}>Like</span>
          </button>
          <button type="button" className="deleteBtn" data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="deleteIcon"
              onClick={deleteUser}
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
