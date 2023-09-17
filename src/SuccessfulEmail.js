import React from 'react';

const SuccessfulEmail = () => {
    return (
        <div className='flex-column'>
            <div className='flex justify-center text-8xl mb-4'><i class="fa-solid fa-envelope-circle-check"></i></div>
            <div className='flex justify-center tracking-wider'>Message successfully delivered! Thank you!</div>
        </div>
    )
}

export default SuccessfulEmail;