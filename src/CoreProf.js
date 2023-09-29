import React from 'react';

const CoreProf = () => {

    const profs = ['JavaScript', 'React.js', 'Redux.js', 'Node.js', 'Express.js', 'Sequelize', 'React Router', 'PostgreSQL', 'RESTful API', 'Postman', 'GIT', 'Tailwind', 'React-Parallax', 'Material-UI', 'Responsive Design']

    const skills = ['Figma', 'Adobe Photoshop', 'Bitcoin Education', 'Audio Engineering', 'Music & Podcast Production', 'Photography']

    return(
        <>
            {profs.map(prof => {
                return(
                    <div className='p-2 bg-lightgray dark:text-slategray rounded-md max-w-fit m-1 hover:bg-yellow cursor-default'>{ prof }</div>
                )
            })}
            
            {skills.map(skill => {
                return(
                    <div className='p-2 bg-blue dark:bg-green text-white rounded-md max-w-fit m-1 hover:bg-yellow dark:hover:bg-yellow cursor-default hover:text-black'>{ skill }</div>
                )
            })}
        </>
    )
}

export default CoreProf;