import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SerenadeFinal1 from './Mockups/Serenade-Final1.png';
import SerenadeFinal2 from './Mockups/Serenade-Final2.png';
import CalcFinal1 from './Mockups/Calc-Final1.png';
import CalcFinal2 from './Mockups/Calc-Final2.png';
import { Parallax } from 'react-scroll-parallax';

const Work = () => {

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

      console.log(width);

    const serenadeLink = 'http://serenade-ai-playlists.onrender.com';
    const calcLink = 'http://just-a-calculator.onrender.com';

    return(
        <>

        <div className={`md:hidden flex-column h-full ${(theme) && 'dark'}`}>


        <div className='flex justify-center font-roboto bg-yellow dark:bg-darkgray 
                    w-full
                    dark:bg-green'>
                        <div className='text-black text-sm'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={750}
                                endScroll={1850}
                                shouldAlwaysCompleteAnimation={true}
                            >
                            <p className='text-4xl text-slategray dark:text-white  tracking-widest font-light p-10'>
                            <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>SERENADE <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span></Link>
                            </p>
                            </Parallax>
                        </div>
        </div>

        <div className='flex justify-center font-roboto bg-blue  dark:bg-darkgray 
                    w-full dark:bg-rightoffgray'>
                        <div className='text-white text-sm'>
                            <div className='bg-red p-10 pt-12 dark:bg-darkgray'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={850}
                                endScroll={1950}
                                shouldAlwaysCompleteAnimation={true}
                            >
                            <p className='text-lg text-slategray dark:text-white mb-3 tracking-widest'>
                                <span className='bg-offgray dark:bg-lightgray px-2 text-slategray p-1 rounded'>COMPLETION</span>
                                </p>
                                <p className='mb-10 text-pointninefive font-light leading-6'>
                                    July 2023
                                </p>
                                <p className='text-lg text-slategray dark:text-white mb-3 tracking-widest'>
                                    <span className='bg-offgray dark:bg-lightgray px-2 text-slategray p-1 rounded'>PROJECT OVERVIEW</span>
                                </p>
                                <p className='mb-10 text-pointninefive font-light leading-6'>
                                    A web app that integrates openAI's DaVinci speech model & Spotify's API to interpret user prompts and turn them into creative Spotify playlists.
                                </p>

                                <p className='text-lg text-slategray dark:text-white mb-3 tracking-widest'>
                                    <span className='bg-offgray dark:bg-lightgray px-2 text-slategray p-1 rounded'>ROLE & RESPONSIBILITIES</span>
                                </p>
                                <p className='text-pointninefive font-light leading-6 mb-10'>
                                    Lead Front-End Engineer responsible for UX design, User Profile & My Playlists/Discover components, JSX rendering of Spotify playlist materials, responsive design for mobile.
                                </p>

                                <p className='text-lg  tracking-widest mb-4'>
                                    <Link to='http://serenade-ai-playlists.onrender.com' title='Launch Serenade' target='_blank'>
                                        <span className='bg-black p-3 text-white rounded cursor-pointer'>LAUNCH PROJECT</span>
                                    </Link>
                                </p>
                                </Parallax>
                            </div>
                        </div>
        </div>
            
            <div className='flex-column'>
                <div className='flex-column'>
                    <div className='flex-5 h-auto bg-white p-6 pt-8 font-roboto font-light pr-10 dark:bg-darkergray w-full overflow-hidden'>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={0}
                            endScroll={1875}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ serenadeLink } title='Launch Serenade' target='_blank'><img className='mb-12 mt-4' alt='Serenade' src={ SerenadeFinal1 }/></Link>
                        </Parallax>

                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={0}
                            endScroll={1875}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ serenadeLink } title='Launch Serenade' target='_blank'><img className='mb-12' alt='Serenade' src={ SerenadeFinal2 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={0}
                            endScroll={1875}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ serenadeLink } title='Launch Serenade' target='_blank'><img className='mb-6 mt-2 1150px:hidden' alt='Serenade' src={ SerenadeFinal1 }/></Link>
                        </Parallax>
                    </div>
                    <div className='flex justify-center font-roboto bg-darkred dark:bg-darkgray 
                    w-full dark:bg-rightoffgray'>
                        <div className='text-white text-sm'>

                            <div className='bg-blue p-10 dark:bg-purple'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={2100}
                                endScroll={3200}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <p className='text-xl mb-3 tracking-widest'>
                                    TOOLS USED
                                </p>

                                <div className='flex flex-wrap text-sm'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>JavaScript</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>React.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Redux.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Node.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Express.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>PostgreSQL</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>React Router</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>OpenAI API</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Spotify API</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>HTML</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Vanilla CSS</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Adobe Photoshop</div>

                                </div>
                                </Parallax>
                            </div>
                        </div>
                    </div> 
                </div>


                <div className='flex justify-center font-roboto bg-yellow pt-10 dark:bg-darkgray 
                    w-full
                    dark:bg-green'>
                        <div className='text-white'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={2450}
                                endScroll={3550}
                                shouldAlwaysCompleteAnimation={true}
                            >
                            <p className='text-4xl text-slategray dark:bg-green dark:text-white tracking-widest font-light px-10 mb-10'>
                            <Link to='http://just-a-calculator.onrender.com' title='Launch Just-A-Calculator' target='_blank'>JUST A CALCULATOR <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span></Link>
                            </p>
                            </Parallax>
                        </div>
        </div>

        <div className='flex justify-center font-roboto bg-darkred dark:bg-darkgray 
                    w-full dark:bg-rightoffgray'>
                        <div className='text-white text-sm'>

                            <div className='bg-red p-10 pt-12 dark:bg-darkgray'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={2600}
                                endScroll={3650}
                                shouldAlwaysCompleteAnimation={true}
                            >
                            <p className='text-lg text-slategray dark:text-white mb-3 tracking-widest'>

                                    <span className='bg-offgray dark:bg-lightgray px-2 text-slategray p-1 rounded'>COMPLETION</span>
                                </p>
                                <p className='mb-10 text-pointninefive font-light leading-6'>
                                    June 2023
                                </p>
                            <p className='text-lg mb-3 text-slategray dark:text-white tracking-widest'>
                                <span className='bg-offgray dark:bg-lightgray px-2 text-slategray p-1 rounded'>PROJECT OVERVIEW</span>
                                </p>
                                <p className='mb-8 text-pointninefive font-light leading-6' data-rellax-speed='-4'>
                                    A Bitcoin portfolio tracker disguised as an iOS calculator. Pressing the '+' key on the calculator five times unveils a login screen to access the web application.
                                </p>

                                <p className='text-lg mb-3 tracking-widest text-slategray dark:text-white'>
                                    <span className='bg-offgray dark:bg-lightgray px-2 text-slategray p-1 rounded'>ROLE & RESPONSIBILITIES</span>
                                </p>
                                <p className='text-pointninefive text-justify font-light leading-6 mb-10'>
                                    Creator & Sole Developer
                                </p>
                                <p className='text-lg tracking-widest mb-4'>
                                    <Link to='http://just-a-calculator.onrender.com' title='Launch Just-A-Calculator' target='_blank'>
                                        <span className='bg-black text-white p-3 rounded  cursor-pointer'>LAUNCH PROJECT</span>
                                    </Link>
                                </p>
                                </Parallax>
                            </div>

                        </div>
        </div>

        <div className='flex-column'>
                    <div className='flex-5 h-auto bg-white p-6 pt-8 font-roboto font-light pr-10 dark:bg-darkergray w-full overflow-hidden'>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={0}
                            endScroll={3600}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'><img className='mb-12 mt-4' alt='Serenade' src={ CalcFinal2 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={0}
                            endScroll={3600}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'><img className='mb-12' alt='Serenade' src={ CalcFinal1 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={0}
                            endScroll={3600}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'><img className='mb-6 mt-4' alt='Serenade' src={ CalcFinal2 }/></Link>
                        </Parallax>
                    </div>
                    <div className='flex justify-center font-roboto bg-darkred dark:bg-darkgray 
                    w-full dark:bg-rightoffgray'>
                        <div className='text-white text-sm'>

                            <div className='bg-blue p-10 dark:bg-purple'>
                            <Parallax
                            opacity={[0, 1, 'easeOutBack']}
                            startScroll={3850}
                            endScroll={4800}
                            shouldAlwaysCompleteAnimation={true}
                        >
                                <p className='text-xl mb-3 tracking-widest'>
                                    TOOLS USED
                                </p>

                                <div className='flex flex-wrap text-sm'>
                                <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>JavaScript</div>

<div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>React.js</div>

<div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Redux.js</div>

<div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Node.js</div>

<div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>React Router</div>

<div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>CoinMarketCap API</div>

<div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>HTML</div>

<div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Vanilla CSS</div>

<div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Material-UI</div>

                                </div>
                                </Parallax>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>




        <div className={`hidden md:flex h-full ${(theme) && 'dark'}`}>
            
            <div className='flex-initial bg-blue dark:bg-purple sticky border-r-50 border-yellow dark:border-green'>
                <Parallax
                    translateY={['800px', '0px']}
                    startScroll={0}
                    endScroll={450}
                    shouldAlwaysCompleteAnimation={true}
                >

                        <div className='lg:transform lg:-rotate-90 lg:-ml-work lg:-mr-work lg:pr-4 lg:align-middle lg:mt-worktop lg:pt-1 text-white text-6xl font-roboto font-extralight tracking-wide dark:text-white w-50 lg:w-auto'>
                            <p className='hidden lg:flex'>WORK</p> 
                        </div>

                </Parallax>
            </div>
            <div className='flex-column w-full'>
                <div className='flex'>
                    <div className='flex-5 h-auto bg-white p-6 pt-8 font-roboto font-light pr-10 dark:bg-darkergray 915px:dark:bg-slategray w-full overflow-hidden'>
                        <Parallax
                            translateX={['-400px', '0px']}
                            opacity={[0, 1, 'easeOutBack']}
                            startScroll={0}
                            endScroll={450}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ serenadeLink } title='Launch Serenade' target='_blank'><img className='mb-12 mt-2' alt='Serenade' src={ SerenadeFinal1 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            opacity={[0, 1, 'easeOutBack']}
                            startScroll={0}
                            endScroll={450}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ serenadeLink } title='Launch Serenade' target='_blank'><img className='mb-12 1150px:mb-6' alt='Serenade' src={ SerenadeFinal2 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['-400px', '0px']}
                            opacity={[0, 1, 'easeOutBack']}
                            startScroll={0}
                            endScroll={450}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ serenadeLink } title='Launch Serenade' target='_blank'><img className='mb-12 mt-2 1150px:hidden' alt='Serenade' src={ SerenadeFinal1 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            opacity={[0, 1, 'easeOutBack']}
                            startScroll={0}
                            endScroll={450}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ serenadeLink } title='Launch Serenade' target='_blank'><img className='mb-6 880px:hidden' alt='Serenade' src={ SerenadeFinal2 }/></Link>
                        </Parallax>
                    </div>
                    <div className='flex justify-center font-roboto bg-yellow pt-10 dark:bg-darkgray 
                    w-smrightspace
                    915px:w-medrightspace
                    1150px:w-rightspace dark:bg-green'>
                        <div className='text-black dark:text-lightergray text-sm'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={0}
                                endScroll={800}
                                shouldAlwaysCompleteAnimation={true}
                            >

                            <p className='text-2xl lg:text-3xl 1150px:text-4xl tracking-widest dark:text-white font-light px-10 mb-10'>
                            <Link to='http://serenade-ai-playlists.onrender.com' title='Launch Serenade' target='_blank' className='hover:bg-black hover:text-white'>SERENADE <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span></Link>
                            </p>

                            </Parallax>
                            <div className='bg-offgray p-10 dark:bg-rightoffgray'>
                                
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={50}
                                endScroll={900}
                                shouldAlwaysCompleteAnimation={true}
                            >
                            <p className='text-base text-slategray dark:text-white mb-3 tracking-widest'>
                                <span className='bg-lightgray px-2 text-slategray p-1 rounded'>COMPLETION</span>
                                </p>
                                <p className='mb-8 text-sm 1150px:text-pointninefive font-light leading-6'>
                                    July 2023
                                </p>

                                <p className='text-base mb-3 tracking-widest'>
                                    <span className='bg-lightgray px-2 text-slategray p-1 rounded'>PROJECT OVERVIEW</span>
                                </p>
                                <p className='mb-8 text-sm 1150px:text-pointninefive font-light leading-6'>
                                    A web app that integrates openAI's DaVinci speech model & Spotify's API to interpret user prompts and turn them into creative Spotify playlists.
                                </p>

                                <p className='text-base mb-3 tracking-widest'>
                                    <span className='bg-lightgray px-2 text-slategray p-1 rounded'>ROLE & RESPONSIBILITIES</span>
                                </p>
                                <p className='mb-9 text-sm 1150px:text-pointninefive font-light leading-6'>
                                    Lead Front-End Engineer responsible for UX design, User Profile & My Playlists/Discover components, JSX rendering of Spotify playlist materials, responsive design for mobile.
                                </p>

                            <div className='flex justify-start'>
                                <p className='text-base  tracking-widest'>
                                    <Link to='http://serenade-ai-playlists.onrender.com' title='Launch Serenade' target='_blank'>
                                        <span className='bg-black  text-white p-3 rounded hover:bg-yellow hover:text-black cursor-pointer'>LAUNCH PROJECT</span>
                                    </Link>
                                </p>
                            </div>
                                </Parallax>
                            </div>

                            <div className='bg-blue p-10 dark:bg-purple h-full'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={450}
                                endScroll={1250}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <p className='text-lg text-white mb-3 tracking-widest'>
                                    TOOLS USED
                                </p>

                                <div className='flex flex-wrap text-xs 1150px:text-sm'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>JavaScript</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>React.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Redux.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Node.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Express.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>PostgreSQL</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>React Router</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>OpenAI API</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Spotify API</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>HTML</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Vanilla CSS</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>Adobe Photoshop</div>

                                </div>
                                {/* <div className='flex flex-wrap mt-8'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 text-sm text-red'>Live Link</div>
                                </div> */}
                                </Parallax>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='flex'>
                    <div className='flex-1 h-full bg-white p-6 pt-10 font-roboto font-light pr-10 dark:bg-slategray w-full h-auto overflow-hidden'>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={450}
                            endScroll={1300}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'><img className='mb-12 mt-2' alt='Launch Just-A-Calculator' src={ CalcFinal2 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={450}
                            endScroll={1300}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'><img className='mb-12 1150px:mb-6' alt='Launch Just-A-Calculator' src={ CalcFinal1 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={450}
                            endScroll={1300}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'><img className='mb-12 880px:mb-6 1150px:hidden' alt='Launch Just-A-Calculator' src={ CalcFinal2 }/></Link>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={450}
                            endScroll={1300}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'><img className='mb-6 880px:hidden' alt='Launch Just-A-Calculator' src={ CalcFinal1 }/></Link>
                        </Parallax>
                    </div>
                    <div className='flex justify-center font-roboto bg-blue dark:bg-purple 
                    w-smrightspace
                    915px:w-medrightspace
                    1150px:w-rightspace'>
                        <div className='text-white text-sm'>
                            <p className='bg-yellow text-2xl 1150px:text-3xl text-slategray dark:bg-green dark:text-white tracking-widest font-light p-10'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={725}
                                endScroll={1525}
                                shouldAlwaysCompleteAnimation={true}
                            >
                            <Link to='http://just-a-calculator.onrender.com' title='Launch Just-A-Calculator' target='_blank' className='hover:bg-black hover:text-white'>JUST A CALCULATOR <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span></Link>
                            </Parallax>
                            </p>
                            <div className='bg-offgray text-black dark:text-lightergray p-10 dark:bg-rightoffgray'>

                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={900}
                                endScroll={1750}
                                shouldAlwaysCompleteAnimation={true}
                            >

                            <p className='text-base text-slategray dark:text-white mb-3 tracking-widest'>
                                <span className='bg-lightgray px-2 text-slategray p-1 rounded'>COMPLETION</span>
                                </p>
                                <p className='mb-8 text-sm font-light 1150px:text-pointninefive leading-6'>
                                    June 2023
                                </p>
                                <p className='text-base mb-3 tracking-widest'>
                                    <span className='bg-lightgray px-2 text-slategray p-1 rounded'>PROJECT OVERVIEW</span> 
                                </p>
                                <p className='mb-8 text-sm font-light 1150px:text-pointninefive leading-6' data-rellax-speed='-4'>
                                    A Bitcoin portfolio tracker disguised as an iOS calculator. Pressing the '+' key on the calculator five times unveils a login screen to access the web application.
                                </p>

                                <p className='text-base mb-3 tracking-widest'>
                                    <span className='bg-lightgray px-2 text-slategray p-1 rounded'>ROLE & RESPONSIBILITIES</span> 
                                </p>
                                <p className='mb-9 text-sm font-light 1150px:text-pointninefive leading-6'>
                                    Creator & Sole Developer
                                </p>

                                <div className='flex justify-start'>
                                    <p className='text-base  tracking-widest'>
                                        <Link to='http://just-a-calculator.onrender.com' title='Launch Just-A-Calculator' target='_blank'>
                                            <span className='bg-black  text-white p-3 rounded hover:bg-yellow hover:text-black cursor-pointer'>LAUNCH PROJECT</span>
                                        </Link>
                                    </p>
                                </div>
                            </Parallax>
                                {/* <p className='flex justify-center text-lg text-slategray dark:text-white mb-3 tracking-widest'>
                                    <span className='bg-lightgray px-2 text-slategray p-1 rounded'>LAUNCH</span>
                                </p> */}
                            </div>

                            <div className='bg-blue p-10 dark:bg-purple'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={1300}
                                endScroll={2300}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <p className='text-lg mb-3 tracking-widest'>
                                    TOOLS USED 
                                </p>

                                <div className='flex flex-wrap text-xs 1150px:text-sm'>
                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>JavaScript</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>React.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>Redux.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>Node.js</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>React Router</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>CoinMarketCap API</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>HTML</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>Vanilla CSS</div>

                                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1  cursor-default'>Material-UI</div>

                                </div>
                                </Parallax>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
};

export default Work;