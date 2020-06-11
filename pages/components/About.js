import {FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'
export default function About() {
    return (
        <section className="about" id="about">
            <img src='/images/headshoticon1.jpg' alt='NatalieEstradaImage'/>
            <h2>About Me</h2>
            <p>I'm a software developer with a passion for being creative with my design using coding as tool to build amazing things. My strengths are in JavaScript, but I'm learning Python for a Machine Learning side project.</p>
            <h3>Learning & Growing</h3>
            <p>I'm just starting my journey in Software Development so I'm eager to learn different languages, libraries and frameworks.</p>
            <p>Currently Learning: Vue.js, Python & Deep Learning with PyTorch</p>
            <h3>Not Just A Coder</h3>
            <p>When I'm not coding you can find me: Taking care of my many plants, painting with watercolors, dancing and teaching Argentine Tango or learning how to use LMMS an open source music producing software.</p>
            <h3>Let's Connect!</h3>
            <div className='social-links'>
                <FaLinkedin/>
                <FaTwitter/>
                <FaGithub/>
            </div>
        </section>
    )
}