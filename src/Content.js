import React from 'react';
import { useSelector } from 'react-redux';
import headshot from './headshot.jpeg'

const Content = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`flex h-screen ${(theme) && 'dark'}`}>
            <div className='flex-initial bg-blue dark:bg-purple'>
                <div className='transform -rotate-90 -ml-20 -mr-24 pr-4 align-middle mt-24 pt-1 text-white text-7xl'>
                    ABOUT 
                </div>
            </div>
            <div className='flex-1 bg-yellow p-6 dark:bg-green'>
                What is the thing we're gonna write here
            </div>
            <div className='flex-1 bg-red p-8 dark:bg-orange'>
                <div>
                    <img src={ headshot } alt='headshot'/>
                </div>
            </div>
        </div>
    )
};

export default Content;