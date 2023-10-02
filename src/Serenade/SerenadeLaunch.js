import React from 'react';
import { Link } from 'react-router-dom';
import SerenadeLink from './SerenadeLink';

const SerenadeLaunch = () => {
    return(
        <>
            <Link tabindex='-1' to={ SerenadeLink } title='Launch Serenade' target='_blank'>
                <span className='bg-black p-3 text-white rounded md:hover:bg-yellow md:hover:text-black cursor-pointer'>LAUNCH PROJECT</span>
            </Link>
        </>
    )
}

export default SerenadeLaunch;