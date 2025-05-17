function About(props){
    return (
        <section id='about' className='about-section'>
            <h2>About Me</h2>
            <p>Hello I am {props.name}, and my profession is {props.profession}! I love
                building web applications and solve real world user problems.</p>
        </section>
    );
}

export default About;