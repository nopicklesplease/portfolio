import React from 'react';
import { useSelector } from 'react-redux';
import SerenadeFinal1 from './Mockups/Serenade-Final1.png';
import SerenadeFinal2 from './Mockups/Serenade-Final2.png';
import CalcFinal1 from './Mockups/Calc-Final1.png';
import CalcFinal2 from './Mockups/Calc-Final2.png';
import SaucySlices from './Mockups/SaucySlices-Air1.png';
import RecordLogger from './Mockups/RecordLogger-Air.png';

const Work = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className={`flex h-full ${(theme) && 'dark'}`}>
            <div className='flex-initial bg-yellow dark:bg-green'>
                <div className='transform -rotate-90 -ml-work -mr-work pr-4 align-middle mt-worktop pt-1 text-black text-6xl font-poppins font-extralight tracking-wide dark:text-white'>
                    WORK 
                </div>
            </div>
            <div className='flex-column'>
                <div className='flex'>
                    <div className='flex-1 h-full border-l-50 border-blue bg-white p-6 pt-7 font-roboto font-light mr-4 dark:bg-slategray dark:border-purple w-full'>
                        <img className='mb-24 mt-2' alt='Serenade' src={ SerenadeFinal1 }/>
                        <img className='mb-20' alt='Serenade' src={ SerenadeFinal2 }/>

                        <div className='flex justify-center'>
                            <div className='border-t border-dotted border-lightgray w-4/5'></div>
                        </div>
                    </div>
                    <div className='flex justify-center bg-red p-10 dark:bg-darkgray w-rightspace'>
                        <div className='text-white text-sm'>
                            <p className='text-4xl tracking-widest font-light mb-10'>
                                SERENADE
                            </p>
                            <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                Project Overview: 
                            </p>
                            <p className='mb-10 text-xs text-justify'>
                                A web app that integrates openAI's DaVinci speech model & Spotify's API to interpret user prompts and turn them into creative Spotify playlists.
                            </p>

                            <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                Role & Responsibilities: 
                            </p>
                            <p className='mb-10 text-xs text-justify'>
                                Lead Front-End Engineer responsible for UX design, User Profile & My Playlists/Discover components, JSX rendering of Spotify playlist materials, responsive design for mobile.
                            </p>

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
                <div className='flex'>
                    <div className='flex-1 h-full border-l-50 border-blue bg-white p-6 font-roboto font-light mr-4 dark:bg-slategray dark:border-purple w-full'>
                        <img className='mb-24 mt-8' alt='Just a Calculator' src={ CalcFinal2 }/>
                        <img className='mb-20' alt='Just a Calculator' src={ CalcFinal1 }/>

                    </div>
                    <div className='flex justify-center bg-red p-10 pt-12 dark:bg-darkgray w-rightspace'>
                        <div className='text-white text-sm'>
                            <p className='text-4xl tracking-widest font-light mb-10'>
                                JUST A CALCULATOR
                            </p>
                            <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                Project Overview: 
                            </p>
                            <p className='mb-10 text-xs text-justify'>
                                A camouflaged Bitcoin portfolio tracking app that implements CoinMarketCap's API endpoints to provide real-time updates on an extensive set of financial data.
                            </p>

                            <p className='text-lg font-light border-b border-b-white border-dotted mb-4'>
                                Role & Responsibilities: 
                            </p>
                            <p className='mb-10 text-xs text-justify'>
                                Creator and sole developer
                            </p>

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
        
    )
};

export default Work;