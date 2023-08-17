import React from 'react';
import { useSelector } from 'react-redux';
import headshot from './headshot.jpeg'

const Content = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className='z-auto'>
            <div className={`flex h-screen ${(theme) && 'dark'}`}>
                <div className='flex-initial bg-blue dark:bg-purple'>
                    <div className='transform -rotate-90 -ml-16 -mr-16 pr-4 align-middle mt-abouttop pt-1 text-white text-6xl font-poppins  font-extralight tracking-wide'>
                        ABOUT 
                    </div>
                </div>
                <div className='flex-1 bg-white border-l-50 border-yellow p-6 font-roboto font-light first-line:uppercase first-line:tracking-widest
                first-letter:text-5xl first-letter:font-normal
                first-letter:mr-3 first-letter:float-left text-justify dark:border-green dark:bg-slategray dark:text-lightgray'>
                    <p>I am a software engineer in the New York City area that's been developing web applications as a personal interest for 20+ years. <span className='bg-yellow dark:bg-green'>In an effort to finally make it my professional career, I recently completed a full-stack development bootcamp.</span></p> 
                        
                    <p className='mt-6'>This is a representation of the work I've produced since that time.</p>

                    <div className='flex justify-center'>
                        <div className='border-t border-dotted border-lightgray w-4/5 mt-6'></div>
                    </div>

                    <div className='mt-6 flex'>
                        <span className='font-normal text-xl tracking-wide text-blue'>CORE PROFICIENCIES</span>
                    </div>

                    <div className='flex flex-wrap mt-2'>
                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>JavaScript</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>React.js</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Redux.js</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Node.js</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>React Router</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Express</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>PostgreSQL</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>REST API</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>GIT</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>CSS</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Tailwind</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Material-UI</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Responsive Design</div>

                        </div>

                        <div className='mt-6 flex'>
                        <span className='font-normal text-xl tracking-wide text-blue'>ADDL. SKILLS</span>
                    </div>

                    <div className='flex flex-wrap mt-2'>
                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Audio Engineer</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Music & Podcast Production</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Redux.js</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>Node.js</div>

                            <div className='p-2 bg-lightergray rounded-md max-w-fit m-1 text-sm'>React Router</div>
                            </div>
                </div>
                <div className='flex-initial flex justify-center bg-red p-8 dark:bg-orange'>
                    <div className='text-white text-5xl'>
                        <img className='w-96 rounded-md' src={ headshot } alt='headshot'/>

                        <i className="fa-brands fa-linkedin mt-2"></i>
                        <i className="fa-brands fa-github mt-2 ml-2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;