import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import Content from './Content';
import { toggleTheme } from './store/theme';

const Home = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    const dispatch = useDispatch();

    return(
        <div className={`${(theme) && 'dark'}`}>
            <div className='w-screen h-screen dark:bg-slategray dark:text-white'>
                <div className='mx-20 pt-10'>
                    <Nav />
                    <div>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;