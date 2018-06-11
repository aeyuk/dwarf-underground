import React, { Component } from 'react'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'
import Author from './Author'

class Article extends Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <div className="avatar">
            <img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author" />
                <Author />
            </div>

            <ArticleBody />
            
            <ArticleLinks />

        </div>
        )
    }
}

export default Article