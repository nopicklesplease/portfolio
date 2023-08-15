import React from 'react';
import { useSelector } from 'react-redux';
import headshot from './headshot.jpeg';

const Work = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`flex h-screen ${(theme) && 'dark'}`}>
            <div className='flex-initial bg-blue dark:bg-purple'>
                <div className='transform -rotate-90 -ml-work -mr-work pr-4 align-middle mt-worktop pt-1 text-white text-6xl font-poppins  font-extralight tracking-wide'>
                    WORK 
                </div>
            </div>
            <div className='flex-1 bg-yellow p-6 font-roboto font-light first-line:uppercase first-line:tracking-widest
            first-letter:text-5xl first-letter:font-normal
            first-letter:mr-3 first-letter:float-left text-justify dark:bg-green w-full'>
                What is the thing we're gonna write here? Well what if it were to be something interesting about myself that would attract the reader to go on and read more?

                Yeah hey is this thing on
            </div>
        </div>
    )
};

export default Work;