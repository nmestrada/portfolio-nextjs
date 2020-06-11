import { FaGithub } from "react-icons/fa";
import {RiYoutubeLine} from 'react-icons/ri'

export default function SingleProject({project}) {
    const images = project.images;
    const techStack = project.techStack;
    return (
        <div 
            className="project card" 
            key={project.title}
        >
            
            <div className="project-content">
            {/* <button className='project-button' type='button'><RiArrowUpSLine/></button> */}
                <h2>{project.title}</h2>
                <p>{project.role}</p>
                <p>{project.description}</p>
                <p>Built With:
                    <ul className="techStack">
                        {techStack.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </p>
                <div className="project-links">
                    <a href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub/>
                    </a>
                    {project.youtube && <a href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <RiYoutubeLine/>
                    </a>}
                    {project.deployLink && <a href={project.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Site!
                    </a>}
                </div>
            </div>
            <div className='images-container'>
                <img src={images[0]} alt='project-image' className='image'/>
                {/* {images.map(image => <img key={image} src={image} alt='project-image' className='image'/>)}  */}
            </div>
        </div>
    )
}