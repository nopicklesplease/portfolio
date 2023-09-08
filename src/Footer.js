import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div>
            <div className={`${(theme) && 'dark'} flex-column items-center justify-start p-10 top-0 z-50 border-t-8 border-t-black bg-darkgray text-4xl text-white dark:bg-slategray dark:border-t-white md:hidden`}>
                <Link to='https://www.linkedin.com/in/rsariego/' target='_blank'><i className="fa-brands fa-linkedin"></i></Link>

                <Link to='https://github.com/nopicklesplease' target='_blank'><i className="fa-brands fa-github  ml-4"></i></Link>

                <div className='pt-6 font-roboto font-light text-lg tracking-widest'>
                    RYAN S.
                </div>

                <div className='pt-2 font-roboto font-light text-sm tracking-widest'>
                    Software engineer looking for a job y'all
                </div>
            </div>

            <div className={`${(theme) && 'dark'} flex items-center justify-end top-0 pt-2 pb-8 z-50 border-t-8 border-t-black bg-white dark:bg-slategray dark:border-t-white hidden md:flex`}>
                <i className="fa-regular fa-copyright mr-2"></i> 2023
            </div>
        </div>
    )
}

export default Footer;