import React, { Component } from 'react'
import SingleOrcs from './SingleOrcs'
import Mountain from './Mountain'
import WeirdTrick from './WeirdTrick'
import Surprise from './Surprise'

class Clickbait extends Component {
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                    <SingleOrcs />
                    <Mountain />
                    <WeirdTrick />
                    <Surprise />    
            </div>
        )
    }
}

export default Clickbait