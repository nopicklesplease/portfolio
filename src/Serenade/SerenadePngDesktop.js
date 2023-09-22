import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import SerenadeFinal1 from '../Mockups/Serenade-Final1.png';
import SerenadeFinal2 from '../Mockups/Serenade-Final2.png';
import SerenadeFinal3 from '../Mockups/Serenade-Final3.png';
import SerenadeFinal4 from '../Mockups/Serenade-Final4.png';
import SerenadeLink from './SerenadeLink';

const SerenadePngDesktop = () => {

    return (
        <div className='flex-5 h-auto bg-white p-6 pt-8 font-roboto font-light pr-10 dark:bg-darkergray 915px:dark:bg-slategray w-full overflow-hidden'>
            <Parallax
                translateX={['-400px', '0px']}
                opacity={[0, 1, 'easeOutBack']}
                startScroll={0}
                endScroll={450}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ SerenadeLink } title='Launch Serenade' target='_blank'>
                    <img className='mb-12 mt-2' alt='Serenade' src={ SerenadeFinal1 }/>
                </Link>
            </Parallax>
            <Parallax
                translateX={['400px', '0px']}
                opacity={[0, 1, 'easeOutBack']}
                startScroll={0}
                endScroll={450}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ SerenadeLink } title='Launch Serenade' target='_blank'>
                    <img className='mb-12 1150px:mb-6' alt='Serenade' src={ SerenadeFinal2 }/>
                </Link>
            </Parallax>
            <Parallax
                translateX={['-400px', '0px']}
                opacity={[0, 1, 'easeOutBack']}
                startScroll={0}
                endScroll={450}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ SerenadeLink } title='Launch Serenade' target='_blank'>
                    <img className='mb-12 mt-2 1150px:hidden' alt='Serenade' src={ SerenadeFinal3 }/>
                </Link>
            </Parallax>
            <Parallax
                translateX={['400px', '0px']}
                opacity={[0, 1, 'easeOutBack']}
                startScroll={0}
                endScroll={450}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ SerenadeLink } title='Launch Serenade' target='_blank'>
                    <img className='mb-6 880px:hidden' alt='Serenade' src={ SerenadeFinal4 }/>
                </Link>
            </Parallax>
        </div>
    )
}

export default SerenadePngDesktop;