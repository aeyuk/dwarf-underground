import React, { Component } from 'react'
import SingleOrcs from './SingleOrcs'
import Mountain from './Mountain'
import WeirdTrick from './WeirdTrick'
import Surprise from './Surprise'

class Clickbait extends Component {
    constructor (props) {
        super(props)

        const objArray = []

        const obj1 = {
            kind: "small-6 medium-3 columns other-article",
            img: <img src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt="orc"/>,
            p: <p>Single Orcs in Indianapolis</p>,
        }
        objArray[0] = obj1;

        const obj2 = {
            kind: "small-6 medium-3 columns other-article",
            img: <img src="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" alt="mountain"/>,
            p: <p>You won\'t believe what\'s under this mountain</p>,
        }
        objArray[1] = obj2;

        const obj3 = {
            kind: "small-6 medium-3 columns other-article", 
            img: <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold"/>,
            p: <p>Mine 20% more gold with One Weird Trick</p>,
        }
        objArray[2] = obj3;

        const obj4 = {
            kind: "small-6 medium-3 columns other-article",
            img: <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit"/>,
            p: <p>Surprise for Indiana Hobbits born before 1999</p>,
        }
        objArray[3] = obj4;

        this.state = { objArray }
    }
    render() {
        return (
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                    {this.state.objArray.map((obj) => (
                        <div className={obj.kind}>
                            <a href='#'>
                                {obj.img}
                                {obj.p}
                            </a>
                        </div>
                    ))}
            </div>
        )
    }
}

export default Clickbait
/*
<SingleOrcs />
<Mountain />
<WeirdTrick />
<Surprise />
                    */