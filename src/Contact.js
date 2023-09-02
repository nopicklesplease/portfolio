import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import SuccessfulEmail from './SuccessfulEmail';
import * as Scroll from 'react-scroll';

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
                <div className='transform -rotate-90 -ml-contact -mr-contact pr-4 align-middle mt-contacttop pt-1 text-white text-6xl font-poppins  font-extralight tracking-wide'>
                    CONTACT
                </div>
            </div>
            <div className='flex-1 bg-white p-6 font-roboto font-light text-justify border-l-50 border-yellow dark:border-green dark:bg-slategray'>

                {(emailSuccess) ? 
                    <>
                        <SuccessfulEmail />
                    </> 
                : 
                    <>
                    <form ref={form} onSubmit={ sendEmail }>
                        <TextField id="outlined-basic" label="Name" name="from_name" size='small' variant="standard"/>

                        <span className='ml-8'><TextField id="outlined-basic" label="Email Address" name="reply_to" color='success' size='small' variant="standard" /></span>

                        <TextField id="outlined-basic" label="Message" name="message" size='small' variant="standard" multiline/>

                        <SaveButtonStyled
                            sx={{
                                backgroundColor: 'black',
                            }}
                            type='submit'
                            variant='contained' 
                        >
                            Submit
                        </SaveButtonStyled>

                    </form>

                    <i onClick={() => {scroll.scrollToTop()}} className="fa-solid fa-arrow-up-long cursor-pointer"></i>

                    </>}
            </div>
            <div className='flex-initial flex justify-center bg-red p-8 dark:bg-darkgray w-rightspace'>
                <div className='text-white text-sm'>

                </div>
            </div>
        </div>
    )
};

export default Contact;