import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import SuccessfulEmail from './SuccessfulEmail';

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

console.log(emailSuccess);

    return(
        <div className={`flex h-screen ${(theme) && 'dark'}`}>
            <div className='flex-initial bg-blue dark:bg-purple'>
                <div className='transform -rotate-90 -ml-contact -mr-contact pr-4 align-middle mt-contacttop pt-1 text-white text-6xl font-poppins  font-extralight tracking-wide'>
                    CONTACT
                </div>
            </div>
            <div className='flex-1 bg-white p-6 font-roboto font-light text-justify dark:bg-green'>

                {(emailSuccess) ? 
                    <>
                        <SuccessfulEmail />
                    </> 
                : 
                    <>
                                        <form ref={form} onSubmit={ sendEmail }>
                    <TextField id="outlined-basic" label="Name" name="from_name" variant="outlined" />
                    {/* <label>Name</label>
                    <input type="text" name="from_name" /> */}
                    <TextField id="outlined-basic" label="Email Address" name="reply_to" variant="outlined" />
                    {/* <label>Email</label>
                    <input type="email" name="reply_to" /> */}
                    <TextField id="outlined-basic" label="Message" name="message" variant="outlined" multiline/>
                    <SaveButtonStyled
                        sx={{
                            backgroundColor: '#33bbce',
                        }}
                        type='submit'
                        variant='contained' 
                    >
                        Submit
                    </SaveButtonStyled>
                    {/* <input type="submit" value="Send" /> */}
                    </form>
                    {/* <div>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Message" variant="outlined" multiline/>
                    </div> */}
                    </>}
            </div>
        </div>
    )
};

export default Contact;