import React from 'react';
import { useSelector } from 'react-redux';
import SerenadeFinal1 from './Mockups/Serenade-Final1.png';
import SerenadeFinal2 from './Mockups/Serenade-Final2.png';
import CalcFinal1 from './Mockups/Calc-Final1.png';
import CalcFinal2 from './Mockups/Calc-Final2.png';
import { Parallax } from 'react-scroll-parallax';

const Work = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`flex h-full ${(theme) && 'dark'}`}>
                <div className='flex-initial bg-blue dark:bg-purple sticky border-r-50 border-yellow dark:border-green'>
                    <Parallax
                        translateY={['800px', '0px']}
                        startScroll={0}
                        endScroll={700}
                        shouldAlwaysCompleteAnimation={true}
                    >

                            <div className='lg:transform lg:-rotate-90 lg:-ml-work lg:-mr-work lg:pr-4 lg:align-middle lg:mt-worktop lg:pt-1 text-white text-6xl font-poppins font-extralight tracking-wide dark:text-white w-50 lg:w-auto'>
                                <p className='hidden lg:flex'>WORK</p> 
                            </div>

                    </Parallax>
            </div>
            <div className='flex-column'>
                <div className='flex'>
                    <div className='flex-5 h-auto bg-offgray p-6 pt-8 font-roboto font-light pr-10 dark:bg-darkergray w-full overflow-hidden'>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={0}
                            endScroll={700}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <img className='mb-24 mt-2' alt='Serenade' src={ SerenadeFinal1 }/>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={0}
                            endScroll={700}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <img className='mb-24 1150px:mb-6' alt='Serenade' src={ SerenadeFinal2 }/>
                        </Parallax>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={0}
                            endScroll={700}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <img className='mb-6 mt-2 1150px:hidden' alt='Serenade' src={ SerenadeFinal1 }/>
                        </Parallax>
                    </div>
                    <div className='flex justify-center font-roboto bg-darkred pt-10 dark:bg-darkgray 
                    w-smrightspace
                    915px:w-medrightspace
                    1150px:w-rightspace dark:bg-rightoffgray'>
                        <div className='text-white text-sm'>
                            <p className='text-4xl tracking-widest font-light px-10 mb-10'>
                                SERENADE
                            </p>
                            <div className='bg-red p-10 dark:bg-darkgray'>
                                <p className='text-lg mb-3 tracking-widest'>
                                    PROJECT OVERVIEW
                                </p>
                                <p className='mb-10 text-sm text-justify'>
                                    A web app that integrates openAI's DaVinci speech model & Spotify's API to interpret user prompts and turn them into creative Spotify playlists.
                                </p>

                                <p className='text-lg mb-3 tracking-widest'>
                                    ROLE & RESPONSIBILITIES
                                </p>
                                <p className='text-sm text-justify'>
                                    Lead Front-End Engineer responsible for UX design, User Profile & My Playlists/Discover components, JSX rendering of Spotify playlist materials, responsive design for mobile.
                                </p>
                            </div>

                            <div className='bg-darkred p-10 dark:bg-rightoffgray'>
                                <p className='text-lg mb-3 tracking-widest'>
                                    TOOLS USED
                                </p>

                                <div className='flex flex-wrap'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>JavaScript</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Redux.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Node.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Express.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>PostgreSQL</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React Router</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>OpenAI API</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Spotify API</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>HTML</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Vanilla CSS</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Adobe Photoshop</div>

                                </div>
                                {/* <div className='flex flex-wrap mt-8'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm text-red'>Live Link</div>
                                </div> */}
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='flex'>
                    <div className='flex-1 h-full bg-white p-6 pt-10 font-roboto font-light pr-10 dark:bg-slategray w-full h-auto overflow-hidden'>
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
                            <img className='mb-24 1150px:mb-2' alt='Just A Calculator' src={ CalcFinal1 }/>
                        </Parallax>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={1000}
                            endScroll={1700}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <img className='mb-2 1150px:hidden' alt='Just A Calculator' src={ CalcFinal2 }/>
                        </Parallax>
                    </div>
                    <div className='flex justify-center font-roboto bg-red pt-10 dark:bg-darkgray 
                    w-smrightspace
                    915px:w-medrightspace
                    1150px:w-rightspace dark:bg-darkgray'>
                        <div className='text-white text-sm'>
                            <p className='text-3xl tracking-widest font-light px-10 mb-10'>
                                JUST A CALCULATOR
                            </p>
                            <div className='bg-darkred p-10 dark:bg-rightoffgray'>
                                <p className='text-lg mb-3 tracking-widest'>
                                    PROJECT OVERVIEW 
                                </p>
                                <p className='mb-8 text-sm text-justify' data-rellax-speed='-4'>
                                    A Bitcoin portfolio tracker disguised as an iOS calculator. Pressing the '+' key on the calculator five times unveils a login screen to access the web application.
                                </p>

                                <p className='text-lg mb-3 tracking-widest'>
                                    ROLE & RESPONSIBILITIES 
                                </p>
                                <p className='text-sm text-justify'>
                                    Creator & Sole Developer
                                </p>
                            </div>

                            <div className='bg-red p-10 dark:bg-darkgray'>
                                <p className='text-lg mb-3 tracking-widest'>
                                    TOOLS USED 
                                </p>

                                <div className='flex flex-wrap'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>JavaScript</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Redux.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Node.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React Router</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>CoinMarketCap API</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>HTML</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Vanilla CSS</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Material-UI</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Work;