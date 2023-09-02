import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import SuccessfulEmail from './SuccessfulEmail';
import * as Scroll from 'react-scroll';
import { Parallax } from 'react-scroll-parallax';
import { createTheme } from '@mui/material/styles';

const SaveButtonStyled = styled(Button)({
    '&:hover': {
        backgroundColor: 'orange',
    },
})

const Contact = () => {

    const [emailSuccess, setEmailSuccess] = useState(false);
    const theme = useSelector((state) => state.switchTheme.active);
    const form = useRef();

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
        <div className={`flex h-screen ${(theme) && 'dark'}`}>
            <div className='flex-initial bg-blue dark:bg-purple'>
                <Parallax
                    translateY={['800px', '0px']}
                    startScroll={1800}
                    endScroll={2600}
                    shouldAlwaysCompleteAnimation={true}
                >
                    <div className='transform -rotate-90 -ml-contact -mr-contact pr-4 align-middle mt-contacttop pt-1 text-white text-6xl font-poppins  font-extralight tracking-wide'>
                        CONTACT
                    </div>
                </Parallax>
            </div>
            <div className='flex-1 bg-offgray p-12 font-roboto font-light text-justify border-l-50 border-yellow dark:border-green dark:bg-darkergray'>
                <div className='bg-white p-10 rounded dark:bg-lightergray'>

                {(emailSuccess) ? 
                    <>
                        <SuccessfulEmail />
                    </> 
                : 
                    <>
                    <form ref={form} onSubmit={ sendEmail }>

                        <div className='text-black mb-2 tracking-widest'>
                            NAME
                        </div>
                        <div>
                            <input className='text-black rounded p-2 w-full outline-0 mb-8 bg-offgray' name='from_name' placeholder='Enter your name'></input>
                        </div>

                        <div className='text-black mb-2 tracking-widest'>
                            EMAIL ADDRESS
                        </div>
                        <div>
                            <input className='text-black rounded p-2 w-full outline-0 mb-8 bg-offgray' name='reply_to' placeholder='Enter your email address'></input>
                        </div>

                        <div className='text-black mb-2 tracking-widest'>
                            MESSAGE
                        </div>
                        <div>
                            <textarea className='text-black rounded p-2 w-full h-32 outline-0 mb-8 bg-offgray' name='message' placeholder='Enter your message'></textarea>
                        </div>
{/* 
                        <TextField id="outlined-basic" label="Name" name="from_name" size='small' variant="standard"/>

                        <span className='ml-8'><TextField id="outlined-basic" label="Email Address" name="reply_to" color='success' size='small' variant="standard" /></span>

                        <TextField id="outlined-basic" label="Message" name="message" size='small' variant="standard" multiline/> */}

                        <div className='flex justify-center'>
                            <SaveButtonStyled
                                sx={{
                                    backgroundColor: 'black',
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

                <i onClick={() => {scroll.scrollToTop()}} className="fa-solid fa-arrow-up-long cursor-pointer"></i>

            </div>
            <div className='flex bg-red dark:bg-darkgray w-rightspace'>
                <div className='text-white w-full h-auto bg-darkred p-10'>
                    <p className='text-7xl'>
                    <Link to='https://www.linkedin.com/in/rsariego/' target='_blank'><i className="fa-brands fa-linkedin hover:text-yellow"></i></Link>

                    <Link to='https://github.com/nopicklesplease' target='_blank'><i className="fa-brands fa-github ml-4 hover:text-yellow"></i></Link> 
                    </p>
                </div>
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