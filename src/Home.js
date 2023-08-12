import React from 'react';
import { useSelector } from 'react-redux';
import Nav from './Nav';
import Content from './Content';

const Home = () => {

    const theme = useSelector((state) => state.switchTheme.active);

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