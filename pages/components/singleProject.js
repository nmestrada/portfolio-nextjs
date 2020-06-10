
export default function SingleProject({project}) {
    const images = project.images;
    const techStack = project.techStack;
    return (
        <div 
            className="project card" 
            key={project.title}
        >
            <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>Built With:
                    <ul className="techStack">
                        {techStack.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </p>
                
            
                <div className="project-links">
                    <span>Github</span>
                </div>
            </div>
            <div className='images-container'>
                <img src={images[0]} alt='project-image' className='image'/>
                {/* {images.map(image => <img key={image} src={image} alt='project-image' className='image'/>)}  */}
            </div>
        </div>
    )
}