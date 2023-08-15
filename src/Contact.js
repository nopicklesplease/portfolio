import React from 'react';
import { useSelector } from 'react-redux';
import headshot from './headshot.jpeg'

const Contact = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`flex h-screen ${(theme) && 'dark'}`}>
            <div className='flex-initial bg-blue dark:bg-purple'>
                <div className='transform -rotate-90 -ml-contact -mr-contact pr-4 align-middle mt-contacttop pt-1 text-white text-6xl font-poppins  font-extralight tracking-wide'>
                    CONTACT
                </div>
            </div>
            <div className='flex-1 bg-yellow p-6 font-roboto font-light first-line:uppercase first-line:tracking-widest
            first-letter:text-5xl first-letter:font-normal
            first-letter:mr-3 first-letter:float-left text-justify dark:bg-green'>
                What is the thing we're gonna write here? Well what if it were to be something interesting about myself that would attract the reader to go on and read more?

                Yeah hey is this thing on
            </div>
            <div className='flex-initial flex justify-center bg-red p-8 dark:bg-orange'>
                <div>
                    <img className='w-96' src={ headshot } alt='headshot'/>
                </div>
            </div>
        </div>
    )
};

export default Contact;