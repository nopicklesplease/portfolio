import React from 'react';

const SerenadeTools = () => {

    const tools = ['JavaScript', 'React.js', 'Redux.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'React Router', 'OpenAI API', 'Spotify API', 'HTML', 'Vanilla CSS', 'Material-UI', 'Responsive Design', 'Adobe Photoshop']

    return(
        <>
            {tools.map(tool => {
                return(
                    <div className='p-2 bg-white dark: text-slategray rounded-md max-w-fit m-1 cursor-default'>{ tool }</div>  
                )
            })}
        </>
    )
}

export default SerenadeTools;