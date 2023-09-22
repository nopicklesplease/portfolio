import React from 'react';
import { Link } from 'react-router-dom';
import CalcLink from './CalcLink';
import CalcFinal1 from '../Mockups/Calc-Final1.png';
import CalcFinal2 from '../Mockups/Calc-Final2.png';
import CalcFinal3 from '../Mockups/Calc-Final3.png';
import { Parallax } from 'react-scroll-parallax';

const CalcPngMobile = () => {
    return(
        <div className='flex-5 h-auto bg-white p-6 pt-8 font-roboto font-light pr-10 dark:bg-darkergray w-full overflow-hidden'>
            <Parallax
                translateX={['-400px', '0px']}
                startScroll={0}
                endScroll={3875}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ CalcLink } title='Launch Just-A-Calculator' target='_blank'>
                    <img className='mb-12 mt-4' alt='Serenade' src={ CalcFinal2 }/>
                </Link>
            </Parallax>
            <Parallax
                translateX={['400px', '0px']}
                startScroll={0}
                endScroll={3875}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ CalcLink } title='Launch Just-A-Calculator' target='_blank'>
                    <img className='mb-12' alt='Serenade' src={ CalcFinal1 }/>
                </Link>
            </Parallax>
            <Parallax
                translateX={['-400px', '0px']}
                startScroll={0}
                endScroll={3875}
                shouldAlwaysCompleteAnimation={true}
            >
                <Link to={ CalcLink } title='Launch Just-A-Calculator' target='_blank'>
                    <img className='mb-6 mt-4' alt='Serenade' src={ CalcFinal3 }/>
                </Link>
            </Parallax>
        </div>
    )
}

export default CalcPngMobile;