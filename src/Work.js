import React from 'react';
import { useSelector } from 'react-redux';
import png from './png.png';

const Work = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`flex h-full ${(theme) && 'dark'}`}>
            <div className='flex-initial bg-blue dark:bg-purple'>
                <div className='transform -rotate-90 -ml-work -mr-work pr-4 align-middle mt-worktop pt-1 text-white text-6xl font-poppins  font-extralight tracking-wide'>
                    WORK 
                </div>
            </div>
            <div className='flex-1 h-full bg-yellow p-6 font-roboto font-light first-line:uppercase first-line:tracking-widest
            first-letter:text-5xl first-letter:font-normal
            first-letter:mr-3 first-letter:float-left text-justify dark:bg-green w-full'>
                <img alt='iphone2' src={ png }/>
            </div>
        </div>
    )
};

export default Work;