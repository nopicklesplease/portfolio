import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/theme';
import { Link } from 'react-scroll';
import Resume from './Ryan-S-Resume.pdf';

const Nav = () => {

    const theme = useSelector((state) => state.switchTheme.active);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, [width]);

    const dispatch = useDispatch();

    return(
        <div className={`${(theme) && 'dark'} sticky top-0 pt-10 z-50 bg-white dark:bg-slategray`}>
            <div className='flex border-b-8 border-b-black pb-4 items-end font-roboto dark:border-b-white'>
                <div className='flex-none text-7xl 960px:text-8xl m-0 tracking-widest font-extralight'>
                    RYAN S.
                </div>
                <div className='flex-1'>
                </div>
                    <div className='xl:flex'>
                    <div className='flex pb-4 items-center xl:mr-14 xl:pb-1 justify-end'>
                        {(theme) ?
                            <> 
                            <span className='font-tech font-light text-xs'>DARK MODE</span> <i onClick={ () => dispatch(toggleTheme())} className="fa-solid fa-moon fa-lg ml-3 cursor-pointer text-yellow dark:hover:text-white"></i>
                            </>
                        :
                            <>
                            <span className='flex font-tech font-light text-xs pr-1'>LIGHT MODE</span>
                                <i onClick={ () => dispatch(toggleTheme())} className="fa-solid flex fa-sun fa-lg ml-1.5 text-orange cursor-pointer hover:text-black"></i>
                            </>
                        }
                    </div>
                    <div className='flex justify-between flex-initial w-272px 840px:w-80 1150px:w-96 items-end tracking-wide text-md 840px:text-lg 1150px:text-xl font-light'>
                        
                        <div className='border-b-2 border-b-transparent hover:border-solid hover:border-b-blue dark:hover:border-b-purple cursor-pointer'>
                            <Link activeClass={`${theme ? 'dark-active' : 'active'}`} to="about" spy={true} smooth={true} offset={-200} duration={500}>
                                ABOUT
                            </Link>
                        </div>
                        <div className='border-b-2 border-b-transparent hover:border-solid hover:border-b-blue dark:hover:border-b-purple cursor-pointer'>
                            <Link activeClass={`${theme ? 'dark-active' : 'active'}`} to="work" spy={true} smooth={true} offset={-160} duration={500}>
                                WORK
                            </Link>
                        </div>
                        <div className='border-b-2 border-b-transparent hover:border-solid hover:border-b-blue dark:hover:border-b-purple cursor-pointer'>
                            <Link activeClass={`${theme ? 'dark-active' : 'active'}`} to="contact" spy={true} smooth={true} offset={-160} duration={900}>
                                CONTACT
                            </Link>
                        </div>
                        <div className='border-b-2 border-b-transparent hover:border-solid hover:border-b-blue dark:hover:border-b-purple cursor-pointer'>
                            <a href={ Resume } download>RÉSUMÉ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;