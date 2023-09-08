import React from 'react';

const CurrentProject = () => {
    return(
        <div className='md:hidden flex-5 p-10 bg-white dark:bg-slategray'>
            <span className='font-normal text-xl tracking-widest'>CURRENT PROJECT: <span className='text-blue dark:text-green'> SO WHAT?</span></span>

            <p className='mt-3 font-roboto font-light'>
            SO WHAT? is an application that summarizes important historical events, people & places into an easy-to-digest format that provides users with a topical overview of anything that piques their interest.
            </p>
        </div>
    )
}

export default CurrentProject;