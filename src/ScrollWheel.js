import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ScrollWheel = () => {
    return(
            <div className="scrolldown-wrapper">
                <div className="scrolldown">
                        <svg height="30" width="10">
                            <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
                            <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
                        </svg>
                </div>
            </div>
    )
}

export default ScrollWheel;