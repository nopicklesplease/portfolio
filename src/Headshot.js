import React from 'react';
import headshot from './headshot.jpeg';
import { Link } from 'react-router-dom';

const Headshot = () => {
    return(
            <div className='text-white text-5xl'>
                <img className='lg:w-pic 1150px:w-pic 2xl:w-bigpic rounded-md' src={ headshot } alt='headshot'/>
                <Link to='https://www.linkedin.com/in/rsariego/' title='LinkedIn Profile' target='_blank'>
                    <i className="fa-brands fa-linkedin mt-4 hover:text-black dark:hover:text-yellow"></i>
                </Link>
                <Link to='https://github.com/nopicklesplease' title='Github Profile' target='_blank'>
                    <i className="fa-brands fa-github mt-4 ml-4 hover:text-black dark:hover:text-yellow"></i>
                </Link>
            </div>
    )
}

export default Headshot;