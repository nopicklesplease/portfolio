import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Parallax } from 'react-scroll-parallax';
import SerenadeTitle from './Serenade/SerenadeTitle';
import SerenadeOverview from './Serenade/SerenadeOverview';
import SerenadeLaunch from './Serenade/SerenadeLaunch';
import SerenadePngMobile from './Serenade/SerenadePngMobile';
import SerenadePngDesktop from './Serenade/SerenadePngDesktop';
import SerenadeTools from './Serenade/SerenadeTools';
import CalcTitle from './Calc/CalcTitle';
import CalcOverview from './Calc/CalcOverview';
import CalcLaunch from './Calc/CalcLaunch';
import CalcPngMobile from './Calc/CalcPngMobile';
import CalcPngDesktop from './Calc/CalcPngDesktop';
import CalcTools from './Calc/CalcTools';


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
                            
                            <SerenadeTitle />
                            
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

                                    <SerenadeLaunch />

                                </p>
                            </Parallax>
                        </div>
                    </div>
                </div>
            
                <div className='flex-column'>
                    <div>

                        <SerenadePngMobile />

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
                        <div className='text-white md:text-sm'>
                            <Parallax
                                opacity={[0, 1, 'easeOutBack']}
                                startScroll={2550}
                                endScroll={3650}
                                shouldAlwaysCompleteAnimation={true}
                            >
                                <p className='text-4xl text-slategray md:bg-yellow md:text-2xl 1150px:text-3xl dark:bg-purple dark:text-white tracking-widest font-light px-10 mb-10 md:p-10 md:mb-0'>

                                    <CalcTitle />

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

                                        <CalcLaunch />

                                    </p>
                                </Parallax>
                            </div>
                        </div>
                    </div>

                    <div className='flex-column'>
                        
                        <CalcPngMobile />

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
                        
                        <SerenadePngDesktop />

                        <div className='flex justify-center font-roboto bg-yellow pt-10 dark:bg-darkgray w-smrightspace 915px:w-medrightspace 1150px:w-rightspace dark:bg-purple'>
                            <div className='text-black dark:text-lightergray text-sm'>
                                <Parallax
                                    opacity={[0, 1, 'easeOutBack']}
                                    startScroll={0}
                                    endScroll={800}
                                    shouldAlwaysCompleteAnimation={true}
                                >

                                    <SerenadeTitle />

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

                                            <SerenadeLaunch />

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
                    
                    <CalcPngDesktop />

                    <div className='flex justify-center font-roboto bg-blue dark:bg-green w-smrightspace 915px:w-medrightspace 1150px:w-rightspace'>
                        <div className='text-white text-sm'>
                            <p className='bg-yellow text-2xl 1150px:text-3xl text-slategray dark:bg-purple dark:text-white tracking-widest font-light p-10'>
                                <Parallax
                                    opacity={[0, 1, 'easeOutBack']}
                                    startScroll={1075}
                                    endScroll={1875}
                                    shouldAlwaysCompleteAnimation={true}
                                >
                                    
                                    <CalcTitle />

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

                                            <CalcLaunch />

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