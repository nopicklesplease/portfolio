import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store/theme';

const Nav = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    const dispatch = useDispatch();

    return(
        <div className={`${(theme) && 'dark'}`}>
            <div className={'flex border-b-8 border-b-black pb-4 dark:border-b-white'}>
                <div className='flex-none'>
                    NO PICKLES
                </div>
                <div className='flex-1'>
                </div>
                <div className='mr-8 cursor-pointer'>
                    {(theme) ? 
                        <i onClick={ () => dispatch(toggleTheme())} className="fa-solid fa-sun"></i>
                    :
                        <i onClick={ () => dispatch(toggleTheme())} className="fa-solid fa-moon"></i>
                    }
                </div>
                <div className='flex justify-between flex-initial w-80'>
                    <div>
                        ABOUT
                    </div>
                    <div>
                        WORK
                    </div>
                    <div>
                        RESUME
                    </div>
                    <div>
                        CONTACT
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;