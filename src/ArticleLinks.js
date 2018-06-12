import React, { Component } from 'react'

class ArticleLinks extends Component {
    commentBox() {
      const input = document.getElementById('commentBox')
      input.style.display = 'block'
    }
    render () {
        return (
          <div className="article-links">
            <a className="article-link" href="#" onClick={() => this.commentBox()}>
              <i className="fa fa-comments-o"></i>
              <span className="article-link-text">Comments</span>
            </a>
            <input type="text" id="commentBox" style={{display: 'none'}}></input>
            <a className="article-link" href="#">
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>
          </div>

        )
    }
}

export default ArticleLinks