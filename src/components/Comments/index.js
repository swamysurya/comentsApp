import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const comments = []

// Write your code here
class Comments extends Component {
  state = {
    commentsList: comments,
    nameInputValue: '',
    commnetInputValue: '',
  }

  nameInput = event => {
    this.setState({nameInputValue: event.target.value})
  }

  commentInput = event => {
    this.setState({commnetInputValue: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {nameInputValue, commnetInputValue} = this.state
    if (nameInputValue === '' || commnetInputValue === '') {
      return
    }
    const nameColor =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    const commentObj = {
      id: uuidv4(),
      name: nameInputValue,
      comment: commnetInputValue,
      isLiked: false,
      letterColor: nameColor,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, commentObj],
      nameInputValue: '',
      commnetInputValue: '',
    }))
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }

        return eachComment
      }),
    }))
  }

  deleteUser = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => id !== eachComment.id,
      ),
    }))
  }

  render() {
    const {commentsList, nameInputValue, commnetInputValue} = this.state
    // console.log(`this is commnet value : ${commnetInputValue}`)
    const commentsImageUrl =
      'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'

    return (
      <div className="bgContainer">
        <h1 className="commentsheading">Comments</h1>
        <div className="formCard">
          <img src={commentsImageUrl} className="image1" alt="comments" />
          <div className="form">
            <p className="sayPara">Say something about 4.0 Technologies</p>
            <form className="inputAreas" onSubmit={this.onSubmitForm}>
              <input
                type="text"
                placeholder="Your Name"
                className="nameInput"
                onChange={this.nameInput}
                value={nameInputValue}
              />
              <textarea
                cols="33"
                rows="7"
                placeholder="Your Comment"
                className="commnetText"
                onChange={this.commentInput}
                value={commnetInputValue}
              />
              <button type="submit" className="btnStyle">
                {' '}
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="horizontalLine" />
        <p className="paraEle">
          <span className="countSpan">{commentsList.length}</span> comments
        </p>
        <ul className="ulConatiener">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              colors={initialContainerBackgroundClassNames}
              commentDetals={eachComment}
              isLikeToggle={this.toggleLike}
              isDeleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
