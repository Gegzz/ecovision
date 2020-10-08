import React from 'react';
import Slider from 'react-animated-slider';
import verticalCss from '../../assets/scss/react-animated-slider/vertical.scss';
import content from '../../content';
import '../../assets/css/test.css';

function Vertical() {
    return (
        <Slider classNames={verticalCss} direction="vertical">
            {content.map((item, index) => (
                <div
                    key={index}
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="center">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button className="carousel-button">{item.button}</button>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default Vertical;