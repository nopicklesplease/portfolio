import React from 'react';
import { Link } from 'react-router-dom';
import SerenadeLink from './SerenadeLink';

const SerenadeTitle = () => {
    return(
        <p className='text-4xl md:text-2xl lg:text-3xl 1150px:text-4xl text-slategray dark:text-white  tracking-widest font-light p-10 md:py-0 md:mb-10'>
            <Link to={ SerenadeLink } title='Launch Serenade' target='_blank'>SERENADE <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span>
            </Link>
        </p>
    )
}

export default SerenadeTitle;