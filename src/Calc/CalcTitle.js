import React from 'react';
import { Link } from 'react-router-dom';
import CalcLink from './CalcLink';

const CalcTitle = () => {
    return(
        <Link to={ CalcLink } title='Launch Just-A-Calculator' target='_blank' className='hover:bg-black hover:text-white'>
            JUST A CALCULATOR <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span>
        </Link>
    )
}

export default CalcTitle;