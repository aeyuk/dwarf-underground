import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Article from './Article'
import Ad from './Ad'
import Footer from './Footer'
import Clickbait from './Clickbait'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

          <main className="expanded row">
            <Article />
              //ArticleBody.js and ArticleLink.js included within Article.js

            <Ad />

            <Clickbait />

          </main>

       <Footer />

      </div>
    );
  }
}

export default App;
