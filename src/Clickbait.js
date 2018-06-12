import React, { Component } from 'react'
import SingleOrcs from './SingleOrcs'
import Mountain from './Mountain'
import Suprise from './Surprise'
import WeirdTrick from './WeirdTrick'

class Clickbait extends Component {
    constructor (props) {
        super(props)

        const objArray = []

        const obj1 = {
            component: <SingleOrcs/>,
        }
        objArray[0] = obj1;

        const obj2 = {
            component: <WeirdTrick/>
        }
        objArray[1] = obj2;

        const obj3 = {
            component: <Mountain/>
        }
        objArray[2] = obj3;

        const obj4 = {
            component: <Suprise/>
        }
        objArray[3] = obj4;

        this.state = { objArray }
    }
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                    {this.state.objArray.map((obj) => (
                        <div>
                            {obj.component}
                        </div>
                    ))}
            </div>
        )
    }
}

export default Clickbait
