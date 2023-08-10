import React from 'react';

const Nav = () => {
    return(
        <div className='flex border-2 border-blue'>
            <div className='flex-none border border-red'>
                Nav Bar
            </div>
            <div className='flex-1 border border-black'>

            </div>
            <div className='flex justify-between flex-initial w-80'>
                
                <div>
                    Home
                </div>
                <div>
                    Work
                </div>
                <div>
                    Resume
                </div>
                <div>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Nav;