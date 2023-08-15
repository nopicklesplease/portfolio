import React from 'react';
import { useSelector } from 'react-redux';
import headshot from './headshot.jpeg'

const Content = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className='z-auto'>
            <div className={`flex h-screen ${(theme) && 'dark'}`}>
                <div className='flex-initial bg-blue dark:bg-purple'>
                    <div className='transform -rotate-90 -ml-16 -mr-16 pr-4 align-middle mt-abouttop pt-1 text-white text-6xl font-poppins  font-extralight tracking-wide'>
                        ABOUT 
                    </div>
                </div>
                <div className='flex-1 bg-white border-l-50 border-yellow p-6 font-roboto font-light first-line:uppercase first-line:tracking-widest
                first-letter:text-5xl first-letter:font-normal
                first-letter:mr-3 first-letter:float-left text-justify dark:border-green dark:bg-slategray dark:text-lightgray'>
                    What is the thing we're gonna write here? Well what if it were to be something interesting about myself that would attract the reader to go on and read more?

                    Yeah hey is this thing on
                </div>
                <div className='flex-initial flex justify-center bg-red p-8 dark:bg-orange'>
                    <div>
                        <img className='w-96' src={ headshot } alt='headshot'/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;