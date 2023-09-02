import React from 'react';
import { useSelector } from 'react-redux';
import SerenadeFinal1 from './Mockups/Serenade-Final1.png';
import SerenadeFinal2 from './Mockups/Serenade-Final2.png';
import CalcFinal1 from './Mockups/Calc-Final1.png';
import CalcFinal2 from './Mockups/Calc-Final2.png';
import SaucySlices from './Mockups/SaucySlices-Air1.png';
import RecordLogger from './Mockups/RecordLogger-Air.png';
import { Parallax } from 'react-scroll-parallax';

const Work = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`flex h-full ${(theme) && 'dark'}`}>
                <div className='flex-initial bg-blue dark:bg-purple sticky'>
                    <Parallax
                        translateY={['800px', '0px']}
                        startScroll={0}
                        endScroll={750}
                        shouldAlwaysCompleteAnimation={true}
                    >

                            <div className='transform -rotate-90 -ml-work -mr-work pr-4 align-middle mt-worktop pt-1 text-white text-6xl font-poppins font-extralight tracking-wide dark:text-white'>
                                WORK 
                            </div>

                    </Parallax>
            </div>
            <div className='flex-column'>
                <div className='flex'>
                    <div className='flex-1 h-full border-l-50 border-yellow bg-offgray p-6 pt-8 font-roboto font-light pr-10 dark:bg-darkergray dark:border-green w-full overflow-hidden'>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={0}
                            endScroll={750}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <img className='mb-24 mt-2' alt='Serenade' src={ SerenadeFinal1 }/>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={0}
                            endScroll={750}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <img className='mb-6' alt='Serenade' src={ SerenadeFinal2 }/>
                        </Parallax>
                    </div>
                    <div className='flex justify-center bg-darkred pt-10 dark:bg-darkgray w-rightspace dark:bg-rightoffgray'>
                        <div className='text-white text-sm'>
                            <p className='text-4xl tracking-widest font-light px-10 mb-10'>
                                SERENADE
                            </p>
                            <div className='bg-red p-10 dark:bg-darkgray'>
                                <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                    Project Overview: 
                                </p>
                                <p className='mb-8 text-xs text-justify'>
                                    A web app that integrates openAI's DaVinci speech model & Spotify's API to interpret user prompts and turn them into creative Spotify playlists.
                                </p>

                                <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                    Role & Responsibilities: 
                                </p>
                                <p className='mb-2 text-xs text-justify'>
                                    Lead Front-End Engineer responsible for UX design, User Profile & My Playlists/Discover components, JSX rendering of Spotify playlist materials, responsive design for mobile.
                                </p>
                            </div>

                            <div className='bg-darkred p-10 dark:bg-rightoffgray'>
                                <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                        Tools Used: 
                                    </p>

                                <div className='flex flex-wrap mt-2'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>JavaScript</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>React.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>Redux.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>Node.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>React Router</div>
                                </div>

                                {/* <div className='flex flex-wrap mt-8'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm text-red'>Live Link</div>
                                </div> */}
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='flex'>
                    <div className='flex-1 h-full border-l-50 border-yellow bg-white p-6 pt-10 font-roboto font-light pr-10 dark:bg-slategray dark:border-green w-full overflow-hidden'>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={1000}
                            endScroll={1700}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <img className='mb-24 mt-2' alt='Just A Calculator' src={ CalcFinal2 }/>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={1000}
                            endScroll={1700}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <img className='mb-4' alt='Just A Calculator' src={ CalcFinal1 }/>
                        </Parallax>
                    </div>
                    <div className='flex justify-center bg-red pt-10 dark:bg-darkgray w-rightspace'>
                        <div className='text-white text-sm'>
                            <p className='text-4xl tracking-widest font-light px-10 mb-10'>
                                JUST A CALCULATOR
                            </p>
                            <div className='bg-darkred p-10 dark:bg-rightoffgray'>
                                <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                    Project Overview: 
                                </p>
                                <p className='mb-8 text-xs text-justify' data-rellax-speed='-4'>
                                    A web app that integrates openAI's DaVinci speech model & Spotify's API to interpret user prompts and turn them into creative Spotify playlists.
                                </p>

                                <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                    Role & Responsibilities: 
                                </p>
                                <p className='mb-2 text-xs text-justify'>
                                    Lead Front-End Engineer responsible for UX design, User Profile & My Playlists/Discover components, JSX rendering of Spotify playlist materials, responsive design for mobile.
                                </p>
                            </div>

                            <div className='bg-red p-10 dark:bg-darkgray'>
                                <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                        Tools Used: 
                                    </p>

                                <div className='flex flex-wrap mt-2'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>JavaScript</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>React.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>Redux.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>Node.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-xs'>React Router</div>
                                </div>

                                {/* <div className='flex flex-wrap mt-8'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm text-red'>Live Link</div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Work;