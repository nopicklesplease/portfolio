import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/theme';
import * as Scroll from 'react-scroll';
import Resume from './Ryan-S-Resume.pdf';
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';

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

    const Link = Scroll.Link;

    return(
        <div className={`${(theme) && 'dark'} sticky top-0 pt-4 md:pt-10 z-50 bg-white dark:bg-slategray`}>
            <div className='flex-column md:flex border-b-8 border-b-black pb-4 m-0 items-end font-roboto dark:border-b-white'>
                <div id='header' className='flex-none text-justify text-9xl md:text-airHeader 790px:text-7xl 960px:text-desktopHeader m-0 p-0 px-4 md:px-0 tracking-widest font-extralight'>
                    RYAN S.
                </div>

                <div className='md:flex-1'>
                </div>

                <div className='flex items-end w-full md:w-auto md:block xl:flex pt-2 px-4 md:px-0'>
                    <div className='hidden w-56 pb-2 md:w-auto md:flex md:pb-4 md:items-center xl:mr-14 xl:pb-2 md:justify-end focus:outline-black'>
                        {(theme) ?
                            <div className='flex items-center'> 
                            <div className='flex font-tech font-light text-xs pr-1'>DARK MODE</div> <i tabindex='0' onClick={ () => dispatch(toggleTheme())} className="fa-solid flex fa-moon fa-lg ml-3 cursor-pointer text-yellow dark:hover:text-white focus:outline-black"></i>
                            </div>
                        :
                            <div className='flex items-center'>
                                <div className='flex font-tech font-light text-xs pr-1'>LIGHT MODE</div> <i tabindex='0' onClick={ () => dispatch(toggleTheme())} className="fa-solid flex fa-sun fa-lg ml-1.5 text-orange cursor-pointer hover:text-black focus:outline-black"></i>
                            </div>
                        }
                    </div>
                    
                    <div className='
                        flex 
                        justify-between 
                        flex-initial 
                        w-full 
                        md:w-290px 
                        840px:w-80 
                        1150px:w-96 
                        items-end 
                        tracking-wide 
                        max-[360px]:text-xs
                        max-[400px]:text-sm
                        max-[450px]:text-base
                        max-[500px]:text-lg
                        max-[600px]:text-xl 
                        max-[767px]:text-2xl 
                        md:text-base 
                        840px:text-lg 
                        1150px:text-xl 
                        font-light
                    '>

                        <div className='flex max-[360px]:pb-themepb360 max-[400px]:pb-themepb400 max-[450px]:pb-themepb450 max-[600px]:pb-themepb500 pb-themepb600 md:hidden'>
                            {(theme) ?
                                <i onClick={ () => dispatch(toggleTheme())} className="fa-solid fa-moon fa-lg ml-3 cursor-pointer text-yellow"></i>
                            :
                                <i onClick={ () => dispatch(toggleTheme())} className="fa-solid flex fa-sun fa-lg ml-1.5 text-orange cursor-pointer"></i>
                            }
                        </div>
                        <div>
                            <Link tabindex='0' activeClass={`${theme ? 'dark-active' : 'active'}`} className={`p-1 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-black`} to="about" spy={true} smooth={true} offset={-200} isDynamic={true} duration={800}>
                                ABOUT
                            </Link>
                        </div>
                        <div>
                            <Link tabindex='0' activeClass={`${theme ? 'dark-active' : 'active'}`} className={`p-1 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-black`} to="work" spy={true} smooth={true} offset={-147} isDynamic={true} duration={800}>
                                WORK
                            </Link>
                        </div>
                        <div>
                            <Link tabindex='0' activeClass={`${theme ? 'dark-active' : 'active'}`} className={`p-1 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-black`} to="contact" spy={true} smooth={true} offset={-145} isDynamic={true} duration={900}>
                                CONTACT
                            </Link>
                        </div>
                        <div>
                            <a tabindex='0' href={ Resume } className={`p-1 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-black`} download>RÉSUMÉ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;