import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/theme';
import { Link } from 'react-scroll';

const Nav = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    const dispatch = useDispatch();

    return(
        <div className={`${(theme) && 'dark'} sticky top-0 pt-10 z-50 bg-white dark:bg-slategray`}>
            <div className={'flex border-b-8 border-b-black pb-4 items-end font-roboto dark:border-b-white'}>
                <div className='flex-none text-8xl m-0 tracking-widest font-extralight'>
                    RYAN S.
                </div>
                <div className='flex-1'>
                </div>
                <div className='mr-8 cursor-pointer pb-1'>
                    {(theme) ? 
                        <i onClick={ () => dispatch(toggleTheme())} className="fa-solid fa-sun fa-lg"></i>
                    :
                        <i onClick={ () => dispatch(toggleTheme())} className="fa-solid fa-moon fa-lg"></i>
                    }
                </div>
                <div className='flex justify-between flex-initial w-96 items-end tracking-wide text-xl font-light'>
                    
                    <div className='border-b border-b-transparent hover:border-dotted hover:border-b-blue dark:hover:border-b-purple cursor-pointer'>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={350}>
                            ABOUT
                        </Link>
                    </div>
                    <div className='border-b border-b-transparent hover:border-dotted hover:border-b-blue dark:hover:border-b-purple cursor-pointer'>
                        <Link activeClass="active" to="work" spy={true} smooth={true} offset={-160} duration={350}>
                            WORK
                        </Link>
                    </div>
                    <div className='border-b border-b-transparent hover:border-dotted hover:border-b-blue dark:hover:border-b-purple cursor-pointer'>
                        RESUME
                    </div>
                    <div className='border-b border-b-transparent hover:border-dotted hover:border-b-blue dark:hover:border-b-purple cursor-pointer'>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-160} duration={350}>
                            CONTACT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;