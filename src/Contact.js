import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SuccessfulEmail from './SuccessfulEmail';
import * as Scroll from 'react-scroll';
import { Parallax } from 'react-scroll-parallax';

const Contact = () => {

    const [emailSuccess, setEmailSuccess] = useState(false);
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

    const form = useRef();

    const SaveButtonStyled = styled(Button)({
        '&:hover': {
            backgroundColor: `${theme ? '#ffdd18' : '#005cef'}`,
            color: `${theme ? 'black' : 'white'}`,
        },
    })

    const sendEmail = (e) => {
        e.preventDefault();    

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBKEY)
    .then((result) => {
        setEmailSuccess(true);
        console.log(result.text);
        setTimeout(() => {
            setEmailSuccess(false)
        }, 10000)
    }, (error) => {
        console.log(error.text);
    });
};

const scroll = Scroll.animateScroll;

console.log(emailSuccess);

    return(
        <div className={`flex-column md:flex h-auto ${(theme) && 'dark'}`}>

            <div className='flex-initial bg-blue dark:bg-purple md:border-r-50 md:border-yellow dark:border-green'>
                <Parallax
                    translateY={['800px', '0px']}
                    startScroll={850} 
                    endScroll={2000}
                    shouldAlwaysCompleteAnimation={true}
                >
                    <div className='lg:transform lg:-rotate-90 lg:-ml-contact lg:-mr-contact lg:pr-4 lg:align-middle lg:mt-contacttop pt-1 text-white text-6xl font-roboto font-extralight tracking-wide md:w-50 lg:w-auto'>
                    <p className='hidden lg:flex'>CONTACT</p>
                    </div>
                </Parallax>
            </div>

            

            <div className='md:hidden flex justify-center font-roboto bg-yellow dark:bg-darkgray 
                    w-full
                    dark:bg-green'>
                        <div className='text-black text-sm'>
                            <p className='text-4xl text-slategray dark:text-white tracking-widest font-light p-10'>
                                CONTACT
                            </p>
                        </div>
            </div>

                        {/* <div className='flex lg:hidden pb-10 text-5xl  font-light font-roboto text-blue dark:text-lightgray'>
                        CONTACT
                    </div> */}
            
            <div className='flex-1 bg-offgray p-10 font-roboto font-light text-justify dark:bg-darkergray lg:pb-72'>


                {(emailSuccess) ? 
                    <>
                        <SuccessfulEmail />
                    </> 
                : 
                    <>
                    <form ref={form} onSubmit={ sendEmail }>

                        <div className='mb-2 tracking-widest'>
                            NAME
                        </div>
                        <div>
                            <input className='text-black rounded p-2 w-full outline-0 mb-8 dark:bg-offgray dark:bg-white' name='from_name' placeholder='Enter your name'></input>
                        </div>

                        <div className='mb-2 tracking-widest'>
                            EMAIL ADDRESS
                        </div>
                        <div>
                            <input className='text-black rounded p-2 w-full outline-0 mb-8 dark:bg-offgray dark:bg-white' name='reply_to' placeholder='Enter your email address'></input>
                        </div>

                        <div className='mb-2 tracking-widest'>
                            MESSAGE
                        </div>
                        <div>
                            <textarea className='text-black rounded p-2 w-full h-32 outline-0 mb-8 dark:bg-offgray dark:bg-white' name='message' placeholder='Write your message'></textarea>
                        </div>
{/* 
                        <TextField id="outlined-basic" label="Name" name="from_name" size='small' variant="standard"/>

                        <span className='ml-8'><TextField id="outlined-basic" label="Email Address" name="reply_to" color='success' size='small' variant="standard" /></span>

                        <TextField id="outlined-basic" label="Message" name="message" size='small' variant="standard" multiline/> */}

                        <div className='flex justify-center'>
                            <SaveButtonStyled
                                sx={{
                                    backgroundColor: `${theme ? '#8b5ea2' : 'black'}`,
                                    color: `${theme ? 'white' : 'white'}`,
                                    width: '45%',
                                    typography: {
                                        fontFamily: 'Roboto',
                                        fontSize: 16,
                                        fontWeight: '300'
                                    }
                                }}
                                type='submit'
                                variant='contained' 
                            >
                                Submit
                            </SaveButtonStyled>
                        </div>

                    </form>

                    </>}


            </div>
                <div className='hidden 915px:block flex-column h-auto bg-red dark:bg-darkgray
                w-smrightspace
                915px:w-medrightspace 1150px:w-rightspace'>

                    <div className='p-10 bg-yellow dark:bg-green font-roboto text-base text-black dark:text-white font-light leading-6'>
                        <p>Open to all Front-End Development opportunities.</p> 
                        <p className='pt-6'>If you're interested in my work, please use this form to contact me and I'll respond promptly.</p>
                    </div>
                    <div className='flex text-offgray w-full dark:bg-darkgray p-10'>
                        <p className='text-5xl'>
                        <Link to='https://www.linkedin.com/in/rsariego/' title='LinkedIn Profile' target='_blank'><i className="fa-brands fa-linkedin hover:text-black dark:hover:text-yellow"></i></Link>

                        <Link to='https://github.com/nopicklesplease' title='Github Profile' target='_blank'><i className="fa-brands fa-github ml-4 hover:text-black dark:hover:text-yellow"></i></Link> 
                        </p>
                    </div>
                    {/* <div className='flex bg-red w-rightspace'>
                        <div className='text-white w-full bg-red p-10 dark:bg-darkgray'>
                            <i onClick={() => {scroll.scrollToTop()}} className="fa-solid fa-arrow-up-long cursor-pointer text-8xl"></i>
                        </div>
                    </div> */}
                </div>
                {/* <div className='flex-initial flex bg-darkred p-12 pt-11 dark:bg-rightoffgray w-rightspace'>
                    <div className='text-white text-7xl'>
                        <Link to='https://www.linkedin.com/in/rsariego/' target='_blank'><i className="fa-brands fa-linkedin hover:text-yellow"></i></Link>

                        <Link to='https://github.com/nopicklesplease' target='_blank'><i className="fa-brands fa-github ml-4 hover:text-yellow"></i></Link>
                    </div>
                </div> */}
        </div>
    )
};

export default Contact;