import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import headshot from './headshot.jpeg';

const Content = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    return(
        <div className='z-auto'>
            <div className={`flex h-auto ${(theme) && 'dark'}`}>
                <div className='lg:flex-initial bg-blue dark:bg-purple border-r-50 border-yellow dark:border-green'>
                        <div className='lg:transform lg:-rotate-90 lg:-ml-16 lg:-mr-16 lg:pr-4 lg:align-middle lg:mt-abouttop lg:pt-1 text-white text-6xl font-poppins font-extralight tracking-wide w-50 lg:w-auto'>
                            <p className='hidden lg:flex'>ABOUT</p> 
                        </div>
                </div>
                <div className='flex-column 915px:hidden'>

                    <div className='flex'>
                        <div className='flex-1'>
                            <div className='915px:hidden p-10 pb-0 text-5xl font-light font-roboto text-blue dark:text-lightgray'>
                                ABOUT
                            </div>
                            <div className='bg-white p-10 pt-9 font-roboto font-light first-line:uppercase first-line:tracking-widest
                            first-letter:text-5xl first-letter:font-normal
                            first-letter:mr-3 first-letter:float-left text-justify dark:bg-slategray dark:text-lightgray'>
                            <p>I am a software engineer in the New York City area that's been developing web applications as a personal interest for 20+ years. <span className='bg-yellow dark:text-white dark:bg-purple'>In an effort to finally make it my professional career, I recently completed a full-stack development bootcamp.</span> This is a representation of the work I've produced since that time.</p> 
                            </div>
                        </div>
                        <div className='flex w-smrightspace'>
                            <div className='flex w-smrightspace 915px:w-medrightspace justify-center bg-red p-10 dark:bg-darkgray'>
                                <div className='text-white text-6xl'>
                                    <img className='lg:w-pic rounded-md' src={ headshot } alt='headshot'/>

                                    <Link to='https://www.linkedin.com/in/rsariego/' target='_blank'><i className="fa-brands fa-linkedin mt-4 hover:text-yellow"></i></Link>

                                    <Link to='https://github.com/nopicklesplease' target='_blank'><i className="fa-brands fa-github mt-4 ml-4 hover:text-yellow"></i></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-offgray'>
                    <div className='p-10 pb-3 flex'>
                        <span className='font-normal text-xl tracking-widest'>CORE PROFICIENCIES <span className='text-blue dark:text-green'> + ADDL. SKILLS</span></span>
                    </div>

                        <div className='flex flex-wrap p-10 pt-0'>
                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm  hover:bg-yellow cursor-default'>JavaScript</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React.js</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Redux.js</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Node.js</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Express.js</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React Router</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>PostgreSQL</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>REST API</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>GIT</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>CSS</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Tailwind</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React-Parallax</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Material-UI</div>

                                <div className='p-2 bg-lightgray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Responsive Design</div>

                                <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Audio Engineering</div>

                                <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Music & Podcast Production</div>

                                <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Bitcoin Education</div>

                                <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Photography</div>

                                <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Adobe Photoshop</div>

                            </div>
                            <div className='flex'>
                                <div className='flex-5 p-10 bg-white'>
                                    <span className='font-normal text-xl tracking-widest'>CURRENT PROJECT: <span className='text-blue dark:text-green'> SO WHAT?</span></span>

                                    <p className='mt-3 font-roboto font-light'>
                                    SO WHAT? is an application that summarizes important historical events, people & places into an easy-to-digest format that provides users with a topical overview of anything that piques their interest.
                                    </p>
                                </div>
                                <div className='flex bg-red w-smrightspace 915px:w-medrightspace'>
                                    
                                </div>
                            </div>
                    </div>
                </div>
                {/* <div className='flex-5 lg:flex-1'>
                    <div className='lg:hidden p-10 pb-0 text-5xl  font-light font-roboto text-blue dark:text-lightgray'>
                        ABOUT
                    </div>
                    <div className='bg-white p-10 pt-9 pb-0 font-roboto font-light first-line:uppercase first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-normal
                    first-letter:mr-3 first-letter:float-left text-justify dark:bg-slategray dark:text-lightgray'>
                    <p>I am a software engineer in the New York City area that's been developing web applications as a personal interest for 20+ years. <span className='bg-yellow dark:text-white dark:bg-purple'>In an effort to finally make it my professional career, I recently completed a full-stack development bootcamp.</span> This is a representation of the work I've produced since that time.</p> 
                    </div>
                </div> */}

                <div className='hidden md:flex-5 915px:block 915px:flex-1'>
                    <div className='lg:hidden p-10 pb-0 text-5xl  font-light font-roboto text-blue dark:text-lightgray'>
                        ABOUT
                    </div>
                    <div className='bg-white p-10 pt-9 pb-0 font-roboto font-light first-line:uppercase first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-normal
                    first-letter:mr-3 first-letter:float-left text-justify dark:bg-slategray dark:text-lightgray'>
                    <p>I am a software engineer in the New York City area that's been developing web applications as a personal interest for 20+ years. <span className='bg-yellow dark:text-white dark:bg-purple'>In an effort to finally make it my professional career, I recently completed a full-stack development bootcamp.</span> This is a representation of the work I've produced since that time.</p> 
                        
                    {/* <p className='mt-6'>This is a representation of the work I've produced since that time.</p> */}
                    </div>

                    {/* <div className='flex justify-center'>
                        <div className='border-t border-lightgray w-4/5 mt-6'></div>
                    </div> */}

                    <div className='flex justify-center'>
                        <div className='border-t border-lightgray w-4/5 mt-10'></div>
                    </div>

                    <div className='p-10 pb-3 flex'>
                        <span className='font-normal text-xl tracking-widest'>CORE PROFICIENCIES <span className='text-blue dark:text-green'> + ADDL. SKILLS</span></span>
                    </div>

                    <div className='flex flex-wrap p-10 pt-0'>
                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm  hover:bg-yellow cursor-default'>JavaScript</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React.js</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Redux.js</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Node.js</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Express.js</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React Router</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>PostgreSQL</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>REST API</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>GIT</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>CSS</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Tailwind</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>React-Parallax</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Material-UI</div>

                            <div className='p-2 bg-lightergray dark: text-slategray rounded-md max-w-fit m-1 text-sm hover:bg-yellow cursor-default'>Responsive Design</div>

                            <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Audio Engineering</div>

                            <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Music & Podcast Production</div>

                            <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Bitcoin Education</div>

                            <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Photography</div>

                            <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 text-sm hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>Adobe Photoshop</div>

                        </div>

                        <div className='p-10 pt-0'>
                        <span className='font-normal text-xl tracking-widest'>CURRENT PROJECT: <span className='text-blue dark:text-green'> SO WHAT?</span></span>

                        <p className='mt-3 mb-20 font-roboto font-light'>
                        SO WHAT? is an application that summarizes important historical events, people & places into an easy-to-digest format that provides users with a topical overview of anything that piques their interest.
                        </p>
                    </div>

                </div>
                <div className='hidden 915px:flex w-smrightspace 915px:w-medrightspace 
                1150px:w-rightspace
                1150px:flex-initial justify-center bg-red p-10 dark:bg-darkgray'>
                    <div className='text-white text-6xl'>
                        <img className='1150px:w-pic rounded-md' src={ headshot } alt='headshot'/>

                        <Link to='https://www.linkedin.com/in/rsariego/' target='_blank'><i className="fa-brands fa-linkedin mt-4 hover:text-yellow"></i></Link>

                        <Link to='https://github.com/nopicklesplease' target='_blank'><i className="fa-brands fa-github mt-4 ml-4 hover:text-yellow"></i></Link>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;