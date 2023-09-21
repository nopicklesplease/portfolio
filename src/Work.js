import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SerenadeFinal1 from './Mockups/Serenade-Final1.png';
import SerenadeFinal2 from './Mockups/Serenade-Final2.png';
import SerenadeFinal3 from './Mockups/Serenade-Final3.png';
import SerenadeFinal4 from './Mockups/Serenade-Final4.png';
import CalcFinal1 from './Mockups/Calc-Final1.png';
import CalcFinal2 from './Mockups/Calc-Final2.png';
import CalcFinal3 from './Mockups/Calc-Final3.png';
import CalcFinal4 from './Mockups/Calc-Final4.png';
import { Parallax } from 'react-scroll-parallax';
import SerenadeTools from './SerenadeTools';
import CalcTools from './CalcTools';
import SerenadeOverview from './SerenadeOverview';
import CalcOverview from './CalcOverview';

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
        
            {/* MOBILE WORK BODY */}    

            <div className={`md:hidden flex-column h-full ${(theme) && 'dark'}`}>
                <div className='flex justify-center font-roboto bg-yellow dark:bg-darkgray w-full dark:bg-purple'>
                    <div className='text-black text-sm'>
                        <Parallax
                            opacity={[0, 1, 'easeOutBack']}
                            startScroll={600}
                            endScroll={1725}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <p className='text-4xl text-slategray dark:text-white  tracking-widest font-light p-10'>
                                <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>SERENADE <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span>
                                </Link>
                            </p>
                        </Parallax>
                    </div>
                </div>

                <div className='flex justify-center font-roboto bg-blue dark:bg-darkgray w-full dark:bg-rightoffgray'>
                    <div className='text-white text-sm'>
                        <div className='bg-red p-10 pt-12 dark:bg-darkgray'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={700}
                                endScroll={1800}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                
                                <SerenadeOverview />

                                <p className='text-lg tracking-widest mb-4'>
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
                                endScroll={1975}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>
                                    <img className='mb-12 mt-4' alt='Serenade' src={ SerenadeFinal1 }/>
                                </Link>
                            </Parallax>

                            <Parallax
                                translateX={['400px', '0px']}
                                startScroll={0}
                                endScroll={1975}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>
                                    <img className='mb-12' alt='Serenade' src={ SerenadeFinal2 }/>
                                </Link>
                            </Parallax>
                            <Parallax
                                translateX={['-400px', '0px']}
                                startScroll={0}
                                endScroll={1975}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>
                                    <img className='mb-6 mt-2 1150px:hidden' alt='Serenade' src={ SerenadeFinal3 }/>
                                </Link>
                            </Parallax>
                        </div>
                        <div className='flex justify-center font-roboto bg-darkred dark:bg-darkgray w-full dark:bg-rightoffgray'>
                            <div className='text-white text-sm'>
                                <div className='bg-blue p-10 dark:bg-green'>
                                    <Parallax
                                        opacity={[0, 1, 'easeOutBack']}
                                        startScroll={2225}
                                        endScroll={3325}
                                        shouldAlwaysCompleteAnimation={true}
                                    >
                                        <p className='text-xl mb-3 tracking-widest'>TOOLS USED</p>
                                        <div className='flex flex-wrap text-sm tracking-wider pb-2'>
                                            <SerenadeTools />
                                        </div>
                                    </Parallax>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className='flex justify-center font-roboto bg-yellow pt-10 dark:bg-darkgray w-full dark:bg-purple'>
                        <div className='text-white'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={2550}
                                endScroll={3650}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <p className='text-4xl text-slategray dark:bg-purple dark:text-white tracking-widest font-light px-10 mb-10'>
                                    <Link to='http://just-a-calculator.onrender.com' title='Launch Just-A-Calculator' target='_blank'>JUST A CALCULATOR <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span>
                                    </Link>
                                </p>
                            </Parallax>
                        </div>
                    </div>

                    <div className='flex justify-center font-roboto bg-darkred dark:bg-darkgray w-full dark:bg-rightoffgray'>
                        <div className='text-white text-sm'>
                            <div className='bg-red p-10 pt-12 dark:bg-darkgray'>
                                <Parallax
                                    opacity={[0, 1, 'easeOutBack']}
                                    startScroll={2650}
                                    endScroll={3700}
                                    shouldAlwaysCompleteAnimation={true}
                                >
                                    
                                    <CalcOverview />

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
                                endScroll={3875}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'>
                                    <img className='mb-12 mt-4' alt='Serenade' src={ CalcFinal2 }/>
                                </Link>
                            </Parallax>
                            <Parallax
                                translateX={['400px', '0px']}
                                startScroll={0}
                                endScroll={3875}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'>
                                    <img className='mb-12' alt='Serenade' src={ CalcFinal1 }/>
                                </Link>
                            </Parallax>
                            <Parallax
                                translateX={['-400px', '0px']}
                                startScroll={0}
                                endScroll={3875}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'>
                                    <img className='mb-6 mt-4' alt='Serenade' src={ CalcFinal3 }/>
                                </Link>
                            </Parallax>
                        </div>
                        <div className='flex justify-center font-roboto bg-darkred dark:bg-darkgray w-full dark:bg-rightoffgray'>
                            <div className='text-white text-sm'>
                                <div className='bg-blue p-10 dark:bg-green'>
                                    <Parallax
                                        opacity={[0, 1, 'easeOutBack']}
                                        startScroll={4100}
                                        endScroll={4950}
                                        shouldAlwaysCompleteAnimation={true}
                                    >
                                        <p className='text-xl mb-3 tracking-widest'>TOOLS USED</p>
                                        <div className='flex flex-wrap text-sm tracking-wider'>
                                            <CalcTools />
                                        </div>
                                    </Parallax>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            {/* TABLET & DESKTOP WORK BODY */}    

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
                                <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>
                                    <img className='mb-12 mt-2' alt='Serenade' src={ SerenadeFinal1 }/>
                                </Link>
                            </Parallax>
                            <Parallax
                                translateX={['400px', '0px']}
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={0}
                                endScroll={450}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>
                                    <img className='mb-12 1150px:mb-6' alt='Serenade' src={ SerenadeFinal2 }/>
                                </Link>
                            </Parallax>
                            <Parallax
                                translateX={['-400px', '0px']}
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={0}
                                endScroll={450}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>
                                    <img className='mb-12 mt-2 1150px:hidden' alt='Serenade' src={ SerenadeFinal3 }/>
                                </Link>
                            </Parallax>
                            <Parallax
                                translateX={['400px', '0px']}
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={0}
                                endScroll={450}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <Link to={ serenadeLink } title='Launch Serenade' target='_blank'>
                                    <img className='mb-6 880px:hidden' alt='Serenade' src={ SerenadeFinal4 }/>
                                </Link>
                            </Parallax>
                        </div>
                        <div className='flex justify-center font-roboto bg-yellow pt-10 dark:bg-darkgray w-smrightspace 915px:w-medrightspace 1150px:w-rightspace dark:bg-purple'>
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

                                    <SerenadeOverview />

                                    <div className='flex justify-start pb-3'>
                                        <p className='text-base  tracking-widest'>
                                            <Link to='http://serenade-ai-playlists.onrender.com' title='Launch Serenade' target='_blank'>
                                                <span className='bg-black  text-white p-3 rounded hover:bg-yellow hover:text-black cursor-pointer'>LAUNCH PROJECT</span>
                                            </Link>
                                        </p>
                                    </div>
                                </Parallax>
                            </div>

                            <div className='bg-blue p-10 mb-1 dark:bg-green h-full'>
                                <Parallax
                                    opacity={[0, 1, 'easeOutBack']}
                                    startScroll={750}
                                    endScroll={1250}
                                    shouldAlwaysCompleteAnimation={true}
                                >
                                    <p className='text-lg text-white mb-3 tracking-widest'>TOOLS USED</p>
                                    <div className='flex flex-wrap text-xs 1150px:text-sm tracking-wider'>
                                        <SerenadeTools />
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='flex'>
                    <div className='flex-1 h-full bg-white p-6 pt-10 font-roboto font-light pr-10 dark:bg-slategray w-full h-auto overflow-hidden'>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={750}
                            endScroll={1500}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'>
                                <img className='mb-12 mt-2' alt='Launch Just-A-Calculator' src={ CalcFinal2 }/>
                            </Link>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={750}
                            endScroll={1500}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'>
                                <img className='mb-12 1150px:mb-6' alt='Launch Just-A-Calculator' src={ CalcFinal1 }/>
                            </Link>
                        </Parallax>
                        <Parallax
                            translateX={['-400px', '0px']}
                            startScroll={750}
                            endScroll={1500}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'>
                                <img className='mb-12 880px:mb-6 1150px:hidden' alt='Launch Just-A-Calculator' src={ CalcFinal3 }/>
                            </Link>
                        </Parallax>
                        <Parallax
                            translateX={['400px', '0px']}
                            startScroll={750}
                            endScroll={1500}
                            shouldAlwaysCompleteAnimation={true}
                        >
                            <Link to={ calcLink } title='Launch Just-A-Calculator' target='_blank'>
                                <img className='mb-6 880px:hidden' alt='Launch Just-A-Calculator' src={ CalcFinal4 }/>
                            </Link>
                        </Parallax>
                    </div>
                    <div className='flex justify-center font-roboto bg-blue dark:bg-green w-smrightspace 915px:w-medrightspace 1150px:w-rightspace'>
                        <div className='text-white text-sm'>
                            <p className='bg-yellow text-2xl 1150px:text-3xl text-slategray dark:bg-purple dark:text-white tracking-widest font-light p-10'>
                                <Parallax
                                    opacity={[0, 1, 'easeOutBack']}
                                    startScroll={1075}
                                    endScroll={1875}
                                    shouldAlwaysCompleteAnimation={true}
                                >
                                    <Link to='http://just-a-calculator.onrender.com' title='Launch Just-A-Calculator' target='_blank' className='hover:bg-black hover:text-white'>JUST A CALCULATOR <span><i className="fa-solid fa-up-right-from-square ml-2 text-xl"></i></span>
                                    </Link>
                                </Parallax>
                            </p>
                            <div className='bg-offgray text-black dark:text-lightergray p-10 dark:bg-rightoffgray'>
                                <Parallax
                                    opacity={[0, 1, 'easeOutBack']}
                                    startScroll={1200}
                                    endScroll={2050}
                                    shouldAlwaysCompleteAnimation={true}
                                >
                                    
                                    <CalcOverview />

                                    <div className='flex justify-start pb-3'>
                                        <p className='text-base tracking-widest'>
                                            <Link to='http://just-a-calculator.onrender.com' title='Launch Just-A-Calculator' target='_blank'>
                                                <span className='bg-black text-white p-3 rounded hover:bg-yellow hover:text-black cursor-pointer'>LAUNCH PROJECT</span>
                                            </Link>
                                        </p>
                                    </div>
                                </Parallax>
                            </div>

                            <div className='bg-blue p-10 mb-1 dark:bg-green'>
                                <Parallax
                                    opacity={[0, 1, 'easeOutBack']}
                                    startScroll={1825}
                                    endScroll={2825}
                                    shouldAlwaysCompleteAnimation={true}
                                >
                                    <p className='text-lg mb-3 tracking-widest'>TOOLS USED</p>
                                    <div className='flex flex-wrap text-xs 1150px:text-sm tracking-wider'>
                                        <CalcTools />
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