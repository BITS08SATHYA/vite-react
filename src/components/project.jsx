function Projects(props){

    return (
        <section id='projects' className='projects-section'>
            <h2>Projects</h2>
            <div className='projects-list'>
                {props.projects.map((item,index) => (
                    <div key={index} className="project-item">
                        <h3>{item.title}</h3>
                        <h3>{item.description}</h3>
                        <a href={item.link} target='_blank' rel='noopener noreferrer' >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;