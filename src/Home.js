import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import { toggleTheme } from './store/theme';

const Home = () => {

    const theme = useSelector((state) => state.switchTheme.active);

    const dispatch = useDispatch();

    return(
        <div>
            <div>
                <Nav />
            </div>
            <div className={`w-full h-screen ${(theme) && 'dark'}`}>
                <div className={'border-2 border-dotted border-indigo-600 rounded-md bg-slate-400 text-stone-50 dark:bg-slate-900 dark:border-solid'}>
                    Testing
                </div>
                <button onClick={ () => dispatch(toggleTheme()) }>Toggle Theme</button>

            </div>
        </div>
    )
}

export default Home;