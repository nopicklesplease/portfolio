import React from 'react';
import { useSelector } from 'react-redux';
import headshot from './headshot.jpeg'

const Content = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`flex h-screen ${(theme) && 'dark'}`}>
            <div className='flex-initial bg-blue dark:bg-purple'>
                <div className='transform -rotate-90 align-middle mt-12 text-white'>
                    HOME
                </div>
            </div>
            <div className='flex-1 bg-yellow p-8 dark:bg-green'>
                What is the thing we're gonna write here
            </div>
            <div className='flex-1 bg-red p-8 dark:bg-orange'>
                <div>
                    <img src={ headshot }/>
                </div>
            </div>
        </div>
    )
};

export default Content;