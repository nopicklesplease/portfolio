import React from 'react';
import { useSelector } from 'react-redux';
import headshot from './headshot.jpeg';
import CoreProf from './CoreProf';
import Headshot from './Headshot';
import CoreProfHeader from './CoreProfHeader';
import About from './About';

const Content = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className='z-auto'>
            <div className={`flex bg-offgray h-auto ${(theme) && 'dark'}`}>

                {/* TABLET CONTENT SIDE TITLE */}

                <div className='lg:flex-initial bg-blue dark:bg-purple border-r-50 border-yellow dark:border-green'>
                        <div className='lg:transform lg:-rotate-90 lg:-ml-16 lg:-mr-16 lg:pr-4 lg:align-middle lg:mt-abouttop lg:pt-1 text-white text-6xl font-roboto font-extralight tracking-wide w-50 lg:w-auto'>
                            <p className='hidden lg:flex'>ABOUT</p> 
                        </div>
                </div>

                {/* TABLET CONTENT BODY */}

                <div className='hidden md:block md:flex-column 915px:hidden'>
                    <div className='flex h-auto'>
                        <div className='flex-1 bg-white dark:bg-slategray'>
                            <div className='915px:hidden p-10 pb-0 text-5xl font-light font-roboto bg-white dark:bg-slategray text-blue dark:text-lightgray'>
                                ABOUT
                            </div>
                            <div className='bg-white p-10 pt-9 font-roboto font-light first-line:uppercase first-line:tracking-widest
                            first-letter:text-5xl first-letter:font-normal
                            first-letter:mr-3 first-letter:float-left text-justify dark:bg-slategray dark:text-lightgray'>
                                <About />
                            </div>
                        </div>
                        <div className='flex w-smrightspace'>
                            <div className='flex w-smrightspace 915px:w-medrightspace justify-center bg-red p-10 dark:bg-darkgray'>
                                <Headshot />
                            </div>
                        </div>
                    </div>
                    <div className='bg-offgray dark:bg-darkergray'>
                        <div className='p-10 pb-3 flex'>
                            <CoreProfHeader />
                        </div>
                        <div className='flex flex-wrap p-10 pt-0 text-sm'>
                            <CoreProf />
                        </div>
                    </div>
                </div>

                {/* MOBILE & DESKTOP CONTENT BODY */}

                <div className='md:hidden md:flex-5 915px:block 915px:flex-1 border-r-100 border-red dark:bg-darkergray dark:border-darkgray md:border-0'>
                    <div className='hidden md:block lg:hidden bg-white dark:bg-slategray p-10 pb-0 text-5xl font-light font-roboto text-blue dark:text-lightgray'>
                        ABOUT
                    </div>
                    <div>
                        <img className='md:hidden 1150px:w-pic' src={ headshot } alt='headshot'/>
                    </div>
                    <div className='bg-white p-10 px-6 450px:p-10 450px:pt-9 md:px-10 font-roboto font-light text-base lg:text-pointninefive first-line:uppercase first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-normal
                    first-letter:mr-3 first-letter:float-left text-justify dark:bg-slategray dark:text-lightgray tracking-wider'>
                        <About />
                    </div>
                
                    <div className='p-6 pt-10 450px:p-10 pb-3 mt-0 450px:mt-10 md:mt-0 md:px-10 flex bg-offgray dark:bg-darkergray md:dark:bg-darkergray'>
                        <CoreProfHeader />
                    </div>

                    <div className='flex flex-wrap p-6 pb-10 450px:p-10 pt-0 md:mb-0 text-sm md:text-xs md:px-10 1150px:text-sm bg-offgray dark:bg-darkergray md:dark:bg-darkergray tracking-wider'>
                        <CoreProf />
                    </div>
                </div>

                {/* DESKTOP HEADSHOT */}

                <div className='hidden 915px:flex w-smrightspace 915px:w-medrightspace 
                1150px:w-rightspace 1150px:flex-initial justify-center bg-red p-10 dark:bg-darkgray'>
                    <Headshot />
                </div>
            </div>
        </div>
    )
};

export default Content;