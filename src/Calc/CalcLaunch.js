import React from 'react';
import { Link } from 'react-router-dom';
import CalcLink from './CalcLink';

const CalcLaunch = () => {
    return(
        <>
            <Link tabindex='-1' to={ CalcLink } title='Launch Just-A-Calculator' target='_blank'>
                <span className='bg-black text-white p-3 rounded cursor-pointer md:hover:bg-yellow md:hover:text-black '>LAUNCH PROJECT</span>
            </Link>
        </>
    )
}

export default CalcLaunch;