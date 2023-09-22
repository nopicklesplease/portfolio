import React from 'react';

const CalcOverview = () => {
    return(
        <>
            <p className='text-lg md:text-base text-slategray dark:text-white mb-3 tracking-widest'>
                <span className='bg-offgray dark:bg-lightgray md:bg-lightgray  px-2 text-slategray p-1 rounded'>PROJECT OVERVIEW</span>
            </p>
            <p className='mb-4 text-pointninefive md:text-sm font-light 1150px:text-pointninefive leading-6 tracking-wider md:tracking-wide'>
                A Bitcoin portfolio tracker disguised as an iOS calculator. Pressing the '+' key on the calculator five times unveils a login screen to access the web application.
            </p>
            <p className='mb-10 text-pointninefive md:text-sm font-light 1150px:text-pointninefive leading-6 tracking-wider md:tracking-wide'>
                This project incorporates the CoinMarketCap API to produce extensive, real-time portfolio statistics according to Bitcoin's current market price.
            </p>
            <p className='text-lg md:text-base text-slategray dark:text-white mb-3 tracking-widest'>
                <span className='bg-offgray dark:bg-lightgray md:bg-lightgray px-2 text-slategray p-1 rounded mb-3 md:mb-0'>COMPLETION</span>
            </p>
            <p className='mb-10 text-pointninefive md:text-sm font-light 1150px:text-pointninefive leading-6 tracking-wider md:tracking-wide'>
                June 2023
            </p>
            <p className='text-lg md:text-base text-slategray dark:text-white mb-3 tracking-widest'>
                <span className='bg-offgray dark:bg-lightgray md:bg-lightgray px-2 text-slategray p-1 rounded'>ROLE & RESPONSIBILITIES</span> 
            </p>
            <p className='mb-11 text-pointninefive md:text-sm font-light 1150px:text-pointninefive leading-6 tracking-wider md:tracking-wide'>
                Creator & Sole Developer
            </p>
        </>
    )
}

export default CalcOverview;