import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div>

            {/* MOBILE FOOTER */}

            <div className={`${(theme) && 'dark'} flex-column items-center justify-start p-10 top-0 z-50 border-t-8 border-t-black bg-darkgray text-4xl text-white dark:border-t-white md:hidden`}>
                <Link to='https://www.linkedin.com/in/rsariego/' target='_blank'>
                    <i className="fa-brands fa-linkedin text-yellow"></i>
                </Link>
                <Link to='https://github.com/nopicklesplease' target='_blank'>
                    <i className="fa-brands fa-github  ml-4 text-yellow"></i>
                </Link>
                <div className='pt-6 font-roboto text-lg tracking-widest'>
                    RYAN S.
                </div>
                <div className='pt-3 font-roboto font-light text-sm tracking-widest flex-column'>
                    <p>Open to all Front-End Development opportunities. If you're interested in my work, please contact me and I'll respond promptly.</p>
                    <p className='flex justify-end pt-6'>
                        <i className="fa-regular fa-copyright mr-2"></i> 2023
                    </p>
                </div>
            </div>

            {/* DESKTOP FOOTER */}

            <div className={`${(theme) && 'dark'} flex items-center justify-end top-0 pt-2 pb-8 z-50 border-t-8 border-t-black bg-white dark:bg-slategray dark:border-t-white hidden md:flex`}>
                <i className="fa-regular fa-copyright mr-2"></i> 2023
            </div>
        </div>
    )
}

export default Footer;