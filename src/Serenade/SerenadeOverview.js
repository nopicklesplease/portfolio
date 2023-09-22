import React from 'react';

const SerenadeOverview = () => {
    return(
        <>
            <p className='text-lg md:text-base text-slategray dark:text-white mb-3 tracking-widest'>
                <span className='bg-offgray dark:bg-lightgray md:bg-lightgray  px-2 text-slategray p-1 rounded'>PROJECT OVERVIEW</span>
            </p>
            <p className='mb-4 text-pointninefive md:text-sm 1150px:text-pointninefive font-light leading-6 tracking-wider md:tracking-wide'>
                A web app that integrates openAI's DaVinci speech model & Spotify's API to interpret user prompts and turn them into creative Spotify playlists.
            </p>
            <p className='mb-10 text-pointninefive md:text-sm 1150px:text-pointninefive font-light leading-6 tracking-wider md:tracking-wide'>
                Users can provide any descriptor or reference to generate a Spotify playlist that's immediately ready for use in-app, along with the ability to customize their results and discover playlists from other users.
            </p>
            <p className='text-lg md:text-base text-slategray dark:text-white mb-3 tracking-widest'>
                <span className='bg-offgray dark:bg-lightgray md:bg-lightgray px-2 text-slategray p-1 rounded'>COMPLETION</span>
            </p>
            <p className='mb-10 text-pointninefive md:text-sm 1150px:text-pointninefive font-light leading-6 tracking-wider md: tracking-wide'>
                July 2023
            </p>
            <p className='text-lg md:text-base text-slategray mb-3 tracking-widest'>
                <span className='bg-offgray dark:bg-lightgray md:bg-lightgray px-2 text-slategray p-1 rounded'>ROLE & RESPONSIBILITIES</span>
            </p>
            <p className='mb-11 text-pointninefive md:text-sm 1150px:text-pointninefive font-light leading-6 tracking-wider md:tracking-wide'>
                Lead Front-End Engineer responsible for UX design, User Profile & My Playlists/Discover components, JSX rendering of Spotify playlist materials, responsive design for mobile.
            </p>
        </>
    )
}

export default SerenadeOverview;