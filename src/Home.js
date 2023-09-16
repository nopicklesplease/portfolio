import React from 'react';
import { useSelector } from 'react-redux';
import Nav from './Nav';
import Content from './Content';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`${(theme) && 'dark'}`}>
            <div className='w-screen h-max bg-white dark:bg-slategray dark:text-white z-50'>
                <div className='md:mx-10 lg:mx-20'>
                    <Nav />
                    <div id='about'>                   
                        <Content />
                    </div>

                    <div id='work'>                   
                        <Work />
                    </div>

                    <div id='contact'>                   
                        <Contact />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;