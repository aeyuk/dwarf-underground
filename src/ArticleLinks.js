import React, { Component } from 'react'

class ArticleLinks extends Component {
    commentBox() {
      const textBox = document.getElementById('comment')
      textBox.style.display = 'block'
      
      document.querySelector('button').style.display = 'block'
    }

    addComment() {
      const textBox = document.getElementById('comment')
      const input = document.createTextNode('')
      const lineBreak = document.createElement('br')

      input.textContent = textBox.value;

      const listEl = document.getElementById('comments')
      listEl.appendChild(input)
      listEl.appendChild(lineBreak)

      //reset
      textBox.style.display = 'none'
      document.querySelector('button').style.display = 'none'
      textBox.value = "";

    }

    render () {
        return (
          <div className="article-links">
            <a className="article-link" href="#" onClick={() => this.commentBox()}>
              <i className="fa fa-comments-o"></i>
              <span className="article-link-text">Comments</span>
            </a>
            <div>
              <ul id="comments">
                <input type="text" id="comment" style={{display: 'none'}}></input>
                <button type='submit' style={{display: 'none'}} onClick={() => this.addComment()}>Submit Comment</button>
              </ul>
            </div>
            <a className="article-link" href="#">
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>
          </div>

        )
    }
}

export default ArticleLinks