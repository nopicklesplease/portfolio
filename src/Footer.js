import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`${(theme) && 'dark'} flex items-center justify-end top-0 pt-2 pb-8 z-50 border-t-8 border-t-black bg-white dark:bg-slategray dark:border-t-white`}>
            <i className="fa-regular fa-copyright mr-2"></i> 2023
        </div>
    )
}

export default Footer;