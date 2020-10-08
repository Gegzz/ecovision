import React from 'react'
import Flicking from '@egjs/react-flicking'
import { Parallax } from '@egjs/flicking-plugins'
import '../../assets/css/plugins.css'
import '../../assets/css/parallax.css'

let plugins = [new Parallax('img', 4)]

const Carousel = () => (
    <>
        <div id="parallax" className="plugins container">
            <Flicking
                className="flicking"
                gap={10}
                circular={true}
                plugins={plugins}
                bound={true}
            >
                <div className="panel">
                    <img src="https://naver.github.io/egjs-flicking/images/bg01.jpg" />
                </div>
                <div className="panel">
                    <img src="https://naver.github.io/egjs-flicking/images/bg02.jpg" />
                </div>
                <div className="panel">
                    <img src="https://naver.github.io/egjs-flicking/images/bg03.jpg" />
                </div>
            </Flicking>
        </div>
    </>
)

export default Carousel