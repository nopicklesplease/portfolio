import React from 'react';
import { Link } from 'react-router-dom';
import CalcLink from './CalcLink';
import CalcFinal1 from '../Mockups/Calc-Final1.png';
import CalcFinal2 from '../Mockups/Calc-Final2.png';
import CalcFinal3 from '../Mockups/Calc-Final3.png';
import CalcFinal4 from '../Mockups/Calc-Final4.png';
import { Parallax } from 'react-scroll-parallax';

const CalcPngDesktop = () => {
    return(
        <div className='flex-1 h-full bg-white p-6 pt-10 font-roboto font-light pr-10 dark:bg-slategray w-full h-auto overflow-hidden'>
            <Parallax
                translateX={['-400px', '0px']}
                startScroll={750}
                endScroll={1500}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ CalcLink } title='Launch Just-A-Calculator' target='_blank'>
                    <img className='mb-12 mt-2' alt='Launch Just-A-Calculator' src={ CalcFinal2 }/>
                </Link>
            </Parallax>
            <Parallax
                translateX={['400px', '0px']}
                startScroll={750}
                endScroll={1500}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ CalcLink } title='Launch Just-A-Calculator' target='_blank'>
                    <img className='mb-12 1150px:mb-6' alt='Launch Just-A-Calculator' src={ CalcFinal1 }/>
                </Link>
            </Parallax>
            <Parallax
                translateX={['-400px', '0px']}
                startScroll={750}
                endScroll={1500}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ CalcLink } title='Launch Just-A-Calculator' target='_blank'>
                    <img className='mb-12 880px:mb-6 1150px:hidden' alt='Launch Just-A-Calculator' src={ CalcFinal3 }/>
                </Link>
            </Parallax>
            <Parallax
                translateX={['400px', '0px']}
                startScroll={750}
                endScroll={1500}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ CalcLink } title='Launch Just-A-Calculator' target='_blank'>
                    <img className='mb-6 880px:hidden' alt='Launch Just-A-Calculator' src={ CalcFinal4 }/>
                </Link>
            </Parallax>
        </div>
    )
}

export default CalcPngDesktop;