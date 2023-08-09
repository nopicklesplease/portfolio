import React, { useState } from 'react';

const Home = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(darkMode => !darkMode);
    }

    console.log(darkMode);

    return(
        <div className={`w-full h-screen ${darkMode && 'dark'}`}>
            <div className={'border-2 border-dotted border-indigo-600 rounded-md bg-slate-400 text-stone-50 dark:bg-slate-900 dark:border-solid'}>
                Testing
            </div>
            <button onClick={ toggleDarkMode }>Toggle Theme</button>


        </div>
    )
}

export default Home;