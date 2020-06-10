
export default function SingleProject({project}) {
    const images = project.images;
    const techStack = project.techStack;
    return (
        <div className="project card" key={project.title}>
            <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul className="techStack">
                    {techStack.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
            <div className='images-container'>
                {images.map(image => <img key={image} src={image} alt='project-image' className='image'/>)}
            </div>
        </div>
    )
}