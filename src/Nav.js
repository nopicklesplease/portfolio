import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/theme';

const Nav = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    const dispatch = useDispatch();

    return(
        <div className={`${(theme) && 'dark'}`}>
            <div className={'flex border-b-8 border-b-black pb-4 items-end font-poppins dark:border-b-white'}>
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
                <div className='flex justify-between flex-initial w-80 items-end tracking-wide'>
                    
                    <div className='border-b border-b-transparent hover:border-dotted hover:border-b-blue'>
                        ABOUT
                    </div>
                    <div className='border-b border-b-transparent hover:border-dotted hover:border-b-blue'>
                        WORK
                    </div>
                    <div className='border-b border-b-transparent hover:border-dotted hover:border-b-blue'>
                        RESUME
                    </div>
                    <div className='border-b border-b-transparent hover:border-dotted hover:border-b-blue'>
                        CONTACT
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;